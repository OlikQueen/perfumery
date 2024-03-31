export function setupCounter(element) {
    const btnCrs = document.getElementById("crs");
    const burgerMenu = document.querySelector(".burgerMenu");
    const burgerIcon = document.getElementById("burgerIcon");

    burgerIcon.addEventListener('click', function() {
       
        burgerMenu.setAttribute("style", "display: block;");
        });

    btnCrs.addEventListener('click', function() {
       
        burgerMenu.setAttribute("style", "display: none;");
        });
}

// выпадающее меню, по hover