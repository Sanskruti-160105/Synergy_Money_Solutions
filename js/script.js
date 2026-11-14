// =============================
// LOAD NAVBAR
// =============================

fetch("components/navbar.html")
    .then(response => response.text())
    .then(data => {

        document.getElementById("navbar-container").innerHTML = data;

        // MOBILE MENU
        const menuToggle = document.getElementById("menutoggle");
        const navMenu = document.getElementById("navMenu");

        if (menuToggle && navMenu) {

            menuToggle.addEventListener("click", () => {
                navMenu.classList.toggle("active");
            });

        }

    })
    .catch(error => {
        console.error("Navbar loading error:", error);
    });


// Homepage background slideshow
const hero = document.querySelector(".hero");

if (hero) {
    const heroImages = [
        // "images/Insurancebgimage.png",
        // "images/background2.png",
        // "images/clock.jpg",
        "images/Download Seedling Growth Stages.jpeg",
        "images/background_image.jpeg"
    ];

    let currentImage = 0;

    setInterval(() => {
        currentImage = (currentImage + 1) % heroImages.length;

        hero.style.backgroundImage =
            `url("${heroImages[currentImage]}")`;
    }, 5000);
}

/*====================================================================================
Review scrolling
=====================================================================================*/
// =============================
// REVIEW CAROUSEL
// =============================

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".reviews-container");
    const prevButton = document.getElementById("prevReview");
    const nextButton = document.getElementById("nextReview");

    if (!container || !prevButton || !nextButton) return;

    let paused = false;
    let direction = 1;
    const speed = 0.5;

    // Automatic scrolling
    function autoScroll() {
        if (!paused) {
            container.scrollLeft += speed * direction;

            // Stop at either end and reverse direction
            const maxScroll =
                container.scrollWidth - container.clientWidth;

            if (container.scrollLeft >= maxScroll) {
                container.scrollLeft = maxScroll;
                direction = -1;
            } else if (container.scrollLeft <= 0) {
                container.scrollLeft = 0;
                direction = 1;
            }
        }

        requestAnimationFrame(autoScroll);
    }

    autoScroll();

    // Pause on hover
    container.addEventListener("mouseenter", function () {
        paused = true;
    });

    container.addEventListener("mouseleave", function () {
        paused = false;
    });

    // Pause while touching on mobile
    container.addEventListener("touchstart", function () {
        paused = true;
    }, { passive: true });

    container.addEventListener("touchend", function () {
        paused = false;
    });

    // Calculate card width and gap
    function getScrollAmount() {
        const card = container.querySelector(".review-card");
        const styles = window.getComputedStyle(container);
        const gap = parseFloat(styles.columnGap) || 25;

        return card.offsetWidth + gap;
    }

    // Previous arrow
    prevButton.addEventListener("click", function () {
        paused = true;
        direction = -1;

        container.scrollBy({
            left: -getScrollAmount(),
            behavior: "smooth"
        });

        setTimeout(() => {
            paused = false;
        }, 1000);
    });

    // Next arrow
    nextButton.addEventListener("click", function () {
        paused = true;
        direction = 1;

        container.scrollBy({
            left: getScrollAmount(),
            behavior: "smooth"
        });

        setTimeout(() => {
            paused = false;
        }, 1000);
    });
});
function autoScroll() {
    if (!paused) {
        const maxScroll = container.scrollWidth - container.clientWidth;

        if (container.scrollLeft < maxScroll) {
            container.scrollLeft += speed;
        } else {
            container.scrollLeft = 0;
        }
    }

    requestAnimationFrame(autoScroll);
}
// =============================
// LOAD FOOTER
// =============================

fetch("components/footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer-container").innerHTML = data;
    })
    .catch(error => {
        console.error("Footer loading error:", error);
    });