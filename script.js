document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");
    header.classList.add("fadeIn");

    window.addEventListener("scroll", () => {
        const sections = document.querySelectorAll("section");
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                section.classList.add("fadeIn");
            }
        });
    });

    // Zoom on click functionality
    const overlay = document.getElementById("imageOverlay");
    const overlayImage = document.getElementById("overlayImage");
    const galleryImages = document.querySelectorAll(".gallery img");

    galleryImages.forEach(img => {
        img.addEventListener("click", () => {
            overlayImage.src = img.src; // Set clicked image source to overlay
            overlay.classList.add("show"); // Display the overlay
        });
    });

    // Close overlay on clicking outside the image
    overlay.addEventListener("click", (event) => {
        if (event.target === overlay) { // Only close if clicking outside the image
            overlay.classList.remove("show");
        }
    });
});
