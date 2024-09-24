// Объявленная функция
function muFn(a, b) {
    let c
    a = a + 1
    c + a + b
    return c
}

// Функциональное выражение
// function(a, b) {
//     let c
//     a = a + 1
//     c + a + b
//     return c
// }
// у функции нет имени

// Присваивание функционального выражения переменной
const myFunction = function(a, b) {
    let c
    a = a + 1
    c + a + b
    return c
}
myFunction(5, 3)

// Функциональное выражение в вызову другой функции
setTimeout(function() {
    console.log('Отложенное сообщение');
}, 1000)

// Стрелочная функция
// (a, b) => {
//     let c
//     a = a + 1
//     c + a + b
//     return c
// }
// Стрелочная функциия - это выражение
// Стеролочные функции всегда АНОНИМНЫЕ

// как дать имя стрелочной функции
const myFunction1 = (a, b) => {
    let c
    a = a + 1
    c + a + b
    return c
}
myFunction1(5, 3)

// Стрелочная функция в вызове другой функции
setTimeout(() => {
    console.log('Отложенное сообщение');
}, 1000)

// Сокращения в стрелочных функциях
// Если ОДИН параметр, то круглые скобки можно опустить
a => {
    //тело функции
}

//фугрные скобки можно опустить если тело функции состоит их ОДНОГо выражения
// В этом случае стрелочная функция неявно возврощает результат выражения
(a, b) => a + b

// Значения параметров функции по умолчанию
function muLtByFactor(value, multiplier = 1) {
    return value * multiplier
}

muLtByFactor(10, 2)
muLtByFactor(5)

const newPost = (post, addeAt = Date()) => ({
    ...post,
    addeAt,
})

const firstPostt = {
    id: 1,
    author: 'Bob'
}

console.log(newPost(firstPostt))