"use strict"
if (confirm("Почати тестування?")) {
   // Крок 0. Введення даних, позначення величин

   const gradesNumber = parseInt(prompt("Введіть кількість оцінок учня"))
   const pupilGrades = []
   let goodGrades = 0
   let badGrades = 0
   let belowAverageGrades = 0
   
   // Крок 1. Обчислення результатів

   // Формуємо послідовність оцінок учня

   function createPupilGradesArr(gradesNum, pupilGradesArr) {
		for (let g = 1; g <= gradesNum; g++) {
			let pupilGrade = parseInt(prompt(`Введіть ${g} оцінку (1 - 12)`))
			pupilGradesArr.push(pupilGrade)
		}
		return pupilGradesArr
   }
   // Підраховуємо кількість двійок, хороших оцінок, нижче середнього

   function gradeCalc(pupilGradesArr) {
      for (let i = 0; i < pupilGradesArr.length; i++) {
         const grade = pupilGradesArr[i];
         if (grade === 2) badGrades++
         if (grade >= 7) goodGrades++
         if (grade <= 6) belowAverageGrades++
      }
   }

   // крок 2. Виведення результатів

   let arrOfPupilGrades = createPupilGradesArr(gradesNumber, pupilGrades)
   gradeCalc(arrOfPupilGrades)

   document.write(`<div class="container" style="text-align:center">`)

   document.write(`<p>Учень отримав:<br> ${badGrades} - двійок,<br>${goodGrades} - хороших оцінок (добре, відмінно),<br>${belowAverageGrades} - оцінок, нижче середнього.</p>`)

   document.write(`</div>`)
}