require('dotenv').config();

const { FIRST_NAME, LAST_NAME, GROUP_NUMBER, LIST_NUMBER } = process.env;
console.log(`Имя: ${FIRST_NAME}`);
console.log(`Фамилия: ${LAST_NAME}`);
console.log(`Номер группы: ${GROUP_NUMBER}`);
console.log(`Номер по списку: ${LIST_NUMBER}`);