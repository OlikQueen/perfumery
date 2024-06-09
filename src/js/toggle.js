export function toggle() {

    const toggle = document.querySelectorAll("[data-toggle]");
    for (const iterator of toggle) {
        const button = iterator.querySelector("button");

        button.addEventListener('click', function () {
            iterator.classList.toggle('is-show');
        })
    }

    // const toggle = document.querySelectorAll("[data-toggle]");
    // for (const iterator of toggle) {
    //     const button = iterator.querySelector("[]");

    //     button.addEventListener('click', function () {
    //         iterator.classList.toggle('is-show');
    //     })
    // }

}
