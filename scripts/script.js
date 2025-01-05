
document.addEventListener("DOMContentLoaded", () => {

    // After research I've found that it might be more useful to make an object instead of many variables
    const elements = {
        burger: document.getElementById("burgerDropdown"),
        sidebar: document.getElementById("navList"),
        closeSidebar: document.getElementById("closeNav"),
        overlay: document.getElementById("overlay"),
        webHeader: document.getElementById("websiteHeader"),
        popupGoals: document.getElementById("popupGoalsMenu"),
        closeGoalsPopup: document.getElementById("closeGoals"),
        popupContact: document.getElementById("popupContactMenu"),
        overlayTint: document.getElementById("overlay"),
        closeContactPopup: document.getElementById("closeForm"),
        myNameHeader: document.getElementById("myNameHeader"),
        servicesBtn: document.getElementById("serviceBtn"),
    }


    function errorMsg(object, message = 'There seems to have been an error!') {
        if (object) {
            object.addEventListener('click', () => {
                alert(message);
            });
        } else {
            console.warn('THe provided object does not exist')
        }
    }

    // Creating new toggle function to prevent reusing code

    function toggle(objectToToggle, className) {
        if (objectToToggle) {
            objectToToggle.classList.toggle(className);
        } else {
            console.warn("object to toggle not found!")
        }
    }


    function initEventListeners() {
        const {
            burger, sidebar, closeSidebar, overlay, webHeader, popupGoals, closeGoalsPopup, popupContact, overlayTint, closeContactPopup, myNameHeader, servicesBtn,
        } = elements;


        if (serviceBtn) errorMsg(servicesBtn, 'This feature is under construction!')

        if (myNameHeader) myNameHeader.addEventListener("click", () => toggle(popupGoals, 'shown'));

        if (closeGoalsPopup) closeGoalsPopup.addEventListener("click", () => toggle(popupGoals, 'shown'));

        if (contactBtn) {
            contactBtn.addEventListener("click", () => {
                toggle(popupContact, 'opened');
                toggle(overlayTint, 'active');
            });
        }

        if (closeContactPopup) {
            closeContactPopup.addEventListener("click", () => {
                toggle(popupContact, 'opened');
                toggle(overlayTint, 'active');
            })
        }

        if (burger) {
            burger.addEventListener("click", () => {
                toggle(sidebar, 'open');
                toggle(overlay, 'active');
                toggle(webHeader, 'active');
            });
        }

        if (closeSidebar) {
            closeSidebar.addEventListener("click", () => {
                toggle(sidebar, 'open');
                toggle(overlay, 'active');
                toggle(webHeader, 'active');
            });
        }
    }







    // Initialize Event Listeners
    initEventListeners();


});