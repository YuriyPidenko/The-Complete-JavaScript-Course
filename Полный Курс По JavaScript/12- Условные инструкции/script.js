//Инструкция if 
// if (условие) {
//     блок кода, выполяемвй однократно, если Условие правдиво
// }

let val = 10

if (val > 5) {
    val += 20
}

console.log(val);

const person = {
    age: 20
}

if (!person.name) {
    console.log('Имя не указано');
    // Другие действия в случае, если свойсто "name" у объекта "person" нету
}

// Инструкция if else

// if (условие) {
//     блок кода, выполяемвй однократно, если Условие правдиво
// } else {
// Блок кода, выполняемый однократно, если Условия ложно
// }

let val1 = 10

if (val1 < 5) {
    val1 += 20
} else {
    val -= 20
}

console.log(val1);

// Инуструкция if else if

// if (условие 1) {
//     блок кода, выполяемвй однократно, если Условие 1 правдиво
// } else if (условие 2)
// блок кода, выполяемвй однократно, если Условие 2 правдиво
// } else {
// Блок кода, выполняемый однократно, если предыдущие Условия ложны
// }

// Предпочтительный формат if 
// if (условие 1) {
//     блок кода, выполяемвй однократно, если Условие 1 правдиво
// }

// if (условие 2) {
//     блок кода, выполяемвй однократно, если Условие 2 правдиво
// }

// if (условие 3) {
//     блок кода, выполяемвй однократно, если Условие 3 правдиво
// }

const age = 25

if (age > 18) {
    console.log('Is adult');
} else if (ahe >= 12) {
    console.log('Is teenaqer');
} else {
    console.log('Is child');
}

const age1 = 25
if (age1 > 18) {
    console.log('Is adult');
}

if (age1 >= 12 && age <= 18) {
    console.log('Is teenaqer');
}

if (age1 < 12) {
    console.log('Is child');
}

// использование if в функциях
const sumPositiveNumbers = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'One of the argument is not a number'
    }

    if (a <= 0 || b <= 0) {
        return 'Numbers are not positive'
    }

    return a + b
}

// Инструкция switch
switch (Выражение) {
    case A:
        //Действия если Выражение === A
        break
    case B:
        //Действия если Выражение === B
        break
    default:
        // Действия по умолчанию 

}

const month = 2

switch (month) {
    case 12:
        console.log('Декабрь');
        break
    case 1:
        console.log('Январь');
        break
    case 2:
        console.log('Февраль');
        break
    default:
        console.log('Это не зимний месяц');
}