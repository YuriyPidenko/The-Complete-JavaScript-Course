// Деструктуризация объектов
const userProfile = {
    name: 'Bob',
    commentsQty: 23,
    hasSignedAgreement: false
}

const { name, commentsQty } = userProfile
const { hasSignedAgreement } = userProfile

console.log(name);
console.log(commentsQty);

// Деструктуризация массивов

const fruits = ['Apple', 'Banana']

const [fruitOne, fruitTwo] = fruits // Объявление новых переменных и присваивание значений на основе элементов массива

console.log(fruitOne);
console.log(fruitTwo);

// Деструктуризация в функциях
const userProfile1 = {
    name: 'Bob',
    commentsQty: 23,
    hasSignedAgreement: false
}

const userInfo = ({ name, commentsQty }) => {
    if (!commentsQty) {
        return `user ${name} has no comments`
    }
    return `user ${name} has ${commentsQty} comments`
}

userInfo(userProfile1)