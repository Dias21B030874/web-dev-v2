let a = +prompt("Введите первое число", "");
let b = +prompt("Введите второе число", "");
alert(a + b);

alert((6.35 * 10).toFixed(20));

function readNumber() {
    let num;
    do {
      num = prompt("Введите число", 0);
    } while (!isFinite(num));
    if (num === null || num === '') return null;
    return +num;
}
alert(`Число: ${readNumber()}`);

let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) alert(i);
}

function random(min, max) {
    return min + Math.random() * (max - min);
}
alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
alert(randomInteger(1, 3));