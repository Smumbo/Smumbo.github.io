// CONSTANTS

// theme files
const THEME_FILE_DARK = "css/theme-dark.css";
const THEME_FILE_LIGHT = "css/theme-light.css";

// MAIN FUNCTION

document.addEventListener("DOMContentLoaded", function () {
    makeThemeToggle();
    //makeFooterColorIcons();
});

function copyText(text) {
    navigator.clipboard.writeText(text);
}

// THEMES

// add functionality to theme toggle button
function makeThemeToggle() {
    var activeTheme = document.getElementById("theme");
    var currTheme = localStorage.getItem("theme");

    // set initial page theme based on user's stored preferred theme
    currTheme = localStorage.getItem("theme");
    setTheme(activeTheme, currTheme);

    // add listener to any/all theme toggle buttons
    var button = document.getElementById("theme-toggle");

    // add listener to current button
    button.addEventListener("click", function () {
        // get current theme and toggle to opposite
        activeTheme = document.getElementById("theme");
        currTheme = localStorage.getItem("theme");
        toggleTheme(activeTheme, currTheme);
    });
}

// toggle theme to opposite of current theme
function toggleTheme(activeTheme, currentTheme) {
    if (currentTheme == "dark") {
        setTheme(activeTheme, "light");
    } else {
        setTheme(activeTheme, "dark");
    }
}

// set theme to given theme
var setTheme = function (activeTheme, newTheme) {
    if (newTheme == "dark") {
        activeTheme.href = THEME_FILE_DARK;
        localStorage.setItem("theme", "dark");
    } else {
        activeTheme.href = THEME_FILE_LIGHT;
        localStorage.setItem("theme", "light");
    }
};

/*
// FOOTER

// add clipboard copy functionality to theme color icons
function makeFooterColorIcons() {
    var icons = document.getElementsByClassName("theme-color-icon");

    // add click listener to all theme color icons
    for (var i = 0; i < icons.length; i++) {
        var icon = icons[i];

        // determine icon and the theme color CSS variable associated with it
        var themeColor;
        switch (icon.id) {
            case "color1":
                themeColor = "--color-accent";
                break;
            case "color2":
                themeColor = "--color-text-primary";
                break;
            case "color3":
                themeColor = "--color-text-secondary";
                break;
            case "color4":
                themeColor = "--color-text-tertiary";
                break;
            case "color5":
                themeColor = "--color-background";
                break;
            case "color6":
                themeColor = "--color-surface";
                break;
            default:
                console.log("Nonexistent theme color icon referenced. Fix this!");
        }

        // add click listener to current icon
        addColorIconClipboardCopy(icon, themeColor)
    }
}

/// add a click listener to an icon which copies the variable attribute to the clipboard
function addColorIconClipboardCopy(iconElement, themeColorVar) {
    iconElement.addEventListener('click', function() {
        var colorHex = getComputedStyle(document.documentElement).getPropertyValue(themeColorVar);
       
        // remove "#" character (many hex color input fields don't like it)
        var colorHexShort = colorHex.substring(2);

        copyText(colorHexShort);
        alert("Copied color to clipboard: " + colorHexShort);
    });
}*/
