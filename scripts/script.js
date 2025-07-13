// Get the container element for nav links
const nav_container = document.getElementById("nav-items");

// Get all nav itmes inside the container
const nav_item = nav_container.getElementsByClassName("nav")

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < nav_item.length; i++) {
    nav_item[i].addEventListener("click", function() {
        const current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active"
    });
}