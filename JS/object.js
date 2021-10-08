/* eslint-disable no-restricted-syntax */
/* Обьяявление объекта */
const options = {
  /* Значение объекта */
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    bg: "red",
  },
  makeTest() {
    console.log("Make some test");
  },
};

options.makeTest();

console.log(options.name); /* Получение значения */

console.log(
  options["colors"]["border"]
); /* Получение значение с объекта который находится внутри объекта */

console.log(
  Object.keys(options).length
); /* Получение обекта в массив и получение его длинны */

// delete options.name; /* Удаление строки */
console.log(options);

// eslint-disable-next-line no-restricted-syntax
// eslint-disable-next-line guard-for-in
for (const key in options) /* key Это каждый ключ в обьекте такие как name, width и т.д. */ {
  console.log(`Свойство ${key} имеет значение ${options[key]}`);
}

const user = {
  fistName: 'Sasha',
  age: 30,
  isAdmin: true,
  email: 'test@test.com',
  'user-address': {
    city: 'Khrakiv'
  },
  skills: ['html', 'css', 'js']
};

let value;
let prop = 'skills';


value = user.fistName;
value = user['user-address'].['city']; // Получение сложного элемента
value = iser[prop][0]; // Получение элемента с массива
user.fistName = 'Tosha'; // Перезапись поля
value = user.fistName; 
value= user.info; // Добавление поля

user['user-address'].city = 'Kiev';
user['user-address'].country = 'Ukrane';





console.log(value);
console.log(user);

const telephone = {
  product: 'iphone',
  price: 1000,
  currency: 'dollar',
  details: {
    model: '10x',
    color: 'black'
  }
}

item.details = {model: '', color: ''} // Добавление объекта в объект

console.log(telephone)