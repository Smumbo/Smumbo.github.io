document.addEventListener('DOMContentLoaded', function() {
    makeThemeButton('theme', 'theme-toggle',
                    'theme-dark.css', 'theme-light.css');
});

var makeThemeButton = function(themeLink, buttonClass, darkFile, lightFile) {
    var buttons = document.getElementsByClassName(buttonClass);
    var theme = document.getElementById(themeLink)

    for (var i = 0; i < buttons.length; i++) {
        button = buttons[i];
        button.addEventListener('click', function() {
            if (theme.getAttribute("href") == darkFile) {
                theme.href = lightFile;
            } else {
                theme.href = darkFile;
            }
        });
    }
}