// 1. Отримання посилань на елементи <header> та <section>
const header = document.querySelector('header');
const section = document.querySelector('section');

// 2. Збереження URL-адреси JSON-файлу
const requestURL = 'https://semegenkep.github.io/json/example.json';

// 3. Створення нового екземпляра XMLHttpRequest
const request = new XMLHttpRequest();

// 4. Ініціалізація GET-запиту
request.open('GET', requestURL);

// 5. Встановлення типу відповіді JSON
request.responseType = 'json';

// 6. Надсилання запиту на сервер
request.send();

// 7. Обробка успішної відповіді від сервера
request.onload = function() {
    const superHeroes = request.response;
    
    // Заповнення заголовка сторінки
    populateHeader(superHeroes);
    
    // Створення та відображення карток супергероїв
    showHeroes(superHeroes);
};

/**
 * Завдання 1.1: Заповнення елемента <header> даними з JSON
 * @param {Object} jsonObj - Об'єкт даних супергероїв
 */
function populateHeader(jsonObj) {
    // Створення елемента <h1> для назви команди
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);

    // Створення елемента <p> для міста та року заснування
    const myPara = document.createElement('p');
    myPara.textContent = `Hometown: ${jsonObj['homeTown']} // Formed: ${jsonObj['formed']}`;
    header.appendChild(myPara);
}

/**
 * Завдання 1.2: Створення та відображення карток <article> для кожного героя
 * @param {Object} jsonObj - Об'єкт даних супергероїв
 */
function showHeroes(jsonObj) {
    const heroes = jsonObj['members'];

    for (let i = 0; i < heroes.length; i++) {
        // Створення основного контейнера картки <article>
        const myArticle = document.createElement('article');
        
        // Створення елементів для інформації про героя
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myList = document.createElement('ul');

        // Заповнення текстового вмісту
        myH2.textContent = heroes[i].name;
        myPara1.textContent = `Secret identity: ${heroes[i].secretIdentity}`;
        myPara2.textContent = `Age: ${heroes[i].age}`;
        myPara3.textContent = 'Superpowers:';

        // Перебір масиву суперздібностей (powers)
        const superPowers = heroes[i].powers;
        for (let j = 0; j < superPowers.length; j++) {
            const listItem = document.createElement('li');
            listItem.textContent = superPowers[j];
            myList.appendChild(listItem);
        }

        // Додавання всіх створених елементів у картку <article>
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        // Додавання картки героя в основну секцію <section>
        section.appendChild(myArticle);
    }
}
