export function choiceCity() {
    // { name: "Москва", "subdomain": "msk"}

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

    const city = document.querySelector("[data-choice-city]");
    const cityList = city.querySelector("[data-choice-list]");

    for (const iterator of citys) {
        const link = document.createElement('a');
        link.innerHTML = iterator.name;
        link.classList.add('choice-city__link');

        const linkLi = document.createElement('li');
        linkLi.classList.add('choice-city__item');

        linkLi.appendChild(link);
        cityList.appendChild(linkLi);
    }
}
