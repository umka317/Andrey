// let timerId = setTimeout(seyHello, 3000);
// 	clearTimeout(timerId);

// let timerId = setInterval(seyHello, 3000);
// 	clearTimeout(timerId);

// function seyHello () {
// 	console.log( 'Hello' );
// }

// let timerId = setTimeout(function log() {
// 	console.log('Hello');
// 	setTimeout(log, 2000);
// });

// let btn = document.getElementsByTagName('button')[0];
// 	elem = document.querySelector('.inBox');

// 	console.log(elem);

// function myAnimation() {
// 	let  pos = 0;

// 	let id = setInterval(frame, 10);
// 	function frame() {
// 		if (pos == 300) {
// 			clearInterval(id);
// 		} else {
// 			pos++;
// 			elem.style.top = pos + 'px';
// 			elem.style.left = pos + 'px';
// 		}
// 	}
// };

// btn.addEventListener('click', myAnimation);

// let btnBlock = document.querySelector('.grey'),
// 	btns = document.querySelector('.yellow');

// btnBlock.addEventListener('click', function(e) {
// 	if (e.target && e.target.classList.contains('first')) {
// 		console.log('hello');
// 	}
// })

// btnBlock.addEventListener('click', function(e) {
// 	if (e.target && e.target.matches('button.first')) {
// 		console.log('hello');
// 	}
// })
// let json = '{"id":2}'

// try {
// 	let user = JSON.parse(json);
// 	console.log(user);

// 	if (!user.name) {
// 		throw new Error("чтоо вы делаете")
// 	}
// 	// console.log('get start');
// 	// console.log(a);
// 	// console.log('well dan');
// } catch(error) {
// 	console.log(error.name);
// 	console.log(error.message);
// 	console.log(error.stack);

// 	console.log(`мы получили ошибку: ${error.name}`);
// } finally {
// 	console.log('gg');
// }


// методы создания модулей

// 1

// function User(name, age) {
// 	this.name = name;
// 	// this.age = age;
// 	let userAge = age;
// 	this.say = function() {
// 		console.log(`Имя пользователя ${this.name}, возраст: ${userAge}`);
// 	}

// 	this.getAge = function() {
// 		return userAge;
// 	}

// 	this.setAge = function(age) {
// 		if (typeof age === 'number' && age > 0 && age < 110) {
// 			userAge = age;
// 		} else {
// 			console.log('не допустимое значение');
// 		}
// 	}
// }

// 	let ivan = new User('Ivan', 25);
// 	console.log(ivan.name);
// 	console.log(ivan.age);
// 	console.log(ivan.getAge());


// 	ivan.setAge(30);

// 	console.log(ivan.getAge());

// ivan.say();

// let number = 1;
// (function() {
// 	let number = 2;
// 	console.log(number);

// 	return console.log(number +3);
// }())

// console.log(number);


// 2. исспользование обьектного интерфейса

// let user = (function() {
// 	let privat = function() {
// 		console.log('I am privet');
// 	}
// 	return {
// 		sayHello : function() {
// 			console.log('hello');
// 		}
// 	}
// }())

// console.log(user);
// console.log(user.sayHello());

// 3.

// let user = (function() {
// 	let privat = function() {
// 		console.log('I am privat');
// 	}
// 	let sayHello = function() {
// 		console.log('Hello')
// 	}
// 	return {
// 		sayHello : sayHello
// 		}
// }())

// console.log(user.sayHello());

let myModule = require('./script');

let module = new myModule();

console.log(module.hello());
console.log(module.goodbye());