'use strict';

let money = prompt('Ваш бюджет на месяц?'),
	time = prompt('Введите дату в формате YYYY-MM-DD')


let answerOne = prompt('Введите обязательную статью расходов в этом месяце'),
	answerTwo = prompt('Во сколько обойдется?');

let appData = {
	money,
	timeData: time,
	expenses: {
		[answerOne]: answerTwo
	},
	optionalExpenses: {

	},
	incom: [

	],
	sacing: false
};

console.log(appData);

alert('бюджет на 1 день -' + money/30 + 'rub');