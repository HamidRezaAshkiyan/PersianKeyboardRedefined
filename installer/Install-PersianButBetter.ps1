#Requires -RunAsAdministrator
[CmdletBinding()]
param(
    [string]$LayoutId = '',
    [string]$Klid = ''
)
$ErrorActionPreference = 'Stop'
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$DllName = 'Parsi.dll'
$DisplayName = 'Persian but Better'
$LayoutsRoot = 'HKLM:\SYSTEM\CurrentControlSet\Control\Keyboard Layouts'

function Copy-LayoutDll([string]$Source, [string]$DestinationDir) {
    if (-not (Test-Path $Source)) { throw "Missing layout DLL: $Source" }
    New-Item -ItemType Directory -Path $DestinationDir -Force | Out-Null
    Copy-Item -LiteralPath $Source -Destination (Join-Path $DestinationDir $DllName) -Force
    Write-Host "Installed $(Join-Path $DestinationDir $DllName)"
}

$amd64 = Join-Path $Root ("amd64\" + $DllName)
$i386  = Join-Path $Root ("i386\" + $DllName)
$wow64 = Join-Path $Root ("wow64\" + $DllName)

if ([Environment]::Is64BitOperatingSystem) {
    Copy-LayoutDll $amd64 "$env:WINDIR\System32"
    if (Test-Path $wow64) { Copy-LayoutDll $wow64 "$env:WINDIR\SysWOW64" }
    elseif (Test-Path $i386) { Copy-LayoutDll $i386 "$env:WINDIR\SysWOW64" }
} else {
    Copy-LayoutDll $i386 "$env:WINDIR\System32"
}

$existingKeys = Get-ChildItem -Path $LayoutsRoot
$usedKlids = @{}
$usedLayoutIds = @{}
$existingParsiKey = $null

foreach ($key in $existingKeys) {
    $usedKlids[$key.PSChildName.ToLowerInvariant()] = $true
    $props = Get-ItemProperty -Path $key.PSPath -ErrorAction SilentlyContinue
    if ($props.'Layout Id') {
        $usedLayoutIds[$props.'Layout Id'.ToString().ToLowerInvariant()] = $true
    }
    if (-not $existingParsiKey -and $props.'Layout File' -and ($props.'Layout File'.ToString().ToLowerInvariant() -eq $DllName.ToLowerInvariant())) {
        $existingParsiKey = $key
    }
}

if (-not $Klid) {
    if ($existingParsiKey) {
        $Klid = $existingParsiKey.PSChildName
    } else {
        for ($i = 0; $i -le 255; $i++) {
            $candidate = ('a{0:x3}0429' -f $i)
            if (-not $usedKlids.ContainsKey($candidate)) {
                $Klid = $candidate
                break
            }
        }
    }
}

if (-not $LayoutId) {
    if ($existingParsiKey) {
        $existingProps = Get-ItemProperty -Path $existingParsiKey.PSPath -ErrorAction SilentlyContinue
        if ($existingProps.'Layout Id') {
            $LayoutId = $existingProps.'Layout Id'.ToString()
        }
    }
    if (-not $LayoutId) {
        for ($i = 0x00C0; $i -le 0x0FFF; $i++) {
            $candidate = ('{0:x4}' -f $i)
            if (-not $usedLayoutIds.ContainsKey($candidate)) {
                $LayoutId = $candidate
                break
            }
        }
    }
}

if (-not $Klid -or -not $LayoutId) {
    throw "Could not allocate a free KLID / Layout Id in $LayoutsRoot"
}

$regPath = Join-Path $LayoutsRoot $Klid
New-Item -Path $regPath -Force | Out-Null
New-ItemProperty -Path $regPath -Name 'Layout Text' -Value $DisplayName -PropertyType String -Force | Out-Null
New-ItemProperty -Path $regPath -Name 'Layout File' -Value $DllName -PropertyType String -Force | Out-Null
New-ItemProperty -Path $regPath -Name 'Layout Display Name' -Value "@$DllName,-1000" -PropertyType String -Force | Out-Null
New-ItemProperty -Path $regPath -Name 'Layout Id' -Value $LayoutId -PropertyType String -Force | Out-Null

Write-Host "Registered $Klid (Layout Id $LayoutId) for $DisplayName. Sign out and sign back in, then add this keyboard under Persian language options."
