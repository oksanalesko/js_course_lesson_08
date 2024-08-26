"use strict"
if (confirm("Почати тестування?")) {
	// Введення даних, позначення величин

	const daysPerWeek = 7
	const visitorsNumPerWeek = []

	// Обчислення результатів

	// Формуємо масив з кількістю відвідувачів магазину протягом тижня

	function createVisitorsArr(days, array) {
		for (let d = 0; d < days; d++) {
			const numPerDay = parseInt(prompt(`Введіть кількість відвідувачів у ${d + 1} день`))
			array.push(numPerDay)
		}
		return array
	}

	// Номери днів, коли відвідувачів була меншою за 20
	function getNumDayPoorVisitors(array, poorVisitors = 20) {
		let poorVisitorsDays = ``
		for (let d = 0; d < array.length; d++) {
			const dayVisitors = d;
			if (array[dayVisitors] < poorVisitors) poorVisitorsDays += ` ${dayVisitors + 1} -`
		}
		return poorVisitorsDays
	}

	// номери днів з мінімальним відвідуванням
	function getNumDayMinVisits(array) {
		let minVisitsDay = 1;
		for (let d = 1; d <= array.length; d++) {
			if (array[d] < array[minVisitsDay]) minVisitsDay = d
		}
		return minVisitsDay
	}

	// номери днів з максимальним відвідуванням
	function getNumDayMaxVisits(array) {
		let maxVisitsDay = 1
		for (let d = 1; d <= array.length; d++) {
			if (array[d] > array[maxVisitsDay]) maxVisitsDay = d
		}
		return maxVisitsDay
	}

	// загальну кількість клієнтів у робочі дні
	function getCountWorkDayVisits(array, firstWorkDay = 1, lastWorkDay = 5) {
		let workDaysVisits = 0
		for (let d = firstWorkDay - 1; d <= lastWorkDay - 1; d++) {
			workDaysVisits += array[d]
		}
		return workDaysVisits
	}

	// загальну кількість клієнтів у вихідні дні
	function getCountWeekendDayVisits(array, firstWeekendDay = 6, lastWeekendDay = 7) {
		let weekendDaysVisits = 0
		for (let d = firstWeekendDay - 1; d <= lastWeekendDay - 1; d++) {
			weekendDaysVisits += array[d]
		}
		return weekendDaysVisits
	}
	
	// Виведення результатів

	const numbersVisitorsPerWeek = createVisitorsArr(daysPerWeek, visitorsNumPerWeek)
	const poorVisitorsDays = getNumDayPoorVisitors(numbersVisitorsPerWeek)
	const minVisitorsDay = getNumDayMinVisits(numbersVisitorsPerWeek)
	const maxVisitorsDay = getNumDayMaxVisits(numbersVisitorsPerWeek)
	const numberWorkDaysVisitors = getCountWorkDayVisits(numbersVisitorsPerWeek)
	const numberWeekendDaysVisitors = getCountWeekendDayVisits(numbersVisitorsPerWeek)

	document.write(`<div class="container">`)
	document.write(`<ul class="task-list">`)

	document.write(`<li class="task-item">Номери днів, протягом яких кількість відвідувачів була меншою за 20: ${poorVisitorsDays}</li>`)
	document.write(`<li class="task-item">Номери днів, коли кількість відвідувачів була мінімальною: ${minVisitorsDay}</li>`)
	document.write(`<li class="task-item">Номери днів, коли кількість відвідувачів була максимальною: ${maxVisitorsDay}</li>`)
	document.write(`<li class="task-item">Загальна кількість клієнтів у робочі дні складає: ${numberWorkDaysVisitors}</li>`)
	document.write(`<li class="task-item">Загальна кількість клієнтів у вихідні дні складає: ${numberWeekendDaysVisitors}</li>`)

	document.write(`</ul>`)
	document.write(`</div>`)
}