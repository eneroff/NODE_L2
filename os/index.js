require('dotenv').config();

const os = require('os');

function showOSInfo() {
  const platform = os.platform();
  const freeMemory = os.freemem();
  const homeDir = os.homedir();
  const osType = os.type();
  const networkInterfaces = os.networkInterfaces();

  console.log("Информация об операционной системе:");
  console.log(`Платформа: ${platform}`);
  console.log(`Свободная память: ${freeMemory} байт`);
  console.log(`Главная директория: ${homeDir}`);
  console.log(`Имя ОС: ${osType}`);
  console.log("Интерфейсы сети:");
  console.log(networkInterfaces);
}

function isFreeMemoryGreaterThan4GB() {
  const freeMemory = os.freemem();
  const fourGB = 4 * 1024 * 1024 * 1024; 
  return freeMemory > fourGB;
}

function conditionalShowOSInfo() {
  const mode = process.env.MODE;
  if (mode && mode.toLowerCase() === 'admin') {
    showOSInfo();
  } else {
    console.log("Доступ запрещен. Режим не позволяет вывод информации об ОС.");
  }
}

console.log("Проверка свободной памяти больше 4GB:");
if (isFreeMemoryGreaterThan4GB()) {
  console.log("Свободной памяти больше 4GB.");
} else {
  console.log("Свободной памяти меньше или равна 4GB.");
}

console.log("\nУсловный вывод информации об ОС:");
conditionalShowOSInfo();
