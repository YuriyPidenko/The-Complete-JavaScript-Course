// синтаксис классов появился в ES6
// class...
// Классы позвляют создовать прототипы для объектов

 class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty +=1
    }
 }
 //переменная this указывает на экземпляр класса


 const firstComment = new Comment('First comment')
 console.log(firstComment);

 firstComment.upvote()
 console.log(firstComment.votesQty);
 firstComment.upvote()
 console.log(firstComment.votesQty);

 
 // Расширение других классовс
 class NumbersArray extends Array {
    sum() {
        return this.reduce((el, acc) => acc += el, 0)
    }
 }
const myArray = new NumbersArray(2, 5, 7)

console.log(myArray)
myArray.sum()