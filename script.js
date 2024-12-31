
document.addEventListener("DOMContentLoaded", () => {
    // Creating variables for certain elements to allow the navbar to open and close correctly
    const burger = document.getElementById("burgerDropdown");
    const sidebar = document.getElementById("navList");
    const closeSidebar = document.getElementById("closeNav");
    const overlay = document.getElementById("overlay");
    const webHeader = document.getElementById("websiteHeader");

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