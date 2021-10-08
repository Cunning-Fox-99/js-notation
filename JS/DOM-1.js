
const selectors = document.querySelectorAll ('.btn'); // Получение всех селекторов, указывает . для классов, # для ID иназвание тега для тегов.

selectors.forEach(item => {
    console.log(item);
});

const selector = document.querySelector('.input'); // Получение только первого элемента

const btn = document.querySelector('.btn')

console.log(selector);

btn.style.backgroundColor = 'blue';
btn.style.width = '500px';
selectors[1].style.borderRadius = '50%'
