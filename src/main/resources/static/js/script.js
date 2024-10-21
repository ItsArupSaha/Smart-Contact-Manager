console.log("Script loaded");

let currentTheme = getTheme();

// initially -->

document.addEventListener("DOMContentLoaded", () => {
    changeTheme();
})

// change theme function
function changeTheme(){

    // select the html where, the change will occur
    const htmlSelector = document.querySelector("html").classList;
    
    // initially set theme to webpage
    htmlSelector.add(currentTheme);

    // set the listenner to theme_change_button
    const themeChangeButton = document.querySelector('#theme_change_button');

    themeChangeButton.addEventListener("click", (event) => {
        
        const oldTheme = currentTheme;

        if(currentTheme == "light") {
            // set theme to dark
            currentTheme = "dark";
        }
        else{
            // set theme to light
            currentTheme = "light";
        }

        // change the theme and update the local storage
        changePageTheme(currentTheme, oldTheme, htmlSelector);

    })

}

// set theme to local storage
function setTheme(theme) {
    localStorage.setItem("theme", theme);
}

// get storage from local storage
function getTheme() {
    let theme = localStorage.getItem("theme");

    return theme ? theme : "light";
}

// change theme functionality
function changePageTheme(currentTheme, oldTheme, htmlSelector){
    // update theme to local storage
    setTheme(currentTheme);

    // remove the previous theme from webpage
    htmlSelector.remove(oldTheme);

    // set new theme to webpage
    htmlSelector.add(currentTheme);
}