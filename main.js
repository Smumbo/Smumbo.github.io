// CONSTANTS

// theme files
const THEME_FILE_DARK = "css/theme-dark.css";
const THEME_FILE_LIGHT = "css/theme-light.css";
var ACTIVE_THEME = document.getElementById("theme");

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
const SOCIAL_ICON_LINKEDIN = "icon-social-itch";
const SOCIAL_ICON_HANDSHAKE = "icon-social-handshake";
const SOCIAL_ICON_ITCH = "icon-social-itch";
const SOCIAL_ICON_GITHUB = "icon-social-github";


// MAIN FUNCTION

document.addEventListener('DOMContentLoaded', function() {
    makeThemeToggle();
    generateContactArea();
    //addSocialIcons();
});


// THEMES

// add functionality to theme toggle button
var makeThemeToggle = function() {
    var currTheme = localStorage.getItem("theme");

    // set initial page theme based on user's stored preferred theme
    currTheme = localStorage.getItem("theme");
    setTheme(currTheme);

    // add listener to any/all theme toggle buttons
    var buttons = document.getElementsByClassName("theme-toggle");
    for (var i = 0; i < buttons.length; i++) {
        button = buttons[i];

        // add listener to current button
        button.addEventListener('click', function() {
            // get current theme and toggle to opposite
            ACTIVE_THEME = document.getElementById("theme");
            currTheme = localStorage.getItem("theme");
            toggleTheme(currTheme);
        });
    }
}

// toggle theme to opposite of current theme
var toggleTheme = function(currentTheme) {
    if (currentTheme == "dark") {
        setTheme("light");
    } else {
        setTheme("dark")
    }
}

// set theme to given theme
var setTheme = function(newTheme) {
    if (newTheme == "dark") {
        ACTIVE_THEME.href = THEME_FILE_DARK;
        localStorage.setItem("theme", "dark");
    } else {
        ACTIVE_THEME.href = THEME_FILE_LIGHT;
        localStorage.setItem("theme", "light");
    }
}


// CONTACT

var generateContactArea = function() {
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
var makeSocialIcons = function() {
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

// adds social icon links in set order to all social icon divs
var addSocialIcons = function() {
    var socialDivs = document.getElementsByClassName("social-icons");

    // add social icon links to all social icon divs
    for (var i = 0; i < socialDivs.length; i++) {
        div = socialDivs[i];

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
    }
}

// creates a new social icon link with the given social platform's info
var makeSocialIcon = function(link, title, icon) {
    var newLink = document.createElement("a");
    newLink.setAttribute("class", "icon-social")
    newLink.setAttribute("href", link);

    var newIcon = document.createElement("span");
    newIcon.setAttribute("class", icon);
    newIcon.setAttribute("title", title);

    newLink.appendChild(newIcon);
    return newLink;
}