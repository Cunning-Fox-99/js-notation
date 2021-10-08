/* eslint-disable no-restricted-syntax */
const arr = [1, 2, 3, 4, 5, 6, 7];

arr.pop(); // Удаляет последний элемент с массива

arr.push(8); // Добавляет элемент в конец массива

/* Перебор массива */
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

/* Перебор массива способом For of */

for (let value of arr) {
  console.log(value);
}

// перебор ForEach, принимает три аргумента, первый аргумент это элемент перебора, называем его, второй аргумент номер по порядку, третий аргумент это ссылка на массив

arr.forEach(function (item, i, arr) {
  console.log(`${i}: ${item} внутри массива ${arr}`);
});

const numArr = [2, 32, 1234, 54, 323];

let value;

value = numArr.length;

value = Array.isArray(numArr);
value = numArr[2];
numArr[2] = 12;
value = numArr.indexOf(32);

console.log(value, numArr);


function getArray(num) {
  const arr = [];

  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }

  return arr;
}

console.log(getArray(10));

function doubleArray(arr) {
  return arr.concat(arr);
}

console.log(doubleArray(getArray(10)))

function changeCollection() {
  const res = [];

  for (let i = 0; i < arguments.length; i++) {
    if (Array.isArray(arguments[i])) {
      const el = arguments[i].slice();
      el.shift();
      res.push(el)
    }
  }

  return res;
}

console.log(changeCollection([1,2,3]))

const users = [
  {
    "_id": "5e36b779dc76fe3db02adc32",
    "balance": "$1,955.65",
    "picture": "http://placehold.it/32x32",
    "age": 33,
    "name": "Berg Zimmerman",
    "gender": "male"
  },
  {
    "_id": "5e36b779d117774176f90e0b",
    "balance": "$3,776.14",
    "picture": "http://placehold.it/32x32",
    "age": 37,
    "name": "Deann Winters",
    "gender": "female"
  },
  {
    "_id": "5e36b779daf6e455ec54cf45",
    "balance": "$3,424.84",
    "picture": "http://placehold.it/32x32",
    "age": 36,
    "name": "Kari Waters",
    "gender": "female"
  }
]


function filterUsers(arr, key, value) {
  if (!Array.isArray(arr)) return new Error('The first argument should be an array');
  if (typeof key !== "string" || key === '') return new Error('The key should be a valid string');
  if (value === undefined || value === null) return new Error('The value should be a valid value.');

  const res = [];

  for (i = 0; i < arr.length; i++) {
    if (arr[i][key] === value) {
      res.push(arr[i])
    }
  }

  return res;
}

console.log(filterUsers(users, "age", 36))