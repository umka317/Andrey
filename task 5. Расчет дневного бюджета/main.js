let start = document.getElementById('start'),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	daybudget = document.getElementsByClassName('daybudget-value')[0],

	level = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalexpenses = document.getElementsByClassName('optionalexpenses-value')[0],
	income = document.getElementsByClassName('income-value')[0],
	monthsavings = document.getElementsByClassName('monthsavings-value')[0],
	yearsavings = document.getElementsByClassName('yearsavings-value')[0],
	expensesItem = document.getElementsByClassName('expenses-item'),

	expensesBtn = document.getElementsByTagName('button')[0]
	buttonOne = document.getElementsByTagName('button')[1],
	buttonTwo = document.getElementsByTagName('button')[2],

	optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	chooseIncome = document.querySelector('.choose-income'),

	year = document.querySelector('.year-value'),
	month = document.querySelector('.month-value'),
	day = document.querySelector('.day-value'),

	percentV = document.querySelector('.choose-percent'),
	sum = document.querySelector('.choose-sum'),
	savings = document.querySelector('#savings');



let money, time;
//До нажатия на 'Начать расчет' кнопки не действительны
expensesBtn.disabled = true;
expensesBtn.style.background = '#112B32';
buttonOne.disabled = true;
buttonOne.style.background = '#112B32';
buttonTwo.disabled = true;
buttonTwo.style.background = '#112B32';

// Нажимаем на Начать расчет. Вводим доход и число
start.addEventListener('click', function(){
	time = prompt('Введите дату в формате YYYY-MM-DD');
	money = +prompt('Ваш бюджет на месяц?');
//проверка на пустую строку, не число, отмену
	while(isNaN(money) || money == '' || money == null) {
		money = +prompt('Ваш бюджет на месяц?', '');
	}
	appData.budget = money;
	appData.timeData = time;
	budgetValue.textContent = money.toFixed();
	year.value = new Date(Date.parse(time)).getFullYear();
	month.value = new Date(Date.parse(time)).getMonth() + 1;
	day.value = new Date(Date.parse(time)).getDate() + 1;

	//До нажатия на Начать расчет кнопки не действительны
	expensesBtn.disabled = false;
	expensesBtn.style.backgroundImage = 'linear-gradient(336deg,#ffbd75,#ff964b),linear-gradient(#fff,#fff)';
	buttonOne.disabled = false;
	buttonOne.style.backgroundImage = 'linear-gradient(336deg,#ffbd75,#ff964b),linear-gradient(#fff,#fff)';
	buttonTwo.disabled = false;
	buttonTwo.style.backgroundImage = 'linear-gradient(336deg,#ffbd75,#ff964b),linear-gradient(#fff,#fff)';
});


//обязательные расходы
expensesBtn.addEventListener('click', function(){

	let sum = 0;
	for (let i = 0; i < expensesItem.length; i++) {
		let a = expensesItem[i].value,
		 	b = expensesItem[++i].value;
		if (typeof(a) === 'string' && typeof(a) != null && typeof(b) === 'string' && typeof(b) != null
			&& a != '' && b != '' && a.length < 30) {
			console.log('good');
			appData.expenses[a] = b;
			sum += +b;
		} else {
			console.log('bed result');
			i--;
			}
		}
	expensesValue.textContent = sum;
	appData.expenses = sum;
});

//необязательные расходы, вводим через запятую
buttonOne.addEventListener('click', function() {

	for (let i = 0; i < optionalexpensesItem.length; i++ ) {
		let a = optionalexpensesItem[i].value;
		appData.optionalExpenses[i] = a;
		optionalexpenses.textContent += appData.optionalExpenses[i] + ' ';	
	}
});

//расчет дневного бюджета. и вывод уровня достатка
buttonTwo.addEventListener('click', function() {

	if (appData.budget != undefined) {
		appData.moneyForDay = +((appData.budget - appData.expenses)/30).toFixed();
		daybudget.textContent = appData.moneyForDay;

		if (appData.moneyForDay <= 100) {
				level.textContent = 'Min level';
			} else if (appData.moneyForDay > 100 && appData.moneyForDay < 200) {
				level.textContent = 'Mid level';
			} else if (appData.moneyForDay >= 200) {
				level.textContent = 'Max level';
			} else {
				console.log('arror');
			}
	}else {
		daybudget.textContent = 'Error';
	}
});

//возможный доход
chooseIncome.addEventListener('change', function() {

	let items = chooseIncome.value;
	appData.incom = items.split(', ');
	income.textContent = appData.incom;
});

//расчитываем накопления. сумму накоплений и %
savings.addEventListener('click', function() {
	if (appData.saving == true) {
		appData.saving = false;
	} else {
		appData.saving = true;
	} console.log(appData.saving);
});

//сумма
sum.addEventListener('input', function() {
	if (appData.saving == true) {
		let sumV = +sum.value,
			percent = +percentV.value;

		appData.monthIn = sumV/100/12*percent;
		appData.year = sumV/100*percent;
		monthsavings.textContent = appData.monthIn.toFixed(1);
		yearsavings.textContent = appData.year.toFixed(1);
	}
});

//процент
percentV.addEventListener('input', function() {
	if (appData.saving == true) {
		let sumV = +sum.value,
			percent = +percentV.value;

		appData.monthIn = sumV/100/12*percent;
		appData.year = sumV/100*percent;
		monthsavings.textContent = appData.monthIn.toFixed(1);
		yearsavings.textContent = appData.year.toFixed(1);
	}
});

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	incom: [],
	saving: false,
};

