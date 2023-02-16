if("0") { // true
    alert( 'Привет' );
}

let value = prompt('Введите число', 0);

if (value > 0) {
  alert(1);
} else if (value < 0) {
  alert(-1);
} else {
  alert(0);
}

result = (a + b < 4) ? 'Мало' : 'Много';

let message = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';