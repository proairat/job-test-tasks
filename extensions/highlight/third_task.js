'use strict';

document.addEventListener('DOMContentLoaded', function () {
	
	/*const get_children = (element) => {

		const children = [...element.children];

		if (children.length > 0) {

			children.map(elem => {

				console.log(elem);

				if (elem.children) {

					get_children(elem);
				}
			})
		}
	}*/

	document.body.addEventListener('click', () => {

		chrome.tabs.executeScript(null, {

			code: `!(() => {
			
				Array.from(document.body.children).forEach((item) => {

					const colored_words = item.textContent.replace(/(\\b[A-Za-z]+\\b)(?<=ing)/gi, '<span style="color:#ff0000; font-weight:600;">$1</span>');  // оборачиваем вхождения, содержащие слова, заканчивающиеся на "ing" тегом <span> с классом, изменяющим цвет текста

					item.innerHTML = colored_words;

				});
				
			})();`

		});

		window.close();

	});

	document.body.dispatchEvent(new Event("click"));

});

