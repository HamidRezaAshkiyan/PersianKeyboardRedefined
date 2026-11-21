#Requires -RunAsAdministrator
[CmdletBinding()]
param([string]$Klid = 'a0020429')
$ErrorActionPreference = 'Stop'
$DllName = 'ParsPct.dll'
$regPath = "HKLM:\SYSTEM\CurrentControlSet\Control\Keyboard Layouts\$Klid"
if (Test-Path $regPath) { Remove-Item -Path $regPath -Recurse -Force; Write-Host "Removed $regPath" }
foreach ($dir in @("$env:WINDIR\System32", "$env:WINDIR\SysWOW64")) {
  $dll = Join-Path $dir $DllName
  if (Test-Path $dll) { try { Remove-Item -LiteralPath $dll -Force; Write-Host "Removed $dll" } catch { Write-Warning $_ } }
}
Write-Host "Uninstall complete."
