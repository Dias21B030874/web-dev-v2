alert(null || 2 || undefined); // 2

alert(alert(1) || 2 || alert(3)); // 1, 2

alert(1 && null && 2); // null

alert(alert(1) && alert(2)); // undefined

alert(null || 2 && 3 || 4); // 3

if(age >= 14 && age <= 90) {}

if(age < 14 || age > 90) {}

if (-1 || 0) alert('first'); // true
if (-1 && 0) alert('second'); // false
if (null || -1 && 1) alert('third'); // true

let userName = prompt("Кто там?", '');

if(userName === 'Админ') {
  let pass = prompt('Пароль?', '');
  if(pass === 'Я главный') {
    alert('Здравствуйте!');
  }else if(pass === '' || pass === null) {
    alert('Отменено');
  }else {
    alert('Неверный пароль');
  }
}else if(userName === '' || userName === null) {
  alert('Отменено');
}else {
  alert("Я вас не знаю");
}