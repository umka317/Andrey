

let money = +prompt('Ваш бюджет на месяц?'),
	time = prompt('Введите дату в формате YYYY-MM-DD')

let appData = {
	money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	incom: [],
	sacing: false
};

// let answer1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
// 	answer2 = prompt('Во сколько обойдется?', '');
// 	answer3 = prompt('Введите обязательную статью расходов в этом месяце', ''),
// 	answer4 = prompt('Во сколько обойдется?', '');

// appData.expenses.answer1 = answer2;
// appData.expenses.answer3 = answer4;

for (let i = 0; i < 2; i++) {
	let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
	 	b = prompt('Во сколько обойдется?', '');
	if (typeof(a) === 'string' && typeof(a) != null && typeof(b) === 'string' && typeof(b) != null
		&& a != '' && b != '' && a.length < 30) {
		console.log('good');
		appData.expenses[a] = b;
	} else {
		console.log('bed result');
		i--;
		}
}

appData.moneyForDay = appData.money/30;

if (appData.moneyForDay < 100) {
	console.log('min');
} else if (appData.moneyForDay > 100 && appData.moneyForDay < 200) {
	console.log('mid');
} else if (appData.moneyForDay > 200) {
	console.log('max');
} else {
	console.log('arror');
}
