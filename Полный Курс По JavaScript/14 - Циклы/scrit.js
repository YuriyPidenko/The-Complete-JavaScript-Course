// Цикл for
// for (Начальная инструкция; Условие; Итерационное действие) {
//     Блок кода, выполняемый на каждой итерации
// }

for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Циклы можно использовать для массивов
// не рекомендуется цикл for использовать для массивов
// Используйте функции высшего порядка массивов - "forEach", "map", "reduce"

// Цикл for для массивов
const myArray = ['first', 'second', 'third']

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
// Метод массивов forEach

myArray.forEach((element, index) => {
    console.log(element, index);
})

//Цикл while
while (Условие) {
  // Блок кода, выполняемый на каждой итерации  
}

let i = 0
while (i < 5) {
    console.log(i);
    i++
}

//Цикл do while
//минемум выполнится один раз в любом случаея
do {
      // Блок кода, выполняемый на каждой итерации 
} while (Условие)

let j = 10
do {
    console.log(j);
    j++
} while (j < 5)

// Цикл for in
for (kei in Object) {
    // Действие с каждым свойстом объекта
    // Значения свойства - Object[key]
}

const myObject = {
    x: 10,
    Y: true,
    z: 'abc'
}

for (const key in myObject) {
    console.log(key, myObject[key]);
}

// forEach для объектов

const myObject1 = {
    x: 10,
    Y: true,
    z: 'abc'
}

Object.keys(myObject1).forEach(key => {
    console.log(key, myObject1[key]);
})

// for in  для массивов

const myArray1 = [true, 10, 'abc', null]
for (const key in myArray1) {
    console.log(myArray1[key]);
}

// Цикл for of 
for (Element of Iteranle) {
    // Действия с определенным элементом
}

// for of для строк
const myString = 'Hey'

for (const letter of myString) {
    console.log(letter);
}

// for of для массивов
const myArray2 = [true, 10, 'abc', null]

for (const element of myArray2) {
    console.log(element);
}

// for of не для объектов