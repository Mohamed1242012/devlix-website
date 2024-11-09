document.addEventListener("DOMContentLoaded", function () {
    // Existing zoom on click functionality
    const overlay = document.getElementById("imageOverlay");
    const overlayImage = document.getElementById("overlayImage");
    const galleryImages = document.querySelectorAll(".gallery img");

    galleryImages.forEach(img => {
        img.addEventListener("click", () => {
            overlayImage.src = img.src;
            overlay.classList.add("show");
        });
    });

    overlay.addEventListener("click", (event) => {
        if (event.target === overlay) {
            overlay.classList.remove("show");
        }
    });

    // Sequential Fade-in on Scroll
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries, obs) => {
        let delay = 0;

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the `visible` class with a slight delay between each
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, delay);
                delay += 200; // Adjust this delay as needed for effect timing
                obs.unobserve(entry.target); // Stop observing once it's faded in
            }
        });
    });

    fadeElements.forEach(el => observer.observe(el));
});
