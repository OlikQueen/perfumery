export function modalCity(){
    const body = document.querySelector('body');
    const modalTarget = document.querySelectorAll("[data-modal-targets]");
   
    for (const iterator of modalTarget) {
        iterator.addEventListener('click', function () {
            body.setAttribute('class', 'is-modal');

            const value = iterator.getAttribute('data-key');
            const modalBox = document.querySelector(`[data-modal-boxs][data-key=${value}]`);

            modalBox.classList.add('active');
            
            const modalClose = modalBox.querySelector("[data-modal-closes]");
            const cityList = modalBox.querySelectorAll("[data-modal-city-list] li");
            const modalInput = modalBox.querySelector("[data-modal-input]");


            modalClose.addEventListener('click', function () { 
                modalBox.classList.remove('active');
                body.classList.remove('is-modal');
            })

            cityList.forEach(function(city) {
                city.addEventListener('click', function() {
                    modalInput.value = city.textContent;   
                });
            });
        })
    }
}