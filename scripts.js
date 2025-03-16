// Navbar Toggle
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const navLinks = document.querySelectorAll(".nav-link");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.add("hidden");
        menu.classList.remove("flex");
    });
});

// Update Year in Footer
document.getElementById("year").textContent = new Date().getFullYear();

// Intersection Observer for Animations
const animateElements = document.querySelectorAll(".animate-float, .animate-slideIn");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate-float", "animate-slideIn");
            observer.unobserve(entry.target); // Stop observing after animation
        }
    });
}, { threshold: 0.5 });

animateElements.forEach((element) => {
    observer.observe(element);
});

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle the scroll event
function handleScroll() {
    const flowchartSection = document.getElementById('flowchart');
    const animatedLine = document.getElementById('animated-line');

    if (isInViewport(flowchartSection)) {
        animatedLine.classList.add('animate-line');
        // Remove the event listener after the animation is triggered
        window.removeEventListener('scroll', handleScroll);
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Arrow Key Navigation for Structure Section
const structureContainer = document.getElementById('structureContainer');
const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');

if (structureContainer && scrollLeftBtn && scrollRightBtn) {
    // Scroll Left
    scrollLeftBtn.addEventListener('click', () => {
        structureContainer.scrollBy({
            left: -300, // Adjust scroll distance
            behavior: 'smooth'
        });
    });

    // Scroll Right
    scrollRightBtn.addEventListener('click', () => {
        structureContainer.scrollBy({
            left: 300, // Adjust scroll distance
            behavior: 'smooth'
        });
    });

    // Keyboard Arrow Key Navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            structureContainer.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        } else if (e.key === 'ArrowRight') {
            structureContainer.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        }
    });
}
