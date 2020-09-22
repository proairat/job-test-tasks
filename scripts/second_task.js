'use strict';

document.addEventListener("DOMContentLoaded", () => {

    const text_in_paragraph = document.body.querySelector('p').textContent;     // считываем текстовое содержимое тега <p>
    const red_word = text_in_paragraph.replace(/(?=r)(\b[A-Za-z]+\b)/gi, '<span class="red_color">$1</span>');  // оборачиваем вхождения, содержащие первую регистронезависимую букву "r" | "R" 
                                                                                                                // тегом <span> с классом, изменяющим цвет текста

    document.body.insertAdjacentHTML('beforeend', `<p>${red_word}</p>`);    // вставляем в body полученное преобразование исходного текста

    Array.from(document.querySelectorAll('span.red_color')).map(elem => elem.textContent = [...elem.textContent].reverse().join(''));   // создаём из коллекции тегов <span> с классом, изменяющим цвет текста, массив. 
                                                                                                                                        // Изменяем содержимое каждого найдённого тега на то же содержимое, идущее в обратном порядке.
});