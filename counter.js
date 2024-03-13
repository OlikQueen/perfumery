export function setupCounter(element) {
    const btn = document.getElementById("crs");
    const burgerMenu = document.querySelector(".burgerMenu");

    btn.addEventListener('click', function() {
        burgerMenu.setAttribute("style", "display: none;");
        });
}
