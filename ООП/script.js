class User {
	constructor(name, id) {
		this.name = name;
		this.id = id;
		this.human = true;
	}
	hello() {
		console.log('hello ' + this.name);
	}
	exit() {
	console.log('User ' + this.name + ' exited');
	}
}

let Ivan = new User('Ivan', 12);
let Alex = new User('Alex', 11);

console.log(Ivan);
console.log(Alex);

Alex.exit();
'use strict';
//1) просто вызов функции - window/undefined
// function showThis(a, b) {
// 	console.log(this);
// 	function sum() {
// 		console.log(this);
// 		return a + b;
// 	}
// 	console.log(sum());
// }

// showThis(4, 5);
// showThis(5, 5);

// 2) Метод обьекта - this = обьект
// let obj = {
// 	a: 20,
// 	b: 15,
// 	sum: function() {
// 		console.log(this);
// 	}
// };
// obj.sum();

// let user = {
// 	name: 'John'
// };

// function sayName(surname) {
// 	console.log(this);
// 	console.log(this.name + surname);
// }

// console.log(sayName.call(user, ' Smith'));
// console.log(sayName.apply(user, [' Snow' ]));

// function count(number) {
// 	return this * number;
// }

// let double = count.bind(2);
// console.log(double(3));
// console.log(double(10));

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
	console.log(this);
	this.style.backgroundColor = 'red';
})

