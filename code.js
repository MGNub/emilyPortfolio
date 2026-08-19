document.addEventListener("DOMContentLoaded", (event) => {
    gsap.to("#preHeader", { height: 0, duration: 1})
    gsap.to("header div", { opacity: 1, duration: 0.3, delay: 1})
});