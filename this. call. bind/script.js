
let age = document.getElementById('age'),
	forFunc = {
		value: age.value
	};

function showUser(surname, name) {
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

// showUser.call(forFunc, 'Andrey', 'Pogorelchenco');

let one = showUser.bind(forFunc);
one('Andrey', 'Pogorelchenco');
