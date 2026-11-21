

<div dir="rtl">

# کیبورد فارسی بازطراحی شده

کیبورد های فارسی پیشفرض ویندوز مشکلاتی داشتند که به فکر افتادم که این کیبورد را طراحی کنم
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

## English overview

**Persian but Better** keeps the familiar Windows “Persian” (legacy) letter positions, with Persian digits on the number row and a correct half-space on `Shift+Space`.

### Features (this branch)

| Feature | How |
| --- | --- |
| Persian digits on the number row | `۰`–`۹` |
| Half-space (ZWNJ / نیم‌فاصله) | `Shift+Space` → ZWNJ (`U+200C`) |
| Zero-width space (optional) | `Ctrl+Shift+Space` → ZWSP |
| Rial ligature | `Shift+R` → `ریال` with Farsi ی (`U+06CC`) |

### Quick install (test build)

Use [`installer/`](installer/) — run `setup.cmd` as Administrator, sign out/in, then add **Persian but Better** under Persian language options.

### Changelog (v1.1 — core)

- **Fix half-space:** `Shift+Space` emits ZWNJ (`U+200C`) instead of ZWSP (`U+200B`).
- **Rial spelling:** `Shift+R` uses Farsi ی (`U+06CC`).
- **Metadata:** Hamid Reza Ashkiyan; version `1.1`.
- **Installer:** pre-built DLLs under `installer/`.
