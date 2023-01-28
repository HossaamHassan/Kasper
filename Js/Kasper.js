let toTop = document.querySelector(".arrow");
window.onscroll = function () {
    if (window.scrollY >= 650) {
        toTop.classList.add("show");
    } else {
        toTop.classList.remove("show");
    }
};
toTop.onclick = function () {
    window.scrollTo ({
        top: 0,
        behavior: "smooth",
    });
};