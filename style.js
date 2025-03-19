function toggleMenu() {
    document.querySelector(".mobile-menu").classList.toggle("show");
}
document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        let count = 0;
        let speed = target / 100;

        const updateCounter = () => {
            if (count < target) {
                count += speed;
                counter.innerText = Math.floor(count);
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
});