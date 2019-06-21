/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/calc.js":
/*!********************!*\
  !*** ./js/calc.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

//калькулятор

let persons = document.querySelectorAll('.counter-block-input')[0],
    restDays = document.querySelectorAll('.counter-block-input')[1],
    place = document.getElementById('select'),
    totalValue = document.getElementById('total'),
    personsSum = 0,
    daysSum = 0,
    total = 0;

totalValue.innerHTML = 0;

persons.addEventListener('change', function() {
  personsSum = +this.value;
  total = (daysSum + personsSum) * 4000;

  if (restDays.value === '' || persons.value === '') {
    totalValue.innerHTML = 0;
  } else {
    totalValue.innerHTML = total;
  }
})

restDays.addEventListener('change', function() {
  daysSum = +this.value;
  total = (daysSum + personsSum) * 4000;

  if (restDays.value === '' || persons.value === '') {
    totalValue.innerHTML = 0;
  } else {
    totalValue.innerHTML = total;
  }
})

place.addEventListener('change', function() {
  if (restDays === '' || persons.value === '') {
    totalValue.innerHTML = o;
  } else {
    let a = total;
    totalValue.innerHTML = a * this.options[this.selectedIndex].value;
  }
})

module.exports = calc;

/***/ }),

/***/ "./js/clocks.js":
/*!**********************!*\
  !*** ./js/clocks.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

//часы

let deadline = 'june, 08 2019';

	function getTimeRemaining(endtime) {	//находим разность между сегоднешней датой и задуманной, создаем обьект со значениями
		let t = Date.parse(endtime) - Date.parse(new Date());		//если отрицательная разность выводим 00:00:00
		if ( t < 0 ) {
			return {
				'total': 0,
				'hours': '0',
				'minutes': '0',
				'seconds': '0'
			};
		} else {
			let	seconds = Math.floor((t/1000) % 60),
				minutes = Math.floor((t/1000/60) % 60),
				hours = Math.floor((t/(1000*60*60)));
				// hours = Math.floor((t/(1000*60*60) % 24));   если бы нужны были дни
				// days = Math.floor((t/(1000*60*60*24)));

			return {
				'total': t,
				'hours': hours,
				'minutes': minutes,
				'seconds': seconds
			};
		}
	}

	function setClock(id, endtime) {		//берем переменные со строницы и приравниваем с обьектом getTimeRemaining()
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds'),
			timeInterval = setInterval(updateClock, 1000); //интервал смены даты, 1сек

			function updateClock () {									//отображаем на странице часы
				let t = getTimeRemaining(endtime);
				if ( t.seconds < 10 ) {
					t.seconds = '0' + t.seconds;
				};
				if ( t.minutes < 10 ) {
					t.minutes = '0' + t.minutes;
				};
				if ( t.hours < 10 ) {
					t.hours = '0' + t.hours;
				};
					hours.textContent = t.hours;
					minutes.textContent = t.minutes;
					seconds.textContent = t.seconds;

				if ( t.total <= 0 ) {
					clearInterval(timeInterval);
				}
			}
		}


  setClock('timer', deadline);

  module.exports = clocks;

/***/ }),

