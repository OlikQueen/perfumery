/* 
product.html#3
*/

export function choiceCity() {
    const citys = [
        {
            name: "Москва",
            "subdomain": "msk"
        },
        {
            name: "Санкт-Петербург",
            "subdomain": "spb"
        },
        {
            name: "Калуга",
            "subdomain": "kaluga"
        },
        {
            name: "Новосибирск",
            "subdomain": "novosibirsk"
        },
        {
            name: "Владикавказ",
            "subdomain": "vladikavkaz"
        },
        {
            name: "Казань",
            "subdomain": "kazan"
        },
    ];

    const cityNode = document.querySelector("[data-choice-city]");
    const cityListNode = cityNode.querySelector("[data-choice-list]");

    function createCitys(citys) {
        cityListNode.innerHTML = "";
        
        for (const city of citys) {
            const link = document.createElement('a');
            link.innerHTML = city.name;
            link.classList.add('choice-city__link');
            link.setAttribute('href', 'subdomain');
    
            const linkLi = document.createElement('li');
            linkLi.classList.add('choice-city__item');
    
            linkLi.appendChild(link);
            cityListNode.appendChild(linkLi);
        }
    }

    createCitys(citys);

    // 1. вывести value из input в консоль
    // 2. написать регулярку
    // 3. вывести города
    // 4. синхронизировать поиск с базой

    // 1. сделать метод
    // 2. сформировать динамический массив

    // ДЗ. uppercase === lowercase +

    const inputNode = cityNode.querySelector("input");
    inputNode.addEventListener('input', function () {
        const newCitys = [];
        const searchValue = inputNode.value.trim().toLowerCase();

        for (const city of citys) {
            // const regex = /а/g;
            let regex = new RegExp(`^${searchValue}`,"i");

            let found = city.name.match(regex);

            if (Array.isArray(found) && found.length > 0) {
                newCitys.push(city)
            }
        }
        createCitys(newCitys);
    })
}
