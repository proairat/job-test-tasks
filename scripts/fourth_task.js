/*
auth-id - тестовый (имеет ограничение на количество запросов, через 168 запросов лимит будет исчерпан. В платной версии API безлимитное количество запросов)
auth-token - тестовый (имеет ограничение на количество запросов, через 168 запросов лимит будет исчерпан. В платной версии API безлимитное количество запросов)
*/

const shell = require('shelljs');

const request = JSON.parse(shell.exec(`curl -v "https://us-extract.api.smartystreets.com/?auth-id=20c4b97b-b491-1998-2ed0-b6d5ac990607&auth-token=fwpTIUALCmO3R23o07Do" -H "content-type: text/plain" --data-binary "18615 Rogers Place SanAntonio Tx . 78258 477 south clinton st 2ndfl east orange, nj 07018 3113 40th ave Meridian,MS 39307 2479 Peachtree Rd NE Atlanta, Ga 30305"`, { silent: true }).stdout);

request['addresses'].forEach(address => {
	
	let api_output = address['api_output'][0];
	
	console.log('Было: ', address['text']);
	console.log('Стало: ', api_output['delivery_line_1']+", "+api_output['last_line']+", "+api_output['delivery_point_barcode']+"\n\n");
});
