// CONSTANTS

// theme files
const THEME_FILE_DARK = "css/theme-dark.css";
const THEME_FILE_LIGHT = "css/theme-light.css";

// icon names
const ICON_NAME_DARK = "dark_mode";
const ICON_NAME_LIGHT = "light_mode";

// MAIN FUNCTION

document.addEventListener("DOMContentLoaded", function () {
    makeThemeToggle();
});

// add functionality to theme toggle button
function makeThemeToggle() {
    // add listener to any/all theme toggle buttons
    var button = document.getElementById("theme-toggle");

    // add listener to current button
    button.addEventListener("click", function () {
        toggleTheme();
    });
}

// toggle theme to opposite of current theme
function toggleTheme() {
    currTheme = localStorage.getItem("data-theme");

    if (currTheme == "dark") {
        setTheme("light");
    } else {
        setTheme("dark");
    }
}

// set theme to given theme
var setTheme = function (newTheme) {
    var themeIcon = document.getElementById("theme-icon");
    var activeTheme = document.getElementById("theme");

    if (newTheme == "dark") {
        themeIcon.innerHTML = ICON_NAME_DARK;
        activeTheme.href = THEME_FILE_DARK;
        localStorage.setItem("data-theme", "dark");
    } else {
        activeTheme.href = THEME_FILE_LIGHT;
        themeIcon.innerHTML = ICON_NAME_LIGHT;
        localStorage.setItem("data-theme", "light");
    }
};

// set initial page theme based on user's store preferred theme
(function () {
    var activeTheme = document.getElementById("theme");
    if (localStorage.getItem('data-theme') === 'dark') {
        activeTheme.href = THEME_FILE_DARK;
        localStorage.setItem("data-theme", "dark");
    } else {
        activeTheme.href = THEME_FILE_LIGHT;
        localStorage.setItem("data-theme", "light");
    }
})();