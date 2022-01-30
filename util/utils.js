const badwords = [
	'http://', 'https://', 'ftp://', 'spotify:', 'nigger', 'n1gger', 
	'nígger', 'gook', 'chink', 'retard', 'r3t4rd', 'r3tard', 
	'fuck', 'shit', 'sh1t', 'porn', 'kike', 'k1ke'
];
const passesFilter = msg => !badwords.some(badword => msg.toLowerCase().includes(badword));

exports.passesFilter = passesFilter;