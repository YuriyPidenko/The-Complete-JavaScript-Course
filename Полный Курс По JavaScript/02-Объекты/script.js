// Изменение значений свойст
const myCite = {
    city: 'New Your'
}
myCite.city = 'Las Vegas' // Изменение значений свойст
console.log(myCite);

//Добавление новых свойст
const myCite1 = {
        city: 'New Your'
    }
    // меняем сам объект
    // саму переменную не меняем как содержала ссылку на объект так и содержит
myCite1.popular = true
console.log(myCite1);

myCite1.country = 'USA'
console.log(myCite1);

//Удаление свойст
const myCite2 = {
    city: 'New Your',
    popular: true,
    country: 'USA'
}

delete myCite2.country // удаление свойств
console.log(myCite2)

// Доступ к значению свойста с использованием скобок
const myCite3 = {
    city: 'New Your'
}

myCite3['popular'] = true
console.log(myCite3);

// в кводратных скобкам мы можем по сути использовать любое выражение  JS
const countryPropertyName = 'country' // country - станет именем свойста
myCite3[countryPropertyName] = 'USA' // используется скобки если мы хотим название свойства из переменой 
console.log(myCite3);

// Вложенные свойста

const myCite4 = {
    city: 'New Your',
    info: { // вложенный объект
        isPopular: true,
        country: 'USA'
    }
}

console.log(myCite4.info.isPopular); // точечная запись

delete myCite4.info['isPopular'] // скобочная запись, удаление вложенного свойста
    // использовать скобочную запись только тогда когда здесь в квадратных скобках должно быть какое то выражение например название переменной
    // в других случаях используем точечную запись 
console.log(myCite4);

// Использование переменных

const name1 = 'Yura'
const postsQty1 = 23

// в качестве значений  свойств объекта можно использовать любые выражения
const userProfile1 = {
    name: name1, // используется переменная в качестве значений для свойств объекта
    postsQty: postsQty1, // используется переменная в качестве значений для свойств объекта
    hasSignedAgreement: false
}

console.log(userProfile1);

// сокращенный формат записи свойств
const name = 'Yura'
const postsQty = 23

const userProfile = {
    // сокращенные свойста рекомендуется размещать в начале объекта
    name, // используется переменная в качестве значений для свойств объекта
    postsQty, // используется переменная в качестве значений для свойств объекта
    hasSignedAgreement: false
}

console.log(userProfile);

// Методы объекта
// МЕТОД - свойсто объекта, значение которого - функция
const myCite5 = {
    city: 'New Your',
    cityGreeting: function() { // метод
        console.log('Greetings!!')
    }
}

myCite5.cityGreeting() // вызов метода

// JSON - JavaScript object notation
// Формат обмена данных

JSON.parse() // Конвертация JSON в объект
JSON.stringify() // Конвертация объекта в JSON