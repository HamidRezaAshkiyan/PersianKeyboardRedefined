# AGENTS.md — PersianKeyboardRedefined ("Persian but Better")

## Overview
Cross-platform custom Persian keyboard layout ("Persian but Better") that preserves legacy Windows Persian letter positions (`پ` on `\`, `ژ` on `Shift+C`) while adding Persian digits (`۰`–`۹`) on the number row, proper ZWNJ half-space (`U+200C`) on `Shift+Space`, Farsi Yeh (`U+06CC`) in the Rial ligature (`Shift+R`), restored `Ctrl+0` / `Ctrl+-` shortcuts, and an `Option`/`AltGr` layer on macOS and Linux. Also includes Windows installer scripts/Inno Setup packaging and a static GitHub Pages interactive tester (`docs/`).

## Tech Stack & Requirements
- **Windows Layout**: Microsoft Keyboard Layout Creator (MSKLC) source file (`Better Persian.klc`, UTF-16LE), compiled `Parsi.dll` (`amd64`, `wow64`, `i386`), PowerShell install/uninstall scripts, CMD UAC wrapper (`setup.cmd`), and Inno Setup (`installer/PersianButBetter.iss`)
- **macOS Layout**: XML `.keylayout` (`macos/Persian but Better.keylayout`)
- **Linux Layout**: X11 / XKB symbols file (`linux/persian-but-better.xkb`)
- **Interactive Web Demo**: Zero-dependency vanilla HTML5, CSS3, and ES6 JavaScript (`docs/index.html`, `docs/app.js`, `docs/styles.css`) hosted on GitHub Pages

## Repository Structure
```text
PersianKeyboardRedefined/
├── Better Persian.klc                        # Windows MSKLC layout source (builds Parsi.dll)
├── macos/
│   └── Persian but Better.keylayout          # macOS XML keyboard layout (Option = AltGr layer)
├── linux/
│   └── persian-but-better.xkb                # X11/XKB symbols definition (xkb_symbols "better")
├── installer/
│   ├── PersianButBetter.iss                  # Inno Setup script (expects dist/windows/{amd64,wow64,i386}/Parsi.dll)
│   ├── Install-PersianButBetter.ps1          # Elevated PS installer (copies Parsi.dll, allocates KLID + Layout Id)
│   ├── Uninstall-PersianButBetter.ps1        # Elevated PS uninstaller (removes registry entries + DLLs)
│   ├── setup.cmd                             # UAC-elevating wrapper for Install-PersianButBetter.ps1
│   └── README.md                             # Windows installer usage notes
├── docs/                                     # GitHub Pages interactive keyboard tester
│   ├── index.html
│   ├── app.js
│   ├── styles.css
│   └── .nojekyll
└── README.md                                 # Layout documentation & install instructions
```

## Architecture & Key Flows
- **Layout Sources (keep in sync when changing key mappings)**:
  - Windows: `Better Persian.klc` (note: `AltGr` layer is intentionally NOT enabled on Windows so `Right Alt + Shift` continues switching input languages).
  - macOS: `macos/Persian but Better.keylayout` (`Option` provides ASCII digits + typography; `Cmd` shortcuts remain US QWERTY).
  - Linux: `linux/persian-but-better.xkb` (`AltGr` provides ASCII digits + typography).
  - Web Tester: `docs/app.js` mirrors the layout for live browser preview and ZWNJ (`U+200C`) visualization.
- **Windows Installer Flow**: Both `Install-PersianButBetter.ps1` and `PersianButBetter.iss` copy `Parsi.dll` to `System32`/`SysWOW64` and dynamically allocate a free Persian KLID (`aXXX0429`) and `Layout Id` (`00c0`–`0fff`) under `HKLM:\SYSTEM\CurrentControlSet\Control\Keyboard Layouts` (reusing an existing registration if `Parsi.dll` is already installed).

## Development & Commands
- **Preview interactive web tester locally**:
  ```bash
  python3 -m http.server 8000 --directory docs
  ```
- **Build Windows DLLs**: Open `Better Persian.klc` in Microsoft Keyboard Layout Creator (MSKLC) on Windows → **Project → Build DLL and Setup Package** (outputs `amd64/Parsi.dll`, `wow64/Parsi.dll`, `i386/Parsi.dll`).
- **Build Windows `.exe` installer**: Stage compiled DLLs under `dist/windows/{amd64,wow64,i386}/Parsi.dll` and compile `installer/PersianButBetter.iss` with Inno Setup (`iscc`).
- **Install on macOS**: Copy `macos/Persian but Better.keylayout` to `~/Library/Keyboard Layouts/` (or `/Library/Keyboard Layouts/`), log out/in, and enable under **System Settings → Keyboard → Text Input → Input Sources → Others**.
- **Install on Linux (X11)**: Copy `linux/persian-but-better.xkb` to `/usr/share/X11/xkb/symbols/persian_better` and run `setxkbmap persian_better better`.

## Configuration & Environment
- No runtime environment variables or secrets.
- `installer/PersianButBetter.iss` accepts optional Inno Setup preprocessor defines: `MyAppVersion` (default `2.1`) and `StageDir` (default `..\dist\windows`).
- `Install-PersianButBetter.ps1` accepts optional `-LayoutId` and `-Klid` overrides and requires Administrator privileges (`#Requires -RunAsAdministrator`).

## Conventions & Gotchas
- **File encoding of `Better Persian.klc`**: MSKLC `.klc` files are UTF-16LE with BOM and CRLF line endings — do not accidentally convert to UTF-8 without checking MSKLC compatibility.
- **Windows `AltGr` is intentionally omitted**: Do not add an `AltGr` column to `Better Persian.klc` without explicit request; it breaks `Right Alt + Shift` language switching on Windows.
- **Unicode accuracy**: Half-space MUST be ZWNJ (`U+200C`, not `U+200B`), and Persian Yeh MUST be `U+06CC` (not Arabic Yeh `U+064A`).
- **Cross-platform parity**: Any base or `Shift` key change should be updated consistently across `Better Persian.klc`, `macos/Persian but Better.keylayout`, `linux/persian-but-better.xkb`, and `docs/app.js`.
- **Sign-out required**: Both Windows and macOS require logging out and back in for newly installed keyboard layouts to appear.
