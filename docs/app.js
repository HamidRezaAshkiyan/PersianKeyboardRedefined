(() => {
  // Exact v2.0 layout matching Better Persian.klc
  // Each key: { code, legend, w?, mod?, base, shift, altgr, altgrShift, labels?, highlight? }
  const ROWS = [
    [
      { code: "Backquote", legend: "`", base: "÷", shift: "×", altgr: "`", altgrShift: "~" },
      { code: "Digit1", legend: "1", base: "۱", shift: "!", altgr: "1", altgrShift: "\u200D", labels: { altgrShift: "ZWJ" } },
      { code: "Digit2", legend: "2", base: "۲", shift: "@", altgr: "2", altgrShift: "\u200C", labels: { altgrShift: "ZWNJ" } },
      { code: "Digit3", legend: "3", base: "۳", shift: "#", altgr: "3", altgrShift: "\u200E", labels: { altgrShift: "LRM" } },
      { code: "Digit4", legend: "4", base: "۴", shift: "$", altgr: "4", altgrShift: "\u200F", labels: { altgrShift: "RLM" } },
      { code: "Digit5", legend: "5", base: "۵", shift: "%", altgr: "5", altgrShift: "٪" },
      { code: "Digit6", legend: "6", base: "۶", shift: "^", altgr: "6", altgrShift: "" },
      { code: "Digit7", legend: "7", base: "۷", shift: "&", altgr: "7", altgrShift: "" },
      { code: "Digit8", legend: "8", base: "۸", shift: "*", altgr: "8", altgrShift: "" },
      { code: "Digit9", legend: "9", base: "۹", shift: ")", altgr: "9", altgrShift: "" },
      { code: "Digit0", legend: "0", base: "۰", shift: "(", altgr: "0", altgrShift: "" },
      { code: "Minus", legend: "-", base: "-", shift: "_", altgr: "–", altgrShift: "—" },
      { code: "Equal", legend: "=", base: "=", shift: "+", altgr: "", altgrShift: "" },
      { code: "Backspace", legend: "⌫", w: "w-200", mod: "backspace" }
    ],
    [
      { code: "Tab", legend: "Tab", w: "w-150", mod: "tab" },
      { code: "KeyQ", legend: "Q", base: "ض", shift: "ً", altgr: "ْ", altgrShift: "", highlight: ["altgr"] },
      { code: "KeyW", legend: "W", base: "ص", shift: "ٌ", altgr: "", altgrShift: "" },
      { code: "KeyE", legend: "E", base: "ث", shift: "ٍ", altgr: "", altgrShift: "" },
      { code: "KeyR", legend: "R", base: "ق", shift: "ریال", altgr: "﷼", altgrShift: "", highlight: ["shift", "altgr"] },
      { code: "KeyT", legend: "T", base: "ف", shift: "،", altgr: "", altgrShift: "" },
      { code: "KeyY", legend: "Y", base: "غ", shift: "؛", altgr: "", altgrShift: "" },
      { code: "KeyU", legend: "U", base: "ع", shift: ",", altgr: "", altgrShift: "" },
      { code: "KeyI", legend: "I", base: "ه", shift: "]", altgr: "", altgrShift: "" },
      { code: "KeyO", legend: "O", base: "خ", shift: "[", altgr: "", altgrShift: "" },
      { code: "KeyP", legend: "P", base: "ح", shift: "\\", altgr: "", altgrShift: "" },
      { code: "BracketLeft", legend: "[", base: "ج", shift: "}", altgr: "", altgrShift: "" },
      { code: "BracketRight", legend: "]", base: "چ", shift: "{", altgr: "", altgrShift: "" },
      { code: "Backslash", legend: "\\", base: "پ", shift: "|", altgr: "", altgrShift: "", w: "w-150" }
    ],
    [
      { code: "CapsLock", legend: "Caps", w: "w-175", mod: "caps" },
      { code: "KeyA", legend: "A", base: "ش", shift: "َ", altgr: "", altgrShift: "" },
      { code: "KeyS", legend: "S", base: "س", shift: "ُ", altgr: "", altgrShift: "" },
      { code: "KeyD", legend: "D", base: "ی", shift: "ِ", altgr: "", altgrShift: "" },
      { code: "KeyF", legend: "F", base: "ب", shift: "ّ", altgr: "", altgrShift: "" },
      { code: "KeyG", legend: "G", base: "ل", shift: "ۀ", altgr: "ٔ", altgrShift: "", highlight: ["altgr"] },
      { code: "KeyH", legend: "H", base: "ا", shift: "آ", altgr: "ٰ", altgrShift: "", highlight: ["altgr"] },
      { code: "KeyJ", legend: "J", base: "ت", shift: "ـ", altgr: "", altgrShift: "" },
      { code: "KeyK", legend: "K", base: "ن", shift: "«", altgr: "‹", altgrShift: "" },
      { code: "KeyL", legend: "L", base: "م", shift: "»", altgr: "›", altgrShift: "" },
      { code: "Semicolon", legend: ";", base: "ک", shift: ":", altgr: "", altgrShift: "" },
      { code: "Quote", legend: "'", base: "گ", shift: '"', altgr: "", altgrShift: "" },
      { code: "Enter", legend: "Enter", w: "w-225", mod: "enter" }
    ],
    [
      { code: "ShiftLeft", legend: "Shift", w: "w-225", mod: "shift" },
      { code: "KeyZ", legend: "Z", base: "ظ", shift: "ة", altgr: "", altgrShift: "" },
      { code: "KeyX", legend: "X", base: "ط", shift: "ي", altgr: "", altgrShift: "" },
      { code: "KeyC", legend: "C", base: "ز", shift: "ژ", altgr: "", altgrShift: "" },
      { code: "KeyV", legend: "V", base: "ر", shift: "ؤ", altgr: "", altgrShift: "" },
      { code: "KeyB", legend: "B", base: "ذ", shift: "إ", altgr: "", altgrShift: "" },
      { code: "KeyN", legend: "N", base: "د", shift: "أ", altgr: "", altgrShift: "" },
      { code: "KeyM", legend: "M", base: "ئ", shift: "ء", altgr: "", altgrShift: "" },
      { code: "Comma", legend: ",", base: "و", shift: "<", altgr: "٬", altgrShift: "", highlight: ["altgr"] },
      { code: "Period", legend: ".", base: ".", shift: ">", altgr: "٫", altgrShift: "…", highlight: ["altgr", "altgrShift"] },
      { code: "Slash", legend: "/", base: "/", shift: "؟", altgr: "", altgrShift: "" },
      { code: "ShiftRight", legend: "Shift", w: "w-275", mod: "shift" }
    ],
    [
      { code: "ControlLeft", legend: "Ctrl", w: "w-150", mod: "ctrl" },
      { code: "AltLeft", legend: "Alt", w: "w-125", mod: "alt" },
      {
        code: "Space",
        legend: "Space",
        base: " ",
        shift: "\u200C",
        altgr: "\u00A0",
        altgrShift: "",
        labels: { base: "Space", shift: "نیم‌فاصله (ZWNJ)", altgr: "NBSP" },
        highlight: ["shift"],
        w: "w-space"
      },
      { code: "AltRight", legend: "AltGr", w: "w-150", mod: "altgr" },
      { code: "ControlRight", legend: "Ctrl", w: "w-150", mod: "ctrl" }
    ]
  ];

  const KEY_BY_CODE = new Map();
  ROWS.forEach((row) => row.forEach((k) => KEY_BY_CODE.set(k.code, k)));

  const SPECIAL_NAMES = {
    "\u200C": "ZERO WIDTH NON-JOINER (نیم‌فاصله)",
    "\u200D": "ZERO WIDTH JOINER",
    "\u200E": "LEFT-TO-RIGHT MARK",
    "\u200F": "RIGHT-TO-LEFT MARK",
    "\u00A0": "NO-BREAK SPACE",
    " ": "SPACE",
    "ریال": "RIAL LIGATURE (U+0631 U+06CC U+0627 U+0644)",
    "﷼": "RIAL SIGN",
    "ْ": "ARABIC SUKUN",
    "ٔ": "ARABIC HAMZA ABOVE",
    "ٰ": "ARABIC SUPERSCRIPT ALEF",
    "٪": "ARABIC PERCENT SIGN",
    "٫": "ARABIC DECIMAL SEPARATOR",
    "٬": "ARABIC THOUSANDS SEPARATOR",
    "…": "HORIZONTAL ELLIPSIS",
    "–": "EN DASH",
    "—": "EM DASH"
  };

  const I18N = {
    fa: {
      brand: "کیبورد فارسی بازطراحی شده",
      heroTitle: "کیبورد فارسی آشنا، اما بی‌نقص‌تر",
      heroDesc: "چیدمان حروف کیبورد کلاسیک فارسی ویندوز بدون تغییر عادت تایپ، همراه با اعداد فارسی در ردیف بالا، نیم‌فاصله استاندارد با Shift+Space، لایه کامل AltGr و پشتیبانی از ویندوز، مک و لینوکس.",
      ctaInstall: "نصب و دانلود",
      ctaTry: "تست زنده کیبورد",
      tryTitle: "تست زنده و نقشه تعاملی کیبورد",
      tryDesc: "در کادر زیر با کیبورد واقعی خود تایپ کنید یا روی کلیدها کلیک کنید. کلیدهای Shift یا Alt را نگه دارید تا لایه‌ها را زنده ببینید.",
      sandboxLabel: "کادر تست (فارسی)",
      btnSample: "متن نمونه",
      btnShowZwnj: "نمایش نیم‌فاصله (ZWNJ)",
      btnCopy: "کپی",
      btnCopied: "کپی شد ✓",
      btnClear: "پاک کردن",
      inspectorHint: "روی هر کلید بروید تا کد یونیکد آن را ببینید",
      featuresTitle: "تغییرات و بهبودهای نسخه ۲.۰",
      featuresDesc: "رفع باگ‌های قدیمی ویندوز و افزودن قابلیت‌های تایپوگرافی مدرن بدون برهم زدن حافظه عضلانی شما.",
      f1Title: "نیم‌فاصله واقعی (U+200C)",
      f1Desc: "کلید Shift+Space اکنون به‌جای کاراکتر اشتباه ZWSP (U+200B)، نیم‌فاصله استاندارد ZWNJ (U+200C) تولید می‌کند تا کلمات وسط خط نشکنند و در جستجو پیدا شوند.",
      f2Title: "اصلاح لیگچر «ریال» با «ی» فارسی",
      f2Desc: "کلید Shift+R اکنون از «ی» فارسی (U+06CC) به‌جای «ي» عربی استفاده می‌کند و نماد اختصاصی ریال (﷼) نیز روی AltGr+R در دسترس است.",
      f3Title: "بازگردانی میانبرهای Ctrl+0 و Ctrl+-",
      f3Desc: "کاراکترهای مزاحم قدیمی روی Ctrl+0 و Ctrl+- حذف شدند تا میانبرهای Reset Zoom و Zoom Out در مرورگرها و ادیتورها بدون مشکل کار کنند.",
      f4Title: "لایه کامل AltGr / Option",
      f4Desc: "تایپ اعداد انگلیسی (0–9)، درصد فارسی (٪)، ممیز و جداکننده هزارگان (٫ ٬)، ساکن (ْ)، همزه بالای هـ (ٔ)، الف مقصوره (ٰ)، سه‌نقطه (…) و خط تیره (– —) بدون تغییر زبان.",
      compareTitle: "مقایسه با کیبوردهای پیش‌فرض ویندوز",
      colFeature: "ویژگی",
      colLegacy: "فارسی معمولی ویندوز",
      colStandard: "فارسی استاندارد (ISIRI)",
      colBetter: "Persian but Better v2.0",
      cmpLetters: "جایگاه کلاسیک حروف («پ» روی \\ و «ژ» روی Shift+C)",
      cmpDigits: "اعداد فارسی (۰–۹) روی ردیف بالای کیبورد",
      cmpZwnj: "نیم‌فاصله استاندارد (U+200C) روی Shift+Space",
      cmpAscii: "اعداد انگلیسی (0–9) با AltGr بدون تغییر زبان",
      cmpDiacritics: "اعراب کامل شامل ساکن (ْ) و همزه بالای هـ (ٔ)",
      cmpZoom: "سالم ماندن میانبرهای Ctrl+0 و Ctrl+-",
      cmpCross: "نسخه آماده برای ویندوز، مک و لینوکس",
      installTitle: "راهنمای نصب",
      installDesc: "سیستم‌عامل خود را انتخاب کنید.",
      placeholder: "اینجا تایپ کنید… (مثلاً Shift+Space برای نیم‌فاصله در «می‌خواهم»)",
      winStep1: 'نصب‌کننده آماده را از صفحه <a href="https://github.com/HamidRezaAshkiyan/PersianKeyboardRedefined/releases" target="_blank" rel="noopener">Releases</a> دانلود کنید، یا فایل <a href="https://github.com/HamidRezaAshkiyan/PersianKeyboardRedefined/blob/main/Better%20Persian.klc" target="_blank" rel="noopener"><code>Better Persian.klc</code></a> را در <strong>Microsoft Keyboard Layout Creator (MSKLC)</strong> باز کرده و از منوی <strong>Project → Build DLL and Setup Package</strong> خروجی بگیرید.',
      winStep2: 'فایل <code>setup.exe</code> را اجرا کنید و یک‌بار Sign out / Sign in انجام دهید.',
      winStep3: 'در بخش <strong>Settings → Time &amp; Language → Language &amp; Region → Persian → Keyboard</strong> کیبورد <strong>Persian but Better</strong> را اضافه کنید.',
      macStep1: 'فایل <a href="https://github.com/HamidRezaAshkiyan/PersianKeyboardRedefined/blob/main/macos/Persian%20but%20Better.keylayout" target="_blank" rel="noopener"><code>macos/Persian but Better.keylayout</code></a> را دانلود کرده و در پوشه زیر کپی کنید:',
      macStep2: 'یک‌بار Log out / Log in کنید.',
      macStep3: 'از مسیر <strong>System Settings → Keyboard → Text Input → Input Sources → Edit… → + → Others</strong> گزینه <strong>Persian but Better</strong> را اضافه کنید. (کلید <code>Option</code> معادل <code>AltGr</code> است و میانبرهای <code>Cmd</code> مطابق QWERTY باقی می‌مانند.)',
      linStep1: 'فایل <a href="https://github.com/HamidRezaAshkiyan/PersianKeyboardRedefined/blob/main/linux/persian-but-better.xkb" target="_blank" rel="noopener"><code>linux/persian-but-better.xkb</code></a> را در مسیر XKB کپی کرده و فعال کنید:'
    },
    en: {
      brand: "Persian but Better",
      heroTitle: "The familiar Persian layout, finally fixed.",
      heroDesc: "Classic Windows Persian letter positions with zero muscle-memory loss—upgraded with top-row Persian digits, proper Shift+Space ZWNJ, a full AltGr typography layer, and Windows, macOS, and Linux support.",
      ctaInstall: "Download & Install",
      ctaTry: "Try It Live",
      tryTitle: "Interactive Keyboard & Live Sandbox",
      tryDesc: "Type in the box below with your physical keyboard or click any key. Hold Shift or Alt to preview layers live.",
      sandboxLabel: "Live Typing Sandbox (RTL)",
      btnSample: "Insert Sample",
      btnShowZwnj: "Visualize ZWNJ",
      btnCopy: "Copy",
      btnCopied: "Copied ✓",
      btnClear: "Clear",
      inspectorHint: "Hover or click any key to inspect its Unicode codepoint",
      featuresTitle: "What's New in v2.0",
      featuresDesc: "Fixes long-standing Windows Persian bugs and adds modern Persian typography without moving any letter keys.",
      f1Title: "True Half-Space (U+200C)",
      f1Desc: "Shift+Space now emits standard ZWNJ (U+200C) instead of ZWSP (U+200B), preventing mid-word line breaks and fixing search/spellcheck matching.",
      f2Title: "Farsi Yeh in Rial Ligature",
      f2Desc: "Shift+R now uses Farsi Yeh (U+06CC) instead of Arabic Yeh (U+064A), and the dedicated Rial Sign (﷼, U+FDFC) is on AltGr+R.",
      f3Title: "Restored Ctrl+0 & Ctrl+- Shortcuts",
      f3Desc: "Removed legacy bindings on Ctrl+0 (Urdu Heh Goal) and Ctrl+- so browser and editor Reset Zoom / Zoom Out shortcuts work as expected.",
      f4Title: "Full AltGr / Option Layer",
      f4Desc: "Type ASCII digits (0–9), Persian percent (٪), decimal/thousands separators (٫ ٬), Sukun (ْ), Hamza Above (ٔ), Superscript Alef (ٰ), ellipsis (…), and dashes (– —) without switching layouts.",
      compareTitle: "Comparison with Windows Default Layouts",
      colFeature: "Feature",
      colLegacy: "Windows Persian (Legacy)",
      colStandard: "Windows Persian (Standard)",
      colBetter: "Persian but Better v2.0",
      cmpLetters: "Classic letter positions (پ on \\, ژ on Shift+C)",
      cmpDigits: "Persian digits (۰–۹) on the number row",
      cmpZwnj: "Standard half-space (U+200C) on Shift+Space",
      cmpAscii: "ASCII digits (0–9) via AltGr without switching",
      cmpDiacritics: "Full diacritics incl. Sukun (ْ) & Hamza Above (ٔ)",
      cmpZoom: "Ctrl+0 and Ctrl+- zoom shortcuts intact",
      cmpCross: "Ready-to-use Windows, macOS & Linux layouts",
      installTitle: "Installation",
      installDesc: "Choose your operating system.",
      placeholder: "Type here… (try Shift+Space for half-space in «می‌خواهم»)",
      winStep1: 'Download the prebuilt installer from <a href="https://github.com/HamidRezaAshkiyan/PersianKeyboardRedefined/releases" target="_blank" rel="noopener">Releases</a>, or open <a href="https://github.com/HamidRezaAshkiyan/PersianKeyboardRedefined/blob/main/Better%20Persian.klc" target="_blank" rel="noopener"><code>Better Persian.klc</code></a> in <strong>Microsoft Keyboard Layout Creator (MSKLC)</strong> and run <strong>Project → Build DLL and Setup Package</strong>.',
      winStep2: 'Run <code>setup.exe</code>, then sign out and sign back in.',
      winStep3: 'Go to <strong>Settings → Time &amp; Language → Language &amp; Region → Persian → Keyboard</strong> and add <strong>Persian but Better</strong>.',
      macStep1: 'Download <a href="https://github.com/HamidRezaAshkiyan/PersianKeyboardRedefined/blob/main/macos/Persian%20but%20Better.keylayout" target="_blank" rel="noopener"><code>macos/Persian but Better.keylayout</code></a> and copy it to your Keyboard Layouts folder:',
      macStep2: 'Log out and log back in.',
      macStep3: 'Go to <strong>System Settings → Keyboard → Text Input → Input Sources → Edit… → + → Others</strong> and add <strong>Persian but Better</strong>. (<code>Option</code> maps to <code>AltGr</code>, and <code>Cmd</code> shortcuts stay US QWERTY.)',
      linStep1: 'Copy <a href="https://github.com/HamidRezaAshkiyan/PersianKeyboardRedefined/blob/main/linux/persian-but-better.xkb" target="_blank" rel="noopener"><code>linux/persian-but-better.xkb</code></a> to your XKB symbols directory and activate it:'
    }
  };

  let currentLayer = "base";
  let currentLang = "fa";
  let showZwnj = false;

  const kbEl = document.getElementById("keyboard");
  const sandbox = document.getElementById("sandbox");
  const inspector = document.getElementById("inspector");
  const zwnjPreview = document.getElementById("zwnj-preview");
  const layerTabs = document.querySelectorAll(".layer-tabs .layer-tab");

  function formatCodepoints(str) {
    return Array.from(str)
      .map((ch) => "U+" + ch.codePointAt(0).toString(16).toUpperCase().padStart(4, "0"))
      .join(" ");
  }

  function updateInspector(keyObj) {
    if (!keyObj || keyObj.mod) return;
    const val = keyObj[currentLayer];
    if (!val) {
      inspector.innerHTML = `<span>${keyObj.legend} → <em style="opacity:.7">unmapped</em></span>`;
      return;
    }
    const display = (keyObj.labels && keyObj.labels[currentLayer]) || val;
    const cp = formatCodepoints(val);
    const name = SPECIAL_NAMES[val] || "";
    inspector.innerHTML = `<span class="inspector-char">${display}</span> <code>${cp}</code>${name ? ` <span>${name}</span>` : ""}`;
  }

  function insertAtCursor(text) {
    const start = sandbox.selectionStart;
    const end = sandbox.selectionEnd;
    const val = sandbox.value;
    sandbox.value = val.slice(0, start) + text + val.slice(end);
    sandbox.selectionStart = sandbox.selectionEnd = start + text.length;
    sandbox.focus();
    renderZwnjPreview();
  }

  function renderZwnjPreview() {
    if (!showZwnj) {
      zwnjPreview.classList.remove("visible");
      return;
    }
    zwnjPreview.classList.add("visible");
    const escaped = sandbox.value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\u200C/g, '<span class="zwnj-marker">ZWNJ</span>')
      .replace(/\u200B/g, '<span class="zwnj-marker">ZWSP</span>')
      .replace(/\u200D/g, '<span class="zwnj-marker">ZWJ</span>')
      .replace(/\u00A0/g, '<span class="zwnj-marker">NBSP</span>')
      .replace(/\n/g, "<br>");
    zwnjPreview.innerHTML = escaped || '<span style="opacity:.5">—</span>';
  }

  function setLayer(layer) {
    currentLayer = layer;
    layerTabs.forEach((btn) => btn.classList.toggle("active", btn.dataset.layer === layer));
    renderKeyboard();
  }

  function renderKeyboard() {
    kbEl.innerHTML = "";
    ROWS.forEach((row) => {
      const rowEl = document.createElement("div");
      rowEl.className = "kb-row";
      row.forEach((k) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.dataset.code = k.code;
        btn.className = "key" + (k.w ? " " + k.w : "");

        if (k.mod) {
          btn.classList.add("mod");
          if (
            (k.mod === "shift" && (currentLayer === "shift" || currentLayer === "altgrShift")) ||
            (k.mod === "altgr" && (currentLayer === "altgr" || currentLayer === "altgrShift"))
          ) {
            btn.classList.add("active-mod");
          }
          btn.textContent = k.legend;
          btn.addEventListener("click", () => handleModClick(k.mod));
        } else {
          const val = k[currentLayer] || "";
          const label = (k.labels && k.labels[currentLayer]) || val;
          if (!val) btn.classList.add("empty");
          if (k.highlight && k.highlight.includes(currentLayer)) btn.classList.add("highlight");

          const legendEl = document.createElement("span");
          legendEl.className = "key-legend";
          legendEl.textContent = k.legend;
          btn.appendChild(legendEl);

          const mainEl = document.createElement("span");
          mainEl.className = "key-main" + (label.length > 2 ? " small" : "");
          mainEl.textContent = label || "·";
          btn.appendChild(mainEl);

          // Show AltGr hint in bottom-right when on base layer
          if (currentLayer === "base" && k.altgr && k.code !== "Space") {
            const altEl = document.createElement("span");
            altEl.className = "key-alt";
            altEl.textContent = k.altgr;
            btn.appendChild(altEl);
          }

          btn.addEventListener("mouseenter", () => updateInspector(k));
          btn.addEventListener("click", () => {
            if (val) {
              insertAtCursor(val);
              updateInspector(k);
            }
          });
        }
        rowEl.appendChild(btn);
      });
      kbEl.appendChild(rowEl);
    });
  }

  function handleModClick(mod) {
    if (mod === "shift") {
      if (currentLayer === "base") setLayer("shift");
      else if (currentLayer === "shift") setLayer("base");
      else if (currentLayer === "altgr") setLayer("altgrShift");
      else setLayer("altgr");
    } else if (mod === "altgr") {
      if (currentLayer === "base") setLayer("altgr");
      else if (currentLayer === "altgr") setLayer("base");
      else if (currentLayer === "shift") setLayer("altgrShift");
      else setLayer("shift");
    } else if (mod === "backspace") {
      const s = sandbox.selectionStart;
      const e = sandbox.selectionEnd;
      if (s !== e) {
        sandbox.value = sandbox.value.slice(0, s) + sandbox.value.slice(e);
        sandbox.selectionStart = sandbox.selectionEnd = s;
      } else if (s > 0) {
        sandbox.value = sandbox.value.slice(0, s - 1) + sandbox.value.slice(s);
        sandbox.selectionStart = sandbox.selectionEnd = s - 1;
      }
      sandbox.focus();
      renderZwnjPreview();
    } else if (mod === "enter") {
      insertAtCursor("\n");
    } else if (mod === "tab") {
      insertAtCursor("\t");
    }
  }

  function flashKey(code) {
    const el = kbEl.querySelector(`[data-code="${code}"]`);
    if (!el) return;
    el.classList.add("pressed");
    setTimeout(() => el.classList.remove("pressed"), 140);
  }

  // Physical keyboard live sync when focused in sandbox
  sandbox.addEventListener("keydown", (e) => {
    // Preserve standard Ctrl/Cmd shortcuts (copy, paste, select all, zoom, etc.)
    if (e.metaKey || (e.ctrlKey && !e.altKey)) return;

    const k = KEY_BY_CODE.get(e.code);
    if (!k || k.mod) {
      if (e.key === "Shift" || e.key === "Alt" || e.key === "AltGraph") {
        syncLayerFromEvent(e);
      }
      return;
    }

    const altgr = e.altKey || e.getModifierState("AltGraph");
    const layer = altgr ? (e.shiftKey ? "altgrShift" : "altgr") : (e.shiftKey ? "shift" : "base");
    const val = k[layer];
    if (val) {
      e.preventDefault();
      insertAtCursor(val);
      updateInspector(k);
      flashKey(e.code);
    }
  });

  function syncLayerFromEvent(e) {
    const altgr = e.altKey || e.getModifierState("AltGraph");
    const next = altgr ? (e.shiftKey ? "altgrShift" : "altgr") : (e.shiftKey ? "shift" : "base");
    if (next !== currentLayer) setLayer(next);
  }

  window.addEventListener("keyup", (e) => {
    if (document.activeElement === sandbox && (e.key === "Shift" || e.key === "Alt" || e.key === "AltGraph")) {
      syncLayerFromEvent(e);
    }
  });

  sandbox.addEventListener("input", renderZwnjPreview);

  layerTabs.forEach((btn) => {
    btn.addEventListener("click", () => setLayer(btn.dataset.layer));
  });

  // Sandbox buttons
  document.getElementById("sample-btn").addEventListener("click", () => {
    sandbox.value = "سلام! می‌خواهم ۱۲٬۵۰۰ ریال (﷼) با تخفیف ۱۵٪ پرداخت کنم — نسخه 2.0 عالی‌ست…";
    sandbox.focus();
    renderZwnjPreview();
  });

  const zwnjBtn = document.getElementById("zwnj-toggle");
  zwnjBtn.addEventListener("click", () => {
    showZwnj = !showZwnj;
    zwnjBtn.classList.toggle("active", showZwnj);
    renderZwnjPreview();
  });

  const copyBtn = document.getElementById("copy-btn");
  copyBtn.addEventListener("click", async () => {
    if (!sandbox.value) return;
    try {
      await navigator.clipboard.writeText(sandbox.value);
      copyBtn.textContent = I18N[currentLang].btnCopied;
      setTimeout(() => { copyBtn.textContent = I18N[currentLang].btnCopy; }, 1400);
    } catch (_) {}
  });

  document.getElementById("clear-btn").addEventListener("click", () => {
    sandbox.value = "";
    sandbox.focus();
    renderZwnjPreview();
  });

  // OS Install tabs
  const osTabs = document.querySelectorAll(".install-tabs .layer-tab");
  osTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const os = tab.dataset.os;
      osTabs.forEach((t) => t.classList.toggle("active", t === tab));
      document.querySelectorAll(".install-panel").forEach((p) => {
        p.classList.toggle("active", p.id === `panel-${os}`);
      });
    });
  });

  // Language switcher
  const langBtn = document.getElementById("lang-toggle");
  function applyLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    langBtn.textContent = lang === "fa" ? "EN" : "فارسی";
    const dict = I18N[lang];
    const htmlKeys = new Set(["winStep1", "winStep2", "winStep3", "macStep1", "macStep2", "macStep3", "linStep1"]);
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (!dict[key]) return;
      if (htmlKeys.has(key)) el.innerHTML = dict[key];
      else el.textContent = dict[key];
    });
    sandbox.placeholder = dict.placeholder;
  }
  langBtn.addEventListener("click", () => applyLang(currentLang === "fa" ? "en" : "fa"));

  // Theme switcher
  const themeBtn = document.getElementById("theme-toggle");
  themeBtn.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    themeBtn.textContent = next === "dark" ? "☀️" : "🌙";
  });

  // Initial render
  renderKeyboard();
})();