/***/ "./js/form.js":
/*!********************!*\
  !*** ./js/form.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

  //form
  let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'что-то пошло не так...'
  };

  let form = document.querySelector('.main-form'),
      input = form.getElementsByTagName('input'),
      statusMessage = document.createElement('div'),
      formMail = document.querySelector('#form'),
      inputMail = document.getElementsByName('email'),
      inputTel = document.getElementsByName('tel');

      console.log(inputMail);

      statusMessage.classList.add('status');
      form.addEventListener('submit', function(e) {
        event.preventDefault();                         //отменяет перезагрузку страницы
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'http://yoga.loc/server.php');
        // request.setRequestHeader ('Content-Type', 'application/x-www-form-urlencoded');    //обычный формат передачи данных
        request.setRequestHeader('Content-type', 'application/json; charser=utf-8');

        let formData = new FormData(form);   //получаем, что ответил пользователь в нашей форме

        let obj = {};                           //создаем обьект, в который поместим ответ пользователя
        formData.forEach( function( value, key ) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);         //переводим в джейсон

        request.send(json);

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if( request.readyState === 4 && request.status == 200 ) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for ( let i = 0; i < input.length; i++ ) {
            input[i].value = '';
        }
      });

      statusMessage.classList.add('status');
      formMail.addEventListener('submit', function(e) {
        event.preventDefault();                         //отменяет перезагрузку страници
        formMail.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'http://yoga.loc/server.php');
        // request.setRequestHeader ('Content-Type', 'application/x-www-form-urlencoded');    //обычный формат передачи данных
        request.setRequestHeader('Content-type', 'application/json; charser=utf-8');

        let formData = new FormData(formMail);   //получаем, что ответил пользователь в нашей форме

        let obj = {};                           //создаем обьект, в который поместим ответ пользователя
        formData.forEach( function( value, key ) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);         //переводим в джейсон

        request.send(json);

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if( request.readyState === 4 && request.status == 200 ) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for ( let i = 0; i < 1; i++ ) {
            inputMail[i].value = '';
            inputTel[i].value = '';
        }
      });

module.exports = form;

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function() {
  'use strict';

  window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let calc = __webpack_require__(/*! ./calc.js */ "./js/calc.js"),
        form = __webpack_require__(/*! ./form */ "./js/form.js"),
        slider = __webpack_require__(/*! ./slider */ "./js/slider.js"),
        tabs = __webpack_require__(/*! ./tabs */ "./js/tabs.js"),
        timer = __webpack_require__(/*! ./clocks */ "./js/clocks.js"),
        modal = __webpack_require__(/*! ./modal */ "./js/modal.js");

    calc();
    form();
    slider();
    tabs();
    timer();
    modal();

  });

// // Табы
// 	let tab = document.querySelectorAll('.info-header-tab'),			//класс с табами
// 		info = document.querySelector('.info-header'),				//весь блок табов
// 		tabContent = document.querySelectorAll('.info-tabcontent');		//контент табов

// 	function hideTabContent(a) {								//скрываем все статьи кроме 1й
// 		for (let i = a; i < tabContent.length; i++) {
// 			tabContent[i].classList.remove('show');				//удаляем класс элементов show(показать)
// 			tabContent[i].classList.add('hide');				//добавляем класс hide(скрыть)
// 		}
// 	};

// 	hideTabContent(1);

// 	function showTabContent (b) {								//добавляем таб на который кликнули
// 		if (tabContent[b].classList.contains('hide')) {
// 			tabContent[b].classList.remove('hide');
// 			tabContent[b].classList.add('show');
// 		}
// 	};

// 	info.addEventListener('click', function(e) {				//определяем элемент на который кликнули и статью, которую добавить надо
// 		let target = e.target;
// 		if (target && target.classList.contains('info-header-tab')) { //проверка, если таб на который кликнули имеет класс info-header-tab
// 			for(let i = 0; i < tab.length; i++) {
// 				if (target === tab[i]) {						//если индекс таба, на кот кликнули совпадает с индексом статьи
// 					hideTabContent(0);
// 					showTabContent(i);
// 					break;
// 				}
// 			}
// 		}
// 	})

// //часы

// let deadline = 'june, 08 2019';

// 	function getTimeRemaining(endtime) {	//находим разность между сегоднешней датой и задуманной, создаем обьект со значениями
// 		let t = Date.parse(endtime) - Date.parse(new Date());		//если отрицательная разность выводим 00:00:00
// 		if ( t < 0 ) {
// 			return {
// 				'total': 0,
// 				'hours': '0',
// 				'minutes': '0',
// 				'seconds': '0'
// 			};
// 		} else {
// 			let	seconds = Math.floor((t/1000) % 60),
// 				minutes = Math.floor((t/1000/60) % 60),
// 				hours = Math.floor((t/(1000*60*60)));
// 				// hours = Math.floor((t/(1000*60*60) % 24));   если бы нужны были дни
// 				// days = Math.floor((t/(1000*60*60*24)));

