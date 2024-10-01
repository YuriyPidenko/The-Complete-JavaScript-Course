// Промисы позволяют обрабатывать отложенные во времени события
// Промис - это обещание предоставить результат позже
// Промис может вернуть ошибку если результат предоставит невозможно


const myPromise = new Promise((resolve, reject) => {
  /**
   * Выполнение асинхронных действий
   * 
   * Внутри этой функции нужно в результате вызвать одну из функций resolve или reject
   */
});

// Получение результата промиса
myPromise
 .then(value => {
 /**
  * Действие в случае успешного использования Промиса
  * Значение value - это значение, переданное в вызове
  * функции resolve внутри Промиса
  */
 })
 .catch(error => {
    /**
     * Действия в случае отклонения Промиса
     * Значение error - это значение, переданное в вызове функции reject внутри Промиса
     */
 })

 // Получение данных с помощью featch api
 fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error(error))