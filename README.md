<div dir="rtl">

# کیبورد فارسی بازطراحی شده (Persian but Better)

🌐 **[صفحه تعاملی و تست زنده کیبورد (GitHub Pages)](https://hamidrezaashkiyan.github.io/PersianKeyboardRedefined/)**

کیبورد های فارسی پیشفرض ویندوز مشکلاتی داشتند که به فکر افتادم که این کیبورد را طراحی کنم.
این کیبورد در واقع ترکیب شده کیبوردهای فارسی استاندارد و فارسی معمولی که در ویندوزه.

تصاویر دکمه ها در کیبورد
![image](https://user-images.githubusercontent.com/38791873/120096415-9f52bf00-c140-11eb-81b1-6a0b2d42ae8b.png)

Shift pressed
![image](https://user-images.githubusercontent.com/38791873/120096426-ada0db00-c140-11eb-9154-6bfb0198a9c6.png)

در این کیبورد که بر پایه کیبورد معمولی فارسی هست شما به جای اعداد بالای کیبورد که به صورت پیش فرض انگلیسی هستند اعداد فارسی دارین و همینطور نیم‌فاصله همان شیفت + اسپیس کیبورد استاندارد هست.

شما به راحتی میتوانید کیبورد های قبلی خود را پاک کنید و از این کیبورد استفاده کنید بدون اینکه هیچ مشکلی بر بخورید.

اگر پیشنهاد یا نکته ای دارین خوشحال میشم که با من در میون بزارین.
شاد و پیروز باشید و از کیبورد فارسی خوب استفاده کنید : )

</div>

---

## What's New in v2.0

🌐 **Try it live in your browser:** [hamidrezaashkiyan.github.io/PersianKeyboardRedefined](https://hamidrezaashkiyan.github.io/PersianKeyboardRedefined/) — interactive virtual keyboard with live physical-keyboard typing, `AltGr` preview, and a ZWNJ (`U+200C`) visualizer.

### Bug Fixes
- **Proper Half-Space (`Shift + Space`)**: Fixed `Shift + Space` to emit **ZWNJ (`U+200C`)** instead of Zero-Width Space (`U+200B`), preventing mid-word line breaks and fixing search/spellchecker compatibility. (`U+200B` remains available on `Ctrl + Shift + Space`.)
- **Persian Yeh in Rial Ligature (`Shift + R`)**: Fixed `Shift + R` to emit `ریال` with **Farsi Yeh (`U+06CC`)** instead of Arabic Yeh (`U+064A`).
- **Restored App Shortcuts (`Ctrl + 0`, `Ctrl + -`)**: Removed legacy `Ctrl + 0` (`U+06C1`, Urdu Heh Goal) and `Ctrl + -` (`U+200C`) bindings that hijacked browser/editor **Reset Zoom** and **Zoom Out** shortcuts.
- **Metadata**: Fixed author name spelling (`Hamid Reza Ashkiyan`) in `Better Persian.klc`.

### New `AltGr` (`Right Alt` / `Option` on macOS) Layer
All base and `Shift` letter positions stay identical to legacy Windows Persian, while `AltGr` adds ASCII digits and missing Persian typography:

| Key | `AltGr` (`Option`) | `AltGr + Shift` (`Option + Shift`) |
| --- | --- | --- |
| `1` – `0` | ASCII `1` – `0` | `1` ZWJ · `2` ZWNJ · `3` LRM · `4` RLM · `5` `٪` (`U+066A`) |
| `-` | En Dash `–` (`U+2013`) | Em Dash `—` (`U+2014`) |
| `` ` `` | Backtick `` ` `` | Tilde `~` |
| `Q` | Sukun `ْ` (`U+0652`) | — |
| `R` | Rial Sign `﷼` (`U+FDFC`) | — |
| `G` | Hamza Above `ٔ` (`U+0654`, for standard `هٔ`) | — |
| `H` | Superscript Alef `ٰ` (`U+0670`, e.g. `موسیٰ`) | — |
| `K` / `L` | Single Guillemets `‹` / `›` (`U+2039` / `U+203A`) | — |
| `,` | Arabic Thousands Separator `٬` (`U+066C`) | — |
| `.` | Arabic Decimal Separator `٫` (`U+066B`) | Ellipsis `…` (`U+2026`) |
| `Space` | No-Break Space (`U+00A0`) | — |

### Comparison

| Feature | Windows Persian (Legacy) | Windows Persian (Standard) | Persian but Better v2.0 |
| --- | --- | --- | --- |
| Legacy letter positions (`پ` on `\`, `ژ` on `Shift+C`) | Yes | No (moved) | **Yes** |
| Persian digits on number row (`۰`–`۹`) | No | Yes | **Yes** |
| Half-space (`U+200C`) on `Shift + Space` | No | Yes | **Yes** |
| ASCII digits (`0`–`9`) via `AltGr` | No | Yes | **Yes** |
| Full diacritics incl. Sukun (`ْ`) & Hamza Above (`ٔ`) | No | Yes | **Yes** |
| `Ctrl+0` / `Ctrl+-` zoom shortcuts intact | No | Yes | **Yes** |
| macOS & Linux layouts included | — | — | **Yes** |

---

## Installation

### Windows
1. Download the prebuilt installer from [Releases](https://github.com/HamidRezaAshkiyan/PersianKeyboardRedefined/releases), **or** build from source:
   - Open [`Better Persian.klc`](Better%20Persian.klc) in **Microsoft Keyboard Layout Creator (MSKLC)**.
   - Go to **Project → Build DLL and Setup Package** and run the generated `setup.exe`.
2. Sign out and sign back in, then select **Persian but Better** under **Settings → Time & Language → Language & Region → Persian → Keyboard**.

### macOS
1. Copy [`macos/Persian but Better.keylayout`](macos/Persian%20but%20Better.keylayout) to `~/Library/Keyboard Layouts/` (for your user) or `/Library/Keyboard Layouts/` (for all users).
2. Log out and log back in.
3. Go to **System Settings → Keyboard → Text Input → Input Sources → Edit… → `+` → Others** and add **Persian but Better**.
   *(Use `Option` for the `AltGr` layer; `Cmd` shortcuts remain mapped to US QWERTY.)*

### Linux (X11 / XKB)
1. Copy [`linux/persian-but-better.xkb`](linux/persian-but-better.xkb) to `/usr/share/X11/xkb/symbols/persian_better` (or append its `xkb_symbols "better"` block to `/usr/share/X11/xkb/symbols/ir`).
2. Activate it with:
   ```bash
   setxkbmap persian_better better
   ```
   *(Or if appended to `ir`: `setxkbmap ir better`.)*
