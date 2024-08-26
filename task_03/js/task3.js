"use strict"
if (confirm("Почати тестування?")) {
   // Введення даних, позначення величин
   const prizeNum = 100
   const minPrizeValue = -500
   const maxPrizeValue = 500
   const prizeNumArr = []

   // Обчислення результатів

   // Формуємо масив з виграшними елементами
   function createPrizeFound(arrNum, min, max, array) {
      for (let i = 0; i < arrNum; i++) {
         const arrElement = min + Math.floor(Math.random() * (max - min + 1))
         array.push(arrElement)
      }
      return array
   }

   // Отримуємо суму виграшу

   function getPrizeSum(array) {
      let sum = 0
      let userAnswer = true
      do {
         const userChoice = parseInt(prompt(`Виберіть номер від 1 до ${array.length}`))

         if (isNaN(userChoice) || userChoice < 1 || userChoice > array.length) {
            alert('Невірний номер. Спробуйте знову.')
            continue
         }
         
         sum += array[userChoice - 1]
         alert(`Ваш виграш складає ${sum}`)
         let userContinue = confirm('Продовжуємо?')
         if(!userContinue) userAnswer = false
      } while (userAnswer === true);
      return sum
   }
   
   // Виведення результатів

   let prizeFound = createPrizeFound(prizeNum, minPrizeValue, maxPrizeValue, prizeNumArr)
   let sumPrize = getPrizeSum(prizeFound)
   document.write(`<div class="container" style="text-align:center">`)

   document.write(`<p>Ваш виграш складає = ${sumPrize}</p>`)

   document.write(`</div>`)
}
