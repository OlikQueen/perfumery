export function modal() {
    const body = document.querySelector('body');
    const modalTarget = document.querySelectorAll("[data-modal-target]");
    

    for (const iterator of modalTarget) {
        iterator.addEventListener('click', function (event) {
            event.stopPropagation();
            body.setAttribute('class', 'is-modal');

            const value = iterator.getAttribute('data-key');
            const modalBox = document.querySelector(`[data-modal-box][data-key=${value}]`);

            modalBox.classList.add('active');
            
            // const modalClose = modalBox.querySelector("[data-modal-close]");

            // modalClose.addEventListener('click', function () { 
            //     event.stopPropagation(); 
            //     modalBox.classList.remove('active');
            //     body.classList.remove('is-modal');
            // });

            window.addEventListener('click', function (event) {
                if (event.target === modalBox) {
                    modalBox.classList.remove('active');
                    body.classList.remove('is-modal');
                }
            });
        });
    }
}
modal();
