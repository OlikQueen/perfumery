export function choiceElement() {

    const database = {
        city: [
            {
                name: "Владикавказ",
                "subdomain": "vladikavkaz"
            },
            {
                name: "Калуга",
                "subdomain": "kaluga"
            },
            {
                name: "Казань",
                "subdomain": "kazan"
            },
            {
                name: "Москва",
                "subdomain": "msk"
            },
            {
                name: "Новосибирск",
                "subdomain": "novosibirsk"
            },
            {
                name: "Санкт-Петербург",
                "subdomain": "spb"
            },
        ],

        nots: [
            {
                name: "абрикос",
            },
            {
                name: "мандарин",
            },
            {
                name: "вишня",
            },
            {
                name: "банан",
            },
            {
                name: "абрикос",
            },
            {
                name: "мандарин",
            },
            {
                name: "вишня",
            },
            {
                name: "банан",
            },
            {
                name: "абрикос",
            },
            {
                name: "мандарин",
            },
            {
                name: "вишня",
            },
            {
                name: "банан",
            },
            {
                name: "абрикос",
            },
            {
                name: "мандарин",
            },
            {
                name: "вишня",
            },
            {
                name: "банан",
            },
            {
                name: "абрикос",
            },
            {
                name: "мандарин",
            },
            {
                name: "вишня",
            },
            {
                name: "банан",
            },
            {
                name: "абрикос",
            },
            {
                name: "мандарин",
            },
            {
                name: "вишня",
            },
            {
                name: "банан",
            },
            {
                name: "абрикос",
            },
            {
                name: "мандарин",
            },
            {
                name: "вишня",
            },
            {
                name: "банан",
            },
            {
                name: "абрикос",
            },
            {
                name: "мандарин",
            },
            {
                name: "вишня",
            },
            {
                name: "банан",
            },
            {
                name: "абрикос",
            },
            {
                name: "мандарин",
            },
            {
                name: "вишня",
            },
            {
                name: "банан",
            },
            {
                name: "абрикос",
            },
            {
                name: "мандарин",
            },
            {
                name: "вишня",
            },
            {
                name: "банан",
            },
            {
                name: "абрикос",
            },
            {
                name: "мандарин",
            },
            {
                name: "вишня",
            },
            {
                name: "банан",
            },
            {
                name: "абрикос",
            },
            {
                name: "мандарин",
            },
            {
                name: "вишня",
            },
            {
                name: "банан",
            },
            {
                name: "абрикос",
            },
            {
                name: "мандарин",
            },
            {
                name: "вишня",
            },
            {
                name: "банан",
            },
            {
                name: "абрикос",
            },
            {
                name: "мандарин",
            },
            {
                name: "вишня",
            },
            {
                name: "банан",
            },
            {
                name: "абрикос",
            },
            {
                name: "мандарин",
            },
            {
                name: "вишня",
            },
            {
                name: "банан",
            },
            {
                name: "абрикос",
            },
            {
                name: "мандарин",
            },
            {
                name: "вишня",
            },
            {
                name: "банан",
            },
        ]
    }


    const elementsNode = document.querySelectorAll("[data-choice-element]");


    for (const iterator of elementsNode) {
        const elementListNode = iterator.querySelector("[data-choice-list]");
        const key = iterator.getAttribute('data-choice-key');
        
        createElement(database[key], elementListNode);

        const inputNode = iterator.querySelector("input");
        inputNode.addEventListener('input', function () {
            const newElements = [];

            for (const element of database[key]) {
                let regex = new RegExp(inputNode.value, "i");

                let found = element.name.match(regex);

                if (Array.isArray(found) && found.length > 0) {
                    newElements.push(element)
                }
            }
            createElement(newElements, elementListNode);
        })
    }

    function createElement(elements, elementListNode) {
        elementListNode.innerHTML = "";

        for (const element of elements) {
            const tag = document.createElement(("subdomain" in element) ? 'a' : 'span');

            tag.innerHTML = element.name;
            tag.classList.add('choice-element__link');

            ("subdomain" in element) && tag.setAttribute('href', 'subdomain');

            const linkLi = document.createElement('li');
            linkLi.classList.add('choice-element__item');

            linkLi.appendChild(tag);
            elementListNode.appendChild(linkLi);
        }
    }

}
