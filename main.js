// CONSTANTS

// theme files
const THEME_FILE_DARK = "css/theme-dark.css";
const THEME_FILE_LIGHT = "css/theme-light.css";

// contact links
const CONTACT_LINK_EMAIL = "mailto:jonahvenglarcik@gmail.com";
const CONTACT_LINK_PHONE = "tel:+15204195381";

// contact text
const CONTACT_TEXT_EMAIL = "jonahvenglarcik@gmail.com";
const CONTACT_TEXT_PHONE = "+1 (520) 419-5381";

// social links
const SOCIAL_LINK_LINKEDIN = "https://www.linkedin.com/in/jonah-venglarcik/";
const SOCIAL_LINK_HANDSHAKE = "https://arizona.joinhandshake.com/users/5526320";
const SOCIAL_LINK_ITCH = "https://smumbo.itch.io";
const SOCIAL_LINK_GITHUB = "https://github.com/Smumbo";

// social icon names
const SOCIAL_ICON_LINKEDIN = "icon-social-linkedin";
const SOCIAL_ICON_HANDSHAKE = "icon-social-handshake";
const SOCIAL_ICON_ITCH = "icon-social-itch";
const SOCIAL_ICON_GITHUB = "icon-social-github";


// MAIN FUNCTION

document.addEventListener('DOMContentLoaded', function() {
    makeThemeToggle();
    //makeFooterColorIcons();
    generateContactArea();
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
    var buttons = document.getElementsByClassName("theme-toggle");
    for (var i = 0; i < buttons.length; i++) {
        button = buttons[i];

        // add listener to current button
        button.addEventListener('click', function() {
            // get current theme and toggle to opposite
            activeTheme = document.getElementById("theme");
            currTheme = localStorage.getItem("theme");
            toggleTheme(activeTheme, currTheme);
        });
    }
}

// toggle theme to opposite of current theme
function toggleTheme(activeTheme, currentTheme) {
    if (currentTheme == "dark") {
        setTheme(activeTheme, "light");
    } else {
        setTheme(activeTheme, "dark")
    }
}

// set theme to given theme
var setTheme = function(activeTheme, newTheme) {
    if (newTheme == "dark") {
        activeTheme.href = THEME_FILE_DARK;
        localStorage.setItem("theme", "dark");
    } else {
        activeTheme.href = THEME_FILE_LIGHT;
        localStorage.setItem("theme", "light");
    }
}

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


// CONTACT

function generateContactArea() {
    var contactDivs = document.getElementsByClassName("contact");

    // add contact area to all contact divs
    for (var i = 0; i < contactDivs.length; i++) {
        div = contactDivs[i];

        // email link
        var email = document.createElement("a")
        email.setAttribute("href", CONTACT_LINK_EMAIL);
        email.innerHTML = CONTACT_TEXT_EMAIL;

        // phone link
        var phone = document.createElement("a");
        phone.setAttribute("href", CONTACT_LINK_PHONE);
        phone.innerHTML = CONTACT_TEXT_PHONE;

        // social links
        var social = makeSocialIcons();

        // add elements to contact div
        div.appendChild(email);
        div.appendChild(document.createElement("br"));
        div.appendChild(phone);
        div.appendChild(document.createElement("br"));
        div.appendChild(social);
    }
}

// generates a group of social icons
function makeSocialIcons() {
    var div = document.createElement("div")
    div.setAttribute("class", "social-icons");

    // create icon links
    var linkedin = makeSocialIcon(SOCIAL_LINK_LINKEDIN, "LinkedIn", SOCIAL_ICON_LINKEDIN);
    var handshake = makeSocialIcon(SOCIAL_LINK_HANDSHAKE, "Handshake", SOCIAL_ICON_HANDSHAKE);
    var itch = makeSocialIcon(SOCIAL_LINK_ITCH, "itch.io", SOCIAL_ICON_ITCH);
    var github = makeSocialIcon(SOCIAL_LINK_GITHUB, "GitHub", SOCIAL_ICON_GITHUB);

    // add icon links to current social icons div
    div.appendChild(linkedin);
    div.appendChild(handshake);
    div.appendChild(itch);
    div.appendChild(github);

    return div;
}

// creates a new social icon link with the given social platform's info
function makeSocialIcon(link, title, icon) {
    var newLink = document.createElement("a");
    newLink.setAttribute("class", "icon-social")
    newLink.setAttribute("href", link);
    newLink.setAttribute("target", "_blank");
    newLink.setAttribute("rel", "noopener noreferrer")

    var newIcon = document.createElement("i");
    newIcon.setAttribute("class", icon);
    newIcon.setAttribute("title", title);

    newLink.appendChild(newIcon);
    return newLink;
}