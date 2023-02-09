// CONSTANTS

// theme files
const THEME_FILE_DARK = "css/theme-dark.css";
const THEME_FILE_LIGHT = "css/theme-light.css";

// icon names
const ICON_NAME_DARK = "dark_mode";
const ICON_NAME_LIGHT = "light_mode";

document.addEventListener("DOMContentLoaded", function () {
    makeThemeToggle();
});

// add functionality to theme toggle button
function makeThemeToggle() {
    var currTheme = localStorage.getItem("data-theme");

    // set icon based on starting theme
    if (currTheme == "dark") {
        setIcon(ICON_NAME_LIGHT);
    } else {
        setIcon(ICON_NAME_DARK);
    }

    // add listener to any/all theme toggle buttons
    var button = document.getElementById("theme-toggle");

    // add listener to current button
    button.addEventListener("click", function () {
        // get current theme and toggle to opposite
        currTheme = localStorage.getItem("data-theme");
        toggleTheme();
    });
}

// toggle theme to opposite of current theme
function toggleTheme() {
    var currTheme = localStorage.getItem("data-theme");

    if (currTheme == "dark") {
        setTheme("light");
        setIcon(ICON_NAME_DARK);
    } else {
        setTheme("dark");
        setIcon(ICON_NAME_LIGHT);
    }
}

// set theme to given theme
function setTheme(theme) {
    var themeFile = document.getElementById("theme");

    if (theme == "dark") {
        themeFile.href = THEME_FILE_DARK;
        localStorage.setItem("data-theme", "dark");
    } else {
        themeFile.href = THEME_FILE_LIGHT;
        localStorage.setItem("data-theme", "light");
    }
}

// set theme switcher icon
function setIcon(iconName) {
    var icon = document.getElementById("theme-icon");
    icon.innerHTML = iconName
}

// set initial page theme based on user's store preferred theme
(function () {
    var themeFile = document.getElementById("theme");
    if (localStorage.getItem('data-theme') === 'dark') {
        themeFile.href = THEME_FILE_DARK;
        localStorage.setItem("data-theme", "dark");
    } else {
        themeFile.href = THEME_FILE_LIGHT;
        localStorage.setItem("data-theme", "light");
    }
})();