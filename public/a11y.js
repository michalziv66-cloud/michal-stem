(function () {
  "use strict";

  var SK = "a11y-settings";
  var defaults = { fontSize: 0, highContrast: false, highlightLinks: false };

  function load() {
    try {
      var r = localStorage.getItem(SK);
      return r ? JSON.parse(r) : Object.assign({}, defaults);
    } catch (e) {
      return Object.assign({}, defaults);
    }
  }

  function save(s) {
    try {
      localStorage.setItem(SK, JSON.stringify(s));
    } catch (e) {}
  }

  function apply(s) {
    var h = document.documentElement;
    h.classList.remove("a11y-font-1", "a11y-font-2");
    if (s.fontSize === 1) h.classList.add("a11y-font-1");
    if (s.fontSize === 2) h.classList.add("a11y-font-2");
    h.classList.toggle("a11y-high-contrast", s.highContrast);
    h.classList.toggle("a11y-highlight-links", s.highlightLinks);
  }

  function init() {
    if (document.getElementById("a11y-widget")) return;

    var s = load();
    apply(s);

    var wrap = document.createElement("div");
    wrap.id = "a11y-widget";
    wrap.style.cssText =
      "position:fixed;bottom:16px;left:16px;z-index:9999;direction:rtl;font-family:var(--font-sans),sans-serif;";

    var panel = document.createElement("div");
    panel.style.cssText =
      "display:none;margin-bottom:8px;width:256px;border-radius:12px;border:1px solid var(--border);background:var(--card);color:var(--card-foreground);padding:16px;box-shadow:0 8px 24px rgba(0,0,0,.2);";

    function render() {
      var fl = ["\u05E8\u05D2\u05D9\u05DC", "\u05D2\u05D3\u05D5\u05DC", "\u05D2\u05D3\u05D5\u05DC \u05DE\u05D0\u05D5\u05D3"];
      var bl = ["\u05D0", "\u05D0+", "\u05D0++"];

      panel.innerHTML =
        '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">' +
        '<b style="font-size:14px">\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA</b>' +
        '<button id="a11y-close" style="background:none;border:none;cursor:pointer;font-size:18px;color:var(--muted-foreground);line-height:1">\u2715</button></div>' +
        '<p style="font-size:12px;margin:0 0 6px">\u05D2\u05D5\u05D3\u05DC \u05D8\u05E7\u05E1\u05D8: ' +
        fl[s.fontSize] +
        "</p>" +
        '<div style="display:flex;gap:6px;margin-bottom:12px">' +
        bl
          .map(function (l, i) {
            var active = s.fontSize === i;
            return (
              '<button data-fs="' +
              i +
              '" style="flex:1;border-radius:6px;padding:6px;font-size:12px;cursor:pointer;border:1px solid ' +
              (active ? "var(--primary)" : "var(--border)") +
              ";background:" +
              (active ? "var(--primary)" : "var(--background)") +
              ";color:" +
              (active ? "var(--primary-foreground)" : "inherit") +
              '">' +
              l +
              "</button>"
            );
          })
          .join("") +
        "</div>" +
        '<label style="display:flex;justify-content:space-between;align-items:center;border:1px solid var(--border);border-radius:6px;padding:8px 12px;margin-bottom:8px;cursor:pointer;font-size:12px">' +
        "<span>\u05E0\u05D9\u05D2\u05D5\u05D3\u05D9\u05D5\u05EA \u05D2\u05D1\u05D5\u05D4\u05D4</span>" +
        '<input type="checkbox" id="a11y-hc" ' +
        (s.highContrast ? "checked" : "") +
        ' style="width:16px;height:16px;accent-color:var(--primary)"></label>' +
        '<label style="display:flex;justify-content:space-between;align-items:center;border:1px solid var(--border);border-radius:6px;padding:8px 12px;margin-bottom:8px;cursor:pointer;font-size:12px">' +
        "<span>\u05E1\u05D9\u05DE\u05D5\u05DF \u05E7\u05D9\u05E9\u05D5\u05E8\u05D9\u05DD</span>" +
        '<input type="checkbox" id="a11y-hl" ' +
        (s.highlightLinks ? "checked" : "") +
        ' style="width:16px;height:16px;accent-color:var(--primary)"></label>' +
        '<button id="a11y-reset" style="width:100%;border:1px solid var(--border);border-radius:6px;padding:6px;font-size:12px;background:var(--background);color:inherit;cursor:pointer">\u05D0\u05D9\u05E4\u05D5\u05E1 \u05D4\u05D2\u05D3\u05E8\u05D5\u05EA</button>';

      panel.querySelector("#a11y-close").onclick = function () {
        panel.style.display = "none";
      };

      panel.querySelectorAll("[data-fs]").forEach(function (b) {
        b.onclick = function () {
          s.fontSize = +b.dataset.fs;
          apply(s);
          save(s);
          render();
        };
      });

      var hcEl = panel.querySelector("#a11y-hc");
      if (hcEl)
        hcEl.onchange = function (e) {
          s.highContrast = e.target.checked;
          apply(s);
          save(s);
          render();
        };

      var hlEl = panel.querySelector("#a11y-hl");
      if (hlEl)
        hlEl.onchange = function (e) {
          s.highlightLinks = e.target.checked;
          apply(s);
          save(s);
          render();
        };

      var resetEl = panel.querySelector("#a11y-reset");
      if (resetEl)
        resetEl.onclick = function () {
          s = Object.assign({}, defaults);
          apply(s);
          save(s);
          render();
        };
    }

    var btn = document.createElement("button");
    btn.setAttribute("aria-label", "\u05E0\u05D2\u05D9\u05E9\u05D5\u05EA");
    btn.title = "\u05E0\u05D2\u05D9\u05E9\u05D5\u05EA";
    btn.textContent = "\u267F";
    btn.style.cssText =
      "width:48px;height:48px;border-radius:50%;background:var(--primary);color:var(--primary-foreground);font-size:20px;display:flex;align-items:center;justify-content:center;border:none;cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,.3);transition:transform .2s;";

    btn.onmouseenter = function () {
      btn.style.transform = "scale(1.1)";
    };
    btn.onmouseleave = function () {
      btn.style.transform = "scale(1)";
    };

    btn.onclick = function () {
      var vis = panel.style.display === "none";
      panel.style.display = vis ? "block" : "none";
      if (vis) render();
    };

    wrap.appendChild(panel);
    wrap.appendChild(btn);
    document.body.appendChild(wrap);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
