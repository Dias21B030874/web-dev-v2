function checkAge(age) {
    if (age > 18) return true;
    else return confirm('Родители разрешили?');
}
// same
function checkAge(age) {
    if (age > 18) return true;
    return confirm('Родители разрешили?');
}

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}

function min(a, b) {
    return a < b ? a : b;
}

function pow(x, n) {
    return x ** n;
}
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );