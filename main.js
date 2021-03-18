document.addEventListener('DOMContentLoaded', function() {
    makeThemeButton('theme', 'theme-toggle', 'css/theme-dark.css',
                    'css/theme-light.css');
});

var makeThemeButton = function(themeLink, buttonClass, darkFile, lightFile) {
    var buttons = document.getElementsByClassName(buttonClass);
    var theme = document.getElementById(themeLink)

    // add listener to any/all theme toggle buttons
    for (var i = 0; i < buttons.length; i++) {
        button = buttons[i];

        // add listener to current button
        button.addEventListener('click', function() {
            if (theme.getAttribute("href") == darkFile) {
                // If current theme is dark, change to light
                theme.href = lightFile;
            } else {
                // If current theme is light, change to dark
                theme.href = darkFile;
            }
        });
    }
}