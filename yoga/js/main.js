window.addEventListener('DOMContentLoaded', function() {
	'use strict';

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

//часы

let deadline = 'june, 08 2019';

	function getTimeRemaining(endtime) {	//находим разность между сегоднешней датой и задуманной, создаем обьект со значениями
		let t = Date.parse(endtime) - Date.parse(new Date());		//если отрицательная разность выводим 00:00:00
		if ( t < 0 ) {
			return {
				'total': 0,
				'hours': '00',
				'minutes': '00',
				'seconds': '00'
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
});
