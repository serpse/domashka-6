const oneNumber = +prompt('ввод первое число');
const twoNumber = +prompt('ввод второе число');
let result;

const operation = prompt('ввод тип операций');

if (operation === '*') {
    result = oneNumber * twoNumber 
} else if (operation === '/') {
    result = oneNumber / twoNumber
} else if (operation === '+') {
    result = oneNumber + twoNumber
} else if (operation === '-') {
    result = oneNumber - twoNumber
} else {
    alert('operation')
};

alert(`${oneNumber} ${operation} ${twoNumber} = ${result}`);