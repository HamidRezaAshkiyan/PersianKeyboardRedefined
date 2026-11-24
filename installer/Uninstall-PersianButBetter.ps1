#Requires -RunAsAdministrator
[CmdletBinding()]
param([string]$Klid = '')
$ErrorActionPreference = 'Stop'
$DllName = 'Parsi.dll'
$LayoutsRoot = 'HKLM:\SYSTEM\CurrentControlSet\Control\Keyboard Layouts'

if ($Klid) {
    $regPath = Join-Path $LayoutsRoot $Klid
    if (Test-Path $regPath) {
        Remove-Item -Path $regPath -Recurse -Force
        Write-Host "Removed $regPath"
    }
} else {
    foreach ($key in (Get-ChildItem -Path $LayoutsRoot)) {
        $props = Get-ItemProperty -Path $key.PSPath -ErrorAction SilentlyContinue
        if ($props.'Layout File' -and ($props.'Layout File'.ToString().ToLowerInvariant() -eq $DllName.ToLowerInvariant())) {
            Remove-Item -Path $key.PSPath -Recurse -Force
            Write-Host "Removed $($key.PSPath)"
        }
    }
}

foreach ($dir in @("$env:WINDIR\System32", "$env:WINDIR\SysWOW64")) {
    $dll = Join-Path $dir $DllName
    if (Test-Path $dll) {
        try {
            Remove-Item -LiteralPath $dll -Force
            Write-Host "Removed $dll"
        } catch {
            Write-Warning $_
        }
    }
}
Write-Host "Uninstall complete. Sign out and sign back in to finish cleanup."
