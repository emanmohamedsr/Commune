// Add a smooth scroll effect to the links
let links = document.querySelectorAll(".menu li a");
let currentActive = document.querySelector("a.default");
links.forEach(link => {
    link.addEventListener("click", function (e) {
        if (currentActive === e.target) return;
        currentActive.classList.remove("active");
        e.target.classList.add("active");
        currentActive = e.target; // Update currentActive to the newly active link
    });
});

// Add a dropdown menu to the navigation bar
let dropdownIcon = document.querySelector('.list-icon');
let dropdownMenu = document.querySelector('.list-icon + .menu');
dropdownIcon.addEventListener("click", () => { 
    dropdownMenu.classList.toggle("show"); 
});
document.addEventListener("click", (e) => {
    if (!dropdownMenu.contains(e.target) && !dropdownIcon.contains(e.target)) {
        dropdownMenu.classList.remove("show");
    }
});