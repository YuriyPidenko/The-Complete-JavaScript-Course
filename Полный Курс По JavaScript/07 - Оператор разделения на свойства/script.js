//Оператор разделения объекта на свойста ...
//Оператор ...
const button = {
    width: 200,
    text: 'Buy'
}

const redButton = {
    ...button,
    color: 'red'
}

console.log(redButton);

// Объединение объектов с помощью ...

const buttonInfo = {
    text: 'Buy'
}

const buttonStyle = {
    color: 'yellow',
    width: 200,
    height: 300
}

const button1 = {
    ...buttonInfo,
    ...buttonStyle
}

console.log(button1);