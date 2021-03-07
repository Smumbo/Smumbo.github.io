document.addEventListener('DOMContentLoaded', function() {
    makeThemeButton('theme-link', 'theme-toggle');
});

var makeThemeButton = function(themeLink, buttonClass) {
    var buttons = document.getElementsByClassName(buttonClass);
    var theme = document.getElementById(themeLink)

    for (var i = 0; i < buttons.length; i++) {
        button = buttons[i];
        button.addEventListener('click', function() {
            if (theme.getAttribute("href") == "styles-dark.css") {
                theme.href = "styles-light.css";
            } else {
                theme.href = "styles-dark.css";
            }
        });
    }
}