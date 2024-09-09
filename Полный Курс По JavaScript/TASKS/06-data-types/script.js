/** ЗАДАЧА - Типы данныч
 * 1.Объявите несколько переменных и присвойте им значения:
 * - строка
 * - число
 * - логическое
 * - null
 * - undefined
 * - объект
 * - масси
 * 
 * 2. Ввыведите в колсоль тип каждого из значений
 * используя оператор typeof
 */

const line = 'Bob'
const number = 32
const logical = true
const nul = null
let undef
const objectMy = {
    name: 'bob',
    age: 32
}
const array = [43, 54, 56, 53]

console.log(typeof line)
console.log(typeof number)
console.log(typeof logical)
console.log(typeof nul)
console.log(typeof undef)
console.log(typeof objectMy)
console.log(typeof array);