//1
// let myName
// console.log(myName)
// myName = 'Юра'
// console.log(myName)
// console.log(console.log(10))


//2
// const myName = 'Юра'
// myName = ''
// console.log(myName)

//Примитивные типы
string(строка)
boolean(логический)
number(число)
null
undefined
symbol(символ)
    //Объект ссылочный тип
const ObjectA = {
    a: 10,
    b: true
}
const copyOfa = ObjectA
copyOfa.a = 20 //objectA.a -> 20 изменили свойство а с 10 на 20

copyOfa.c = 'abc' //objactA.c -> 'abc' добавляем новое свойство и присваиваем свойству новое значение