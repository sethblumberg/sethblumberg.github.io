(function() {
  "use strict";

  var storageKey = "theme";
  var systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  var pickers = Array.prototype.slice.call(document.querySelectorAll(".theme-picker"));

  if (!pickers.length) {
    return;
  }

  function getStoredTheme() {
    var storedTheme;

    try {
      storedTheme = window.localStorage.getItem(storageKey);
    } catch (error) {
      storedTheme = null;
    }

    return ["auto", "light", "dark"].indexOf(storedTheme) > -1 ? storedTheme : "auto";
  }

  function storeTheme(theme) {
    try {
      window.localStorage.setItem(storageKey, theme);
    } catch (error) {}
  }

  function resolveTheme(theme) {
    return theme === "auto" ? (systemTheme.matches ? "dark" : "light") : theme;
  }

  function closePickers() {
    pickers.forEach(function(picker) {
      picker.classList.remove("is-open");
      picker.querySelector(".theme-picker__toggle").setAttribute("aria-expanded", "false");
    });
  }

  function showActiveTheme(theme) {
    var resolved = resolveTheme(theme);
    var label = theme.charAt(0).toUpperCase() + theme.slice(1);

    pickers.forEach(function(picker) {
      picker.querySelectorAll(".theme-picker__option").forEach(function(option) {
        option.setAttribute("aria-checked", String(option.getAttribute("data-theme-value") === theme));
      });
      picker.querySelector(".theme-picker__toggle").setAttribute(
        "aria-label",
        "Appearance: " + label + "; showing " + resolved
      );
    });

    var themeColor = document.getElementById("theme-color");
    if (themeColor) {
      themeColor.setAttribute("content", resolved === "dark" ? "#10151b" : "#ffffff");
    }
  }

  function setTheme(theme, remember) {
    if (theme === "auto") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }

    if (remember) {
      storeTheme(theme);
    }

    showActiveTheme(theme);
  }

  pickers.forEach(function(picker) {
    var toggle = picker.querySelector(".theme-picker__toggle");

    picker.addEventListener("mouseenter", function() {
      toggle.setAttribute("aria-expanded", "true");
    });

    picker.addEventListener("mouseleave", function() {
      if (!picker.classList.contains("is-open")) {
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    picker.addEventListener("focusout", function() {
      window.setTimeout(function() {
        if (!picker.contains(document.activeElement)) {
          picker.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
        }
      }, 0);
    });

    picker.addEventListener("click", function(event) {
      var clickedToggle = event.target.closest(".theme-picker__toggle");
      var clickedOption = event.target.closest(".theme-picker__option");

      if ((!clickedToggle && !clickedOption) || !picker.contains(event.target)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (clickedToggle) {
        var open = !picker.classList.contains("is-open");
        closePickers();
        picker.classList.toggle("is-open", open);
        toggle.setAttribute("aria-expanded", String(open));
        return;
      }

      setTheme(clickedOption.getAttribute("data-theme-value"), true);
      closePickers();
      toggle.focus();
    }, true);
  });

  document.addEventListener("click", closePickers);
  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      closePickers();
    }
  });

  var updateAutomaticTheme = function() {
    if (getStoredTheme() === "auto") {
      showActiveTheme("auto");
    }
  };

  if (systemTheme.addEventListener) {
    systemTheme.addEventListener("change", updateAutomaticTheme);
  } else if (systemTheme.addListener) {
    systemTheme.addListener(updateAutomaticTheme);
  }

  setTheme(getStoredTheme(), false);
})();
