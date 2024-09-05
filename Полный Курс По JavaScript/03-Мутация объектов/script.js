// Значения примитивныч типов
const a = 10
let b = a
b = 30
console.log(a);
console.log(b);

// Значения ссылочного типа
const person = {
    name: 'Bod',
    age: 29
}

person.age = 22 //Мутация объекта, на который ссылается переменная "person"
person.isAdult = true //Мутация объекта, на который ссылается переменная "person"

console.log(person.age);
console.log(person.isAdult);

// Мутирование копий

const person2 = {
    name: 'Bod',
    age: 29
}

const person3 = person2 // Копирование ссылки

person3.age = 26 //Мутация объекта, на который ссылается переменная "person3"
person3.isAdult = true //Мутация объекта, на который ссылается переменная "person3"

console.log(person2.age); // Мутация также отразилась на переменной "person2"
console.log(person2.isAdult);

// Как избежать мутаций
// вариант 1

const personOb = {
    name: 'bob',
    age: 25
}

// Если у объекта есть вложенные объекты, то ссылки на них сохраняются
const personOb2 = Object.assign({}, personOb) // создается новый объект
personOb2.age = 26

console.log(personOb2.age);
console.log(personOb.age);

// Вариант 2
const personFr = {
    name: 'bob',
    age: 25
}

// Ссылки на вложеннык объекты сохраняются
const personFr2 = {...personFr } // ... - Оператор разделяния объекта на свойста 
personFr2.name = "Alice"

console.log(personFr.name)
console.log(personFr2.name)

// Вариант 3 
// в этом варинат полностью избегаем мутацию копии объекта

const personJson = {
    name: 'bob',
    age: 25
}

const personJson2 = JSON.parse(JSON.stringify(personJson)) // Ссылки на вложенные объекты не сохраняются

personJson2.name = 'Alece'
console.log(personJson.name)
console.log(personJson2.name)