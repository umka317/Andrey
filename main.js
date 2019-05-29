let money, time;

function start(argument) {
	money = +prompt('Ваш бюджет на месяц?');
	time = prompt('Введите дату в формате YYYY-MM-DD');

//проверка на пустую строку, не число, отмену
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
	saving: true,
	shooseExpenses: function() {
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
	},
	//Дневной бюджет
	detectDayBudget: function() {
		appData.moneyForDay = +(appData.money/30).toFixed();
		alert(appData.moneyForDay);
	},
	// уровень достатка
	detectLevel: function() {
		if (appData.moneyForDay < 100) {
			console.log('min');
		} else if (appData.moneyForDay > 100 && appData.moneyForDay < 200) {
			console.log('mid');
		} else if (appData.moneyForDay > 200) {
			console.log('max');
		} else {
			console.log('arror');
		}
	},
	//сбережения и %
	scheckSave: function() {
		if (appData.saving == true) {
		let save = prompt('how', '');
			procent = prompt('%', '');

		appData.monthIn = save/100/12*procent;
		alert('доход ' + appData.monthIn);
		}
	},
	//определения необязательных расходов
	chooseOptExpenses: function() {
		for (let i = 1; i < 4; i++ ) {
		let a = prompt('Статья необязательных расходов?', '');
		appData.optionalExpenses[i] = a;
		}
	},
	//дополнительные доходы
	chooseInCome: function() {
		let items = prompt('что принесет доп доход (введите через запятую)', '');
//(!!items && items.match(/[0-9]/)) || !items - Ромына проверка
		while (!isNaN(items) || items == '' || items == null) {
			items = prompt('что принесет доп доход (введите через запятую)', '');
		}
		appData.incom = items.split(', ');
		appData.incom.push(prompt('mb you forgot somethin?', ''));
		appData.incom.sort();

		// alert('Способы доп. заработка: \n -' + appData.incom.join('\n- '))
		let huy = 0;
		alert(
        'Способы доп. заработка: ' +
        appData.incom
            .map(function (item) {
            	huy++;
                return '\n' + huy + '. ' + item;
            })
            .join('\n')
    	)
	}
};

console.log('Наша программа включает в себя данные:');
for (let key in appData) {
	console.log(key);
}
