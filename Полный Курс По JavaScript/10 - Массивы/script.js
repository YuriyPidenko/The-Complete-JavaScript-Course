// МАССИВ - Это объект с цифровыми именами свойств
// фломат записи массивов
const myArray = [1, 2, 3]
console.log(myArray);

const myArray2 = new Array(1, 2, 3)
console.log(myArray2);

//Массив VS объект
const myObject = {
    0: 1,
    1: 2,
    3: 3,
    length: 3
}

console.log(myObject);

const myArray3 = [1, 2, 3]

console.log(myArray3);

//Длина массива
const myArray4 = [1, 2, 3, 4]
console.log(myArray4);
console.log(myArray4.length);

myArray4[2] = 'abc'

console.log(myArray4);
console.log(myArray4[2]);

myArray4[4] = true

console.log(myArray4);
console.log(myArray4.length);

//push - добавление нового элемента в массив

myArray4.push(false)
console.log(myArray4);

//pop - удаление последнего элемента в массиве
myArray4.pop()

// unshift - добавление элемента в начала массива
// chift - удаляет первый элемент в массиве

const removedElement = myArray4.shift() // - присваетвает переменой удаленный элеменет в массиве

console.log(removedElement);

// метод - forEach
const myArray5 = [1, 2, 3]
console.log(myArray5);

myArray5.forEach(el => console.log(el * 2)) // Выполнение действий с каждым элементом массива

console.log(myArray5);

// метод - map
const myArray6 = [1, 2, 3]
console.log(myArray6);

const newArray = myArray6.map(el => el * 3)
console.log(newArray);
console.log(myArray6);