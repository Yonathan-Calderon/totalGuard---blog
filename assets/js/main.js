//Scroll
document.addEventListener("scroll", function() {
    var windowHeight = window.innerHeight;
    var documentHeight = document.documentElement.scrollHeight;
    var scrollPosition = window.scrollY;

    var threeQuarters = documentHeight * 0.75;

    var indicator = document.querySelector(".scroll-indicator");

    if (scrollPosition > threeQuarters - windowHeight) {
        indicator.style.opacity = "0";
    } else {
        indicator.style.opacity = "1";
    }
});
