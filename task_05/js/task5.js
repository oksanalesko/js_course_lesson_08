"use strict"
if (confirm("Почати тестування?")) {
   // Введення даних, позначення величин

   const maxGrade = 5
   const minGrade = 1
   const subjectsNum = parseInt(prompt('Введіть кількість предметів, з яких оцінений учень'))
   const pupilsGrades = []

   // Обчислення результатів

   // Формуємо масив з оцінками
   function createGradesArr(subjects, min, max, arr) {
      for (let i = 1; i <= subjects; i++) {
         const grade = parseInt(prompt(`Введіть оцінку з ${i} предмету (від ${min} до ${max})`))
         arr.push(grade)
      }
      return arr
   }

   // Отримуємо середній бал
   function getAverageGrade(arr) {
      let sumGrades = 0
      for (let i = 0; i < arr.length; i++) {
         const grade = arr[i];
         sumGrades += grade
      }
      return sumGrades / arr.length
   }

   // Шукаємо мінімальну оцінку
   function searchMinGrade(arr) {
      let minGrade = arr[0]
      for (let i = 0; i < arr.length; i++) {
         if (arr[i] < minGrade) minGrade = arr[i]
      }
      return minGrade
   }

   // Визначаємо, до якої категорії відноситься учень
   function getCategoryPupil(minGrade) {
      let categoryPupil
      switch (minGrade) {
         case 5:
            categoryPupil = 'Відмінник'
            break;
            case 4:
               categoryPupil = 'Хорошист'
            break;
            case 3:
               categoryPupil = 'Трійочник'
            break;
            case 2:
               categoryPupil = 'Двійочник'
               break;
         default:
            categoryPupil = 'Неуспішний'
            alert('Йди вчися!')
            break;
      }
      return categoryPupil
   }

   // Виведення результатів

   const gradesArray = createGradesArr(subjectsNum, minGrade, maxGrade, pupilsGrades)
   const pupilAverageGrade = getAverageGrade(gradesArray)
   const pupilMinGrade = searchMinGrade(gradesArray)
   const pupilCategory = getCategoryPupil(pupilMinGrade)

   document.write(`<div class="container">`)
   document.write(`<ul class="task-list">`)

   document.write(`<li class="task-item">Середній бал учня: ${pupilAverageGrade.toFixed(1)}</li>`)
	document.write(`<li class="task-item">Цей учень є: ${pupilCategory}</li>`)

   document.write(`</ul>`)
   document.write(`</div>`)
}