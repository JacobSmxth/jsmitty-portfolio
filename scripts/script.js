
document.addEventListener("DOMContentLoaded", () => {
    // Creating variables for certain elements to allow the navbar to open and close correctly
    const burger = document.getElementById("burgerDropdown");
    const sidebar = document.getElementById("navList");
    const closeSidebar = document.getElementById("closeNav");
    const overlay = document.getElementById("overlay");
    const webHeader = document.getElementById("websiteHeader");


    // Creating popups for certain button clicks
    const popupGoals = document.getElementById("popupGoalsMenu");
    const closeGoalsPopup = document.getElementById("closeGoals");
    const popupContact = document.getElementById("popupContactMenu");
    const overlayTint = document.getElementById("overlay");
    const closeContactPopup = document.getElementById("closeForm");

    const myNameHeader = document.getElementById("myNameHeader");


    // making error message for specific button click
    const servicesBtn = document.getElementById("serviceBtn");
    const contactBtn = document.getElementById("contactMeBtn");


    function errorMsg(thing) {
        thing.addEventListener("click", () => {
            alert("This currently doesn't work. Maybe it will soon!")
        });
    }

    errorMsg(servicesBtn);

    // Creating new toggle function to prevent reusing code

    function toggle(objectToToggle, className) {
        if (objectToToggle) {
            objectToToggle.classList.toggle(className);
        } else {
            console.warn("object to toggle not found!")
        }
    }


    myNameHeader.addEventListener("click", () => toggle(popupGoals, 'shown'));


    closeGoalsPopup.addEventListener("click", () => toggle(popupGoals, 'shown'));


    contactBtn.addEventListener("click", () => {
        toggle(popupContact, 'opened');
        toggle(overlayTint, 'active');
    });

    closeContactPopup.addEventListener("click", () => {
        toggle(popupContact, 'opened');
        toggle(overlayTint, 'active');
    })

    // Waiting for that click on the burger menu button
    burger.addEventListener("click", () => {
        toggle(sidebar, 'open');
        toggle(overlay, 'active');
        toggle(webHeader, 'active');
    });

    closeSidebar.addEventListener("click", () => {
        toggle(sidebar, 'open');
        toggle(overlay, 'active');
        toggle(webHeader, 'active');
    });

});