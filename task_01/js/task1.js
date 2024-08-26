"use strict"
if (confirm("Почати тестування?")) {
	// Крок 0. Введення даних, позначення величин

	const pupilNameNumber = parseInt(prompt("Введіть кількість учнів"))
	const pupilNames = []

	// Крок 1. Обчислення результатів
	// Формуємо масив імен учнів
	function createPupilsNamesArr(pupilsNum, pupilsNamesArr) {
		for (let n = 1; n <= pupilsNum; n++) {
			let pupilName = prompt(`Введіть ім'я учня №${n}`)
			pupilsNamesArr.push(pupilName)
		}
		return pupilsNamesArr
	}
	// Шукаємо кількість учнів з іменем Іван
	function findNameNumber(namesArr, name = "Іван") {
		let count = 0
		for (let i = 0; i < namesArr.length; i++) {
			if (namesArr[i] === name) count++
		}
		return count
	}

	// крок 2. Виведення результатів
   let arr = createPupilsNamesArr(pupilNameNumber, pupilNames)
	const res = findNameNumber(arr)

	document.write(`<div class="container" style="text-align:center">`)
	document.write(`<p>Кількість учнів з іменем Іван: ${res}</p>`)
	document.write(`</div>`)
}
