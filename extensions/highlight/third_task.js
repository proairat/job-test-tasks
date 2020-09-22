'use strict';

document.addEventListener('DOMContentLoaded', function () {
	
	document.body.addEventListener('click', () => {

		chrome.tabs.executeScript(null, {

			code: `!(() => {
			
						Array.from(document.body.children).forEach((item) => {

							item.innerHTML = item.innerHTML.replace(/(?<!((href|class).+))(\\b[A-Za-z]+\\b)(?<=ing)/gi, '<span style="color:#ff0000; font-weight:600;">$3</span>');  // оборачиваем вхождения, содержащие слова, заканчивающиеся на "ing" тегом <span> с классом, изменяющим цвет текста
						});
				
					})();`

		});
	});

	document.body.dispatchEvent(new Event("click"));

});
