let i = 3;

while (i) {
  alert( i-- );
} // 1

i = 0;
while (++i < 5) alert(i); // 1-4
i = 0;
while (i++ < 5) alert(i); // 1-5

for (let i = 0; i < 5; ++i) alert(i); // 0-4
for (let i = 0; i < 5; i++) alert(i); // 0-4

for (let i = 2; i <= 10; i += 2) alert(i);

i = 0;
while (i < 3) alert(`number ${i++}!`);

let num;
do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);

let n = 10;
for(i = 2; i <= n; i++) {
    for(j = 2; j <= Math.sqrt(i); j++) {
        if(!(i % j)) alert(i)
    }
}