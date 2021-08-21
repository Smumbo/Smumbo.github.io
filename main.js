const darkFile = "css/theme-dark.css";
const lightFile = "css/theme-light.css";
const activeTheme = document.getElementById("theme");

document.addEventListener('DOMContentLoaded', function() {
    makeThemeToggle('theme-toggle');
});

var makeThemeToggle = function(buttonClass) {
    var buttons = document.getElementsByClassName(buttonClass);
    var currTheme = localStorage.getItem("theme");

    // set initial page theme based on user's stored preferred theme
    currTheme = localStorage.getItem("theme");
    setTheme(currTheme);

    // add listener to any/all theme toggle buttons
    for (var i = 0; i < buttons.length; i++) {
        button = buttons[i];

        // add listener to current button
        button.addEventListener('click', function() {
            // get current theme and toggle to opposite
            currTheme = localStorage.getItem("theme");
            toggleTheme(currTheme);
        });
    }
}

var toggleTheme = function(currentTheme) {
    // toggle theme to opposite of current theme
    if (currentTheme == "dark") {
        setTheme("light");
    } else {
        setTheme("dark")
    }
}

var setTheme = function(newTheme) {
    // set theme to given theme
    if (newTheme == "dark") {
        activeTheme.href = darkFile;
        localStorage.setItem("theme", "dark");
    } else {
        activeTheme.href = lightFile;
        localStorage.setItem("theme", "light");
    }
}