// 			return {
// 				'total': t,
// 				'hours': hours,
// 				'minutes': minutes,
// 				'seconds': seconds
// 			};
// 		}
// 	}

// 	function setClock(id, endtime) {		//берем переменные со строницы и приравниваем с обьектом getTimeRemaining()
// 		let timer = document.getElementById(id),
// 			hours = timer.querySelector('.hours'),
// 			minutes = timer.querySelector('.minutes'),
// 			seconds = timer.querySelector('.seconds'),
// 			timeInterval = setInterval(updateClock, 1000); //интервал смены даты, 1сек

// 			function updateClock () {									//отображаем на странице часы
// 				let t = getTimeRemaining(endtime);
// 				if ( t.seconds < 10 ) {
// 					t.seconds = '0' + t.seconds;
// 				};
// 				if ( t.minutes < 10 ) {
// 					t.minutes = '0' + t.minutes;
// 				};
// 				if ( t.hours < 10 ) {
// 					t.hours = '0' + t.hours;
// 				};
// 					hours.textContent = t.hours;
// 					minutes.textContent = t.minutes;
// 					seconds.textContent = t.seconds;

// 				if ( t.total <= 0 ) {
// 					clearInterval(timeInterval);
// 				}
// 			}
// 		}


// 	setClock('timer', deadline);

// 	//modal модальное окно

// 	let more = document.querySelector('.more'),     //получаем с html все необходимые обьекты: модальное окно, кнопку закрыть, 2 кнопки узнать больше
// 			overlay = document.querySelector('.overlay'),
// 			close = document.querySelector('.popup-close'),
// 	    moreBtn = document.querySelectorAll('.description-btn');


// 	moreBtn.forEach(function (item, i) {						//для каждой кнопки "узнать больше" в табе вешаем события
//     moreBtn[i].addEventListener('click', function () {
//       overlay.style.display = 'block';
//       this.classList.add('more-splash');
//       document.body.style.overflow = 'hidden';
//     });
//   });

// 	more.addEventListener('click', function() {				//под часами кнопка
//       overlay.style.display = 'block';
//       this.classList.add('more-splash');
//       document.body.style.overflow = 'hidden';
//   });

// 	close.addEventListener('click', function () {			//кнопка закрыть
//       overlay.style.display = 'none';
//       more.classList.remove('more-splash');
//       document.body.style.overflow = '';
//   })

//   //form
//   let message = {
//     loading: 'Загрузка...',
//     success: 'Спасибо! Скоро мы с вами свяжемся!',
//     failure: 'что-то пошло не так...'
//   };

//   let form = document.querySelector('.main-form'),
//       input = form.getElementsByTagName('input'),
//       statusMessage = document.createElement('div'),
//       formMail = document.querySelector('#form'),
//       inputMail = document.getElementsByName('email'),
//       inputTel = document.getElementsByName('tel');

//       console.log(inputMail);

//       statusMessage.classList.add('status');
//       form.addEventListener('submit', function(e) {
//         event.preventDefault();                         //отменяет перезагрузку страницы
//         form.appendChild(statusMessage);

//         let request = new XMLHttpRequest();
//         request.open('POST', 'http://yoga.loc/server.php');
//         // request.setRequestHeader ('Content-Type', 'application/x-www-form-urlencoded');    //обычный формат передачи данных
//         request.setRequestHeader('Content-type', 'application/json; charser=utf-8');

//         let formData = new FormData(form);   //получаем, что ответил пользователь в нашей форме

//         let obj = {};                           //создаем обьект, в который поместим ответ пользователя
//         formData.forEach( function( value, key ) {
//             obj[key] = value;
//         });
//         let json = JSON.stringify(obj);         //переводим в джейсон

