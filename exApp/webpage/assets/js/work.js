
document.addEventListener("DOMContentLoaded", function () {
    const darkModeSwitch = document.getElementById("darkmodeSwitch");
    const body = document.body;

    // Load dark mode preference from local storage
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeSwitch.checked = true;
    }

    // Toggle dark mode
    darkModeSwitch.addEventListener("change", function () {
        if (this.checked) {
            body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "enabled");
        } else {
            body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "disabled");
        }
    });
});


