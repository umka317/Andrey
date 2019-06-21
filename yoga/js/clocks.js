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