//         request.send(json);

//         request.addEventListener('readystatechange', function() {
//             if (request.readyState < 4) {
//                 statusMessage.innerHTML = message.loading;
//             } else if( request.readyState === 4 && request.status == 200 ) {
//                 statusMessage.innerHTML = message.success;
//             } else {
//                 statusMessage.innerHTML = message.failure;
//             }
//         });

//         for ( let i = 0; i < input.length; i++ ) {
//             input[i].value = '';
//         }
//       });

//       statusMessage.classList.add('status');
//       formMail.addEventListener('submit', function(e) {
//         event.preventDefault();                         //отменяет перезагрузку страници
//         formMail.appendChild(statusMessage);

//         let request = new XMLHttpRequest();
//         request.open('POST', 'http://yoga.loc/server.php');
//         // request.setRequestHeader ('Content-Type', 'application/x-www-form-urlencoded');    //обычный формат передачи данных
//         request.setRequestHeader('Content-type', 'application/json; charser=utf-8');

//         let formData = new FormData(formMail);   //получаем, что ответил пользователь в нашей форме

//         let obj = {};                           //создаем обьект, в который поместим ответ пользователя
//         formData.forEach( function( value, key ) {
//             obj[key] = value;
//         });
//         let json = JSON.stringify(obj);         //переводим в джейсон

//         request.send(json);

//         request.addEventListener('readystatechange', function() {
//             if (request.readyState < 4) {
//                 statusMessage.innerHTML = message.loading;
//             } else if( request.readyState === 4 && request.status == 200 ) {
//                 statusMessage.innerHTML = message.success;
//             } else {
//                 statusMessage.innerHTML = message.failure;
//             }
//         });

//         for ( let i = 0; i < 1; i++ ) {
//             inputMail[i].value = '';
//             inputTel[i].value = '';
//         }
//       });

// //slider
// let slideIndex = 1,
// 		slides = document.querySelectorAll('.slider-item'),
// 		prev = document.querySelector('.prev'),
// 		next = document.querySelector('.next'),
// 		dotsWrap = document.querySelector('.slider-dots'),
//     dots = document.querySelectorAll('.dot');

// showSlides(slideIndex);


// function showSlides(n) {
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   slides.forEach((item) => item.style.display = 'none');
//   // for (let i = 0; i < slides.length; i++) {
//   // 	slides[i].style.display = 'none';
//   // }
//   dots.forEach((item) => item.classList.remove('dot-active'));

//   slides[slideIndex - 1].style.display = 'block';
//   dots[slideIndex - 1].classList.add('dot-active');
// }

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// };

// function currenSlide(n) {
//   showSlides(slideIndex = n);
// }

// prev.addEventListener('click', function() {
//   plusSlides(-1);
// });

// next.addEventListener('click', function() {
//   plusSlides(1);
// });

// dotsWrap.addEventListener('click', function(e) {
//   for (let i = 0; i < dots.length + 1; i++) {
//     if (e.target.classList.contains('dot') && e.target === dots[i - 1]) {
//       currenSlide(i);
//     }
//   }
// })


// //калькулятор

// let persons = document.querySelectorAll('.counter-block-input')[0],
//     restDays = document.querySelectorAll('.counter-block-input')[1],
//     place = document.getElementById('select'),
//     totalValue = document.getElementById('total'),
//     personsSum = 0,
//     daysSum = 0,
//     total = 0;

// totalValue.innerHTML = 0;

// persons.addEventListener('change', function() {
//   personsSum = +this.value;
//   total = (daysSum + personsSum) * 4000;

//   if (restDays.value === '' || persons.value === '') {
//     totalValue.innerHTML = 0;
//   } else {
//     totalValue.innerHTML = total;
//   }
// })

// restDays.addEventListener('change', function() {
//   daysSum = +this.value;
//   total = (daysSum + personsSum) * 4000;

//   if (restDays.value === '' || persons.value === '') {
//     totalValue.innerHTML = 0;
//   } else {
//     totalValue.innerHTML = total;
//   }
// })

// place.addEventListener('change', function() {
//   if (restDays === '' || persons.value === '') {
//     totalValue.innerHTML = o;
//   } else {
//     let a = total;
//     totalValue.innerHTML = a * this.options[this.selectedIndex].value;
//   }
// })

});



/***/ }),

/***/ "./js/modal.js":
/*!*********************!*\
  !*** ./js/modal.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

//modal модальное окно

let more = document.querySelector('.more'),     //получаем с html все необходимые обьекты: модальное окно, кнопку закрыть, 2 кнопки узнать больше
overlay = document.querySelector('.overlay'),
close = document.querySelector('.popup-close'),
moreBtn = document.querySelectorAll('.description-btn');


moreBtn.forEach(function (item, i) {						//для каждой кнопки "узнать больше" в табе вешаем события
moreBtn[i].addEventListener('click', function () {
overlay.style.display = 'block';
this.classList.add('more-splash');
document.body.style.overflow = 'hidden';
});
});

more.addEventListener('click', function() {				//под часами кнопка
overlay.style.display = 'block';
this.classList.add('more-splash');
document.body.style.overflow = 'hidden';
});

close.addEventListener('click', function () {			//кнопка закрыть
overlay.style.display = 'none';
more.classList.remove('more-splash');
document.body.style.overflow = '';
})

module.exports = modal;

/***/ }),

/***/ "./js/slider.js":
/*!**********************!*\
  !*** ./js/slider.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

//slider
let slideIndex = 1,
		slides = document.querySelectorAll('.slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotsWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot');

showSlides(slideIndex);


function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  slides.forEach((item) => item.style.display = 'none');
  // for (let i = 0; i < slides.length; i++) {
  // 	slides[i].style.display = 'none';
  // }
  dots.forEach((item) => item.classList.remove('dot-active'));

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].classList.add('dot-active');
}

function plusSlides(n) {
  showSlides(slideIndex += n);
};

function currenSlide(n) {
  showSlides(slideIndex = n);
}

prev.addEventListener('click', function() {
  plusSlides(-1);
});

next.addEventListener('click', function() {
  plusSlides(1);
});

dotsWrap.addEventListener('click', function(e) {
  for (let i = 0; i < dots.length + 1; i++) {
    if (e.target.classList.contains('dot') && e.target === dots[i - 1]) {
      currenSlide(i);
    }
  }
})

module.exports = slider;

/***/ }),

/***/ "./js/tabs.js":
/*!********************!*\
  !*** ./js/tabs.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

// Табы
let tab = document.querySelectorAll('.info-header-tab'),			//класс с табами
info = document.querySelector('.info-header'),				//весь блок табов
tabContent = document.querySelectorAll('.info-tabcontent');		//контент табов

function hideTabContent(a) {								//скрываем все статьи кроме 1й
for (let i = a; i < tabContent.length; i++) {
  tabContent[i].classList.remove('show');				//удаляем класс элементов show(показать)
  tabContent[i].classList.add('hide');				//добавляем класс hide(скрыть)
}
};

hideTabContent(1);

function showTabContent (b) {								//добавляем таб на который кликнули
if (tabContent[b].classList.contains('hide')) {
  tabContent[b].classList.remove('hide');
  tabContent[b].classList.add('show');
}
};

info.addEventListener('click', function(e) {				//определяем элемент на который кликнули и статью, которую добавить надо
let target = e.target;
if (target && target.classList.contains('info-header-tab')) { //проверка, если таб на который кликнули имеет класс info-header-tab
  for(let i = 0; i < tab.length; i++) {
    if (target === tab[i]) {						//если индекс таба, на кот кликнули совпадает с индексом статьи
      hideTabContent(0);
      showTabContent(i);
      break;
    }
  }
}
})

module.exports = tabs;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map