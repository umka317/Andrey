let money, time;

function start(argument) {
	money = +prompt('Ваш бюджет на месяц?');
	time = prompt('Введите дату в формате YYYY-MM-DD');

	while(isNaN(money) || money == '' || money == null) {
		money = +prompt('Ваш бюджет на месяц?', '');
	}
}
start();

let appData = {
	money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	incom: [],
	saving: true
};

function shooseExpenses(){
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
}

shooseExpenses();

//Дневной бюджет
function detectDayBudget(){
	appData.moneyForDay = +(appData.money/30).toFixed();
	alert(appData.moneyForDay);
}
detectDayBudget();

// уровень достатка
function detectLevel() {
	if (appData.moneyForDay < 100) {
		console.log('min');
	} else if (appData.moneyForDay > 100 && appData.moneyForDay < 200) {
		console.log('mid');
	} else if (appData.moneyForDay > 200) {
		console.log('max');
	} else {
		console.log('arror');
	}
}

detectLevel();

//сбережения и %
function scheckSav() {
	if (appData.saving == true) {
		let save = prompt('how', '');
			procent = prompt('%', '');

		appData.monthIn = save/100/12*procent;
		alert('доход ' + appData.monthIn);
	}
}

scheckSav();


//определения необязательных расходов
function chooseOptExpenses() {
	for (let i = 1; i < 4; i++ ) {
		let a = prompt('Статья необязательных расходов?', '');
		appData.optionalExpenses[i] = a;
	}
};