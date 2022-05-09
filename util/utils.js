//const badwords = [censored];
const passesFilter = msg => !badwords.some(badword => msg.toLowerCase().includes(badword));

exports.passesFilter = passesFilter;
