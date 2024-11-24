
// 1. Приветствие по имени
let name = prompt("Введите ваше имя:");
alert(`Привет, ${name}!`);

// 2. Подсчет возраста
const currentYear = 2024; // Укажите текущий год
let birthYear = prompt("Введите ваш год рождения:");
let age = currentYear - birthYear;
alert(`Вам ${age} лет.`);

// 3. Периметр квадрата
let side = prompt("Введите длину стороны квадрата:");
let perimeter = 4 * side;
alert(`Периметр квадрата: ${perimeter}`);

// 4. Площадь круга
let radius = prompt("Введите радиус окружности:");
let area = Math.PI * Math.pow(radius, 2);
alert(`Площадь окружности: ${area.toFixed(2)}`);

// 5. Расчет скорости
let distance = prompt("Введите расстояние между городами в км:");
let time = prompt("За сколько часов хотите добраться?");
let speed = distance / time;
alert(`Необходимая скорость: ${speed.toFixed(2)} км/ч`);

// 6. Конвертер валют
const rate = 0.93; // Курс доллара к евро
let dollars = prompt("Введите сумму в долларах:");
let euros = dollars * rate;
alert(`Сумма в евро: ${euros.toFixed(2)}`);

// 7. Количество файлов на флешке
let flashSize = prompt("Введите объем флешки в Гб:");
let fileSize = 820; // Размер файла в Мб
let numFiles = Math.floor((flashSize * 1024) / fileSize);
alert(`На флешку помещается ${numFiles} файлов размером ${fileSize} Мб.`);

// 8. Шоколадки и сдача
let wallet = prompt("Введите сумму денег в кошельке:");
let chocolatePrice = prompt("Введите цену одной шоколадки:");
let chocolates = Math.floor(wallet / chocolatePrice);
let change = wallet % chocolatePrice;
alert(`Вы можете купить ${chocolates} шоколадок. Сдача: ${change.toFixed(2)}`);

// 9. Число задом наперед
let number = prompt("Введите трехзначное число:");
let reversed = number.split("").reverse().join("");
alert(`Число задом наперед: ${reversed}`);

// 10. Проверка четности числа
let integer = prompt("Введите целое число:");
let isEven = integer % 2 === 0;
alert(isEven ? "Число четное" : "Число нечетное");
