export function modal() {
    const body = document.querySelector('body');
    const modalTarget = document.querySelectorAll("[data-modal-target]");

    for (const iterator of modalTarget) {
        iterator.addEventListener('click', function (event) {
            body.setAttribute('class', 'is-modal');
            const value = iterator.getAttribute('data-key');
            const modalBox = document.querySelector(`[data-modal-box][data-key=${value}]`);
            const modalClose = modalBox.querySelector("[data-modal-close]");
            
            modalBox.classList.add('active');

            const paramsCloseModal = { modalBox, body };
            if (modalClose) {
                modalClose.addEventListener('click', function () { 
                    closeModal(paramsCloseModal);
                });
            } else {
                window.addEventListener('click', function (event) {
                    if (event.target === modalBox) {
                        closeModal(paramsCloseModal);
                    }
                });
            }
        });
    }
}

function closeModal(obj){
    obj.modalBox.classList.remove('active');
    obj.body.classList.remove('is-modal');
}