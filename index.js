// Function to scroll to the top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Show/hide scroll-to-top button
window.addEventListener("scroll", () => {
    const scrollToTopButton = document.getElementById("scroll-to-top");
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = "block"; // Show button when scrolled down
    } else {
        scrollToTopButton.style.display = "none"; // Hide button when near the top
    }
});

// music button
const music = document.getElementById('background-music');
function toggleMusic() {
    music.paused ? music.play() : music.pause();
}
//  dark mode
function toggleDarkMode() {
    const body = document.body;
    const button = document.getElementById("dark-mode-toggle");
    
    // Toggle dark mode class
    body.classList.toggle("dark-mode");

    // Change button icon
    if (body.classList.contains("dark-mode")) {
        button.innerHTML = "🌞"; // Sun icon for light mode
    } else {
        button.innerHTML = "🌙"; // Moon icon for dark mode
    }
}