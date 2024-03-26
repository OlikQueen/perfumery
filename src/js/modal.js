export function modal() {
    const body = document.querySelector('body');
    const modalLink = document.querySelectorAll("[data-modal-link]");

    for (const iterator of modalLink) {
        iterator.addEventListener('click', function () {
            body.setAttribute('class', 'is-modal');

            const value = iterator.getAttribute('data-key');
            const modalBox = document.querySelector(`[data-modal-box][data-key=${value}]`);

            modalBox.setAttribute('class', 'active');
            const modalClose = modalBox.querySelector("[data-modal-close]");

            modalClose.addEventListener('click', function () { 
                modalBox.classList.remove('active');
                body.classList.remove('is-modal');
            })
        })
    }
}

