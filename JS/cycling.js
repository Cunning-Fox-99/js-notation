// Цикл while

let n = 10;
let m = 20;
let sum = 0;
let sum2 = 0
let result = 1;

/* Условия цикла */
while (n <= 11) {
  /* Тело цикла */
  sum += n;
  console.log(sum);
  n++;
}

// Цикл Do while

do {
  /* Тело цикло выполняется хотябы раз */

  if ( n % 2 === 1){
    result *= n
  }
n++;

console.log(result);

} while (n <= m); /* Условие цикла */


// Цикл For

for ( let i = 10; i <=m; i++ /* иницилизация ; условие ; шаг */){
    /* Тело цикла */
    if ( i % 2 === 1){
        result *= i
      }
      console.log(result);
}


for (let i = 1; i <=5; i++){
    console.log( '\n=> ' + i + ' <=\n\n');
    for (let j=1;  j<=10; j++){
        console.log( i + ' x ' + j + ` = ` + i*j);
    }
   
}

// Бесконечный цикл

while (true) {
    const userInput = prompt ('Your number');
    if (!userInput) {
        break
    }
    sum2 += Number(userInput);
    console.log(sum2)
}