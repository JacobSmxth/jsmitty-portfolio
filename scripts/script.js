
document.addEventListener("DOMContentLoaded", () => {
    // Creating variables for certain elements to allow the navbar to open and close correctly
    const burger = document.getElementById("burgerDropdown");
    const sidebar = document.getElementById("navList");
    const closeSidebar = document.getElementById("closeNav");
    const overlay = document.getElementById("overlay");
    const webHeader = document.getElementById("websiteHeader");


    // making error message for specific button click
    const servicesBtn = document.getElementById("serviceBtn");
    const careerBtn = document.getElementById("careerBtn");
    const contactBtn = document.getElementById("contactMeBtn");


    function errorMsg(thing) {
        thing.addEventListener("click", () => {
            alert("This currently doesn't work. Maybe it will soon!")
        });
    }

    errorMsg(servicesBtn);
    errorMsg(careerBtn);
    errorMsg(contactMeBtn);

    // Waiting for that click on the burger menu button
    burger.addEventListener("click", () => {
        console.log("Burger clicked!");

        sidebar.classList.toggle('open');
        overlay.classList.toggle("active");
        webHeader.classList.toggle("active");
    });

    closeSidebar.addEventListener("click", () => {
        sidebar.classList.toggle('open');
        overlay.classList.toggle("active");
        webHeader.classList.toggle("active");
    });

});