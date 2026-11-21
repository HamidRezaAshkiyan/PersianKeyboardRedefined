# Persian but Better — test installer (v1.1 core)

Pre-built keyboard layout DLLs for trying the **core** PR changes.

| File | Arch |
| --- | --- |
| `amd64/Parsi.dll` | 64-bit Windows (`System32`) |
| `wow64/Parsi.dll` | 32-bit processes on 64-bit Windows (`SysWOW64`) |
| `i386/Parsi.dll` | 32-bit Windows |

## Install

1. Right-click `setup.cmd` → **Run as administrator**
2. Sign out and sign in (or reboot)
3. **Settings → Time & language → Language & region → Persian (Iran) → Language options → Add a keyboard → Persian but Better**

Unregister with elevated `.\Uninstall-PersianButBetter.ps1`.

## What this build includes

- Half-space: `Shift+Space` → ZWNJ (`U+200C`); `Ctrl+Shift+Space` → ZWSP
- Persian digits on the top number row
- `Shift+R` → `ریال` with Farsi ی

Built with MSKLC `kbdutool` from `Better Persian.klc` on this branch.
