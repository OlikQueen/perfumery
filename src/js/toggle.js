export function toggle() {

    const toggle = document.querySelectorAll("[data-toggle]");
    for (const iterator of toggle) {
        const button = iterator.querySelector("button");
        const openToggleIcon = iterator.querySelector(".toggle__openToggleIcon");
        const closeToggleIcon = iterator.querySelector(".toggle__closeToggleIcon");

        button.addEventListener('click', function () {
            iterator.classList.toggle('is-show');

            if (iterator.classList.contains('is-show')) {
                openToggleIcon.style.display = 'none';
                closeToggleIcon.style.display = 'block';
            } else {
                openToggleIcon.style.display = 'block';
                closeToggleIcon.style.display = 'none';
            }

        })
    }
}
