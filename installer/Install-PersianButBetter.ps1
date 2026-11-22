#Requires -RunAsAdministrator
[CmdletBinding()]
param(
    [string]$LayoutId = '00db',
    [string]$Klid = 'a0010429'
)
$ErrorActionPreference = 'Stop'
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$DllName = 'Parsi.dll'
$DisplayName = 'Persian but Better'

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

$regPath = "HKLM:\SYSTEM\CurrentControlSet\Control\Keyboard Layouts\$Klid"
New-Item -Path $regPath -Force | Out-Null
New-ItemProperty -Path $regPath -Name 'Layout Text' -Value $DisplayName -PropertyType String -Force | Out-Null
New-ItemProperty -Path $regPath -Name 'Layout File' -Value $DllName -PropertyType String -Force | Out-Null
New-ItemProperty -Path $regPath -Name 'Layout Display Name' -Value "@$DllName,-1000" -PropertyType String -Force | Out-Null
New-ItemProperty -Path $regPath -Name 'Layout Id' -Value $LayoutId -PropertyType String -Force | Out-Null

Write-Host "Registered $Klid ($DisplayName v2.0). Sign out and sign back in, then add this keyboard under Persian language options."
