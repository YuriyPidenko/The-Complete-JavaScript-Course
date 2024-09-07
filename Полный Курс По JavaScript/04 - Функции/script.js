// Функция - блок кода, который можно выполнять многократно
// let a = 5
// let b = 3
// let c
// c = a + b
// console.log(c);

// a = 8
// b = 12
// c = a + b
// console.log(c);

let a = 5
let b = 3

function sum(a, b) {
    const c = a + b
    console.log(c);
}

sum(a, b)

a = 8
b = 12
sum(a, b)

// Функция может быть
// именнованной
// анонимной
// присвоена переменной
// аргументом при вызове другой функции
// значением свойста (метод) обЪекта
// Функция - это объект

function myFn(a, b) {
    let c
    a = a + 1
    c = a + b
    return c
}
// Функция возвращает undefined если нет инстуркции return

// Передача значения по ссылке
const personeOne = {
    name: 'Bob',
    age: 21
}

function increasePersonAge(person) { // функция мутирует внешний объект
    person.age += 1 // функция мутирует внешний объект
    return person // функция мутирует внешний объект
}

increasePersonAge(personeOne) // передача объекта по ссылке
console.log(personeOne.age);
// внутри функции не рекомендуется мутировать внешние обЪекты

const personeOne2 = {
    name: 'Bob',
    age: 21
}

function increasePersonAge2(person) {
    const updatedPerson = Object.assign({}, person)
    updatedPerson.age += 1
    return updatedPerson
}

const updatedPersonOne = increasePersonAge2(personeOne2)
console.log(personeOne2.age);
console.log(updatedPersonOne.age);

//Колбэк функции

function anotherFunction() {
    //действтя...
}

function fnWithCallback(callbackFuction) {
    callbackFuction()
}

fnWithCallback(anotherFunction)



function printMyName() {
    console.log('Bob');
}

setTimeout(printMyName, 1000)

// Правила работы с функциями
// 1. Называть функции исходя из выполняемых задач
// 2. Одна функция должна выполнять одну задачу
// 3. Не рекомендуется изменять внешние относительно функции переменые