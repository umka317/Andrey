
let endTime = 'june, 08 2019';

function distance(t) {
	let	distance = +new Date(t) - new Date().getTime(),
		days = Math.floor(distance / (1000 * 60 * 60 * 24)),
		hours = Math.floor(distance % (1000 * 60 * 60 * 24)/(1000 * 60 * 60)),
		minutes = Math.floor(distance % (1000 * 60 * 60)/(1000 * 60)),
		seconds = Math.floor(distance % (1000 * 60)/(1000));
	return {
		'total': distance,
		'days': days,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
};

console.log(distance(endTime));
	
function clock(t) {
		daysOnPage = document.querySelector('.days'),
		hoursOnPage = document.querySelector('.hours'),
		minutesOnPage = document.querySelector('.minutes'),
		secondsOnPage = document.querySelector('.seconds'),
		timeInterval = setInterval(updateClock, 1000);

	function updateClock() {
		let time = distance(t);
		daysOnPage.textContent = time.days;
		hoursOnPage.textContent = time.hours;
		minutesOnPage.textContent = time.minutes;
		secondsOnPage.textContent = time.seconds;

		if( time.days < 10 ) {
			daysOnPage.textContent = '0' + time.days;
		}
		if( time.hours < 10 ) {
			hoursOnPage.textContent = '0' + time.hours;
		}
		if( time.minutes < 10 ) {
			minutesOnPage.textContent = '0' + time.minutes;
		}
		if( time.seconds < 10 ) {
			secondsOnPage.textContent = '0' + time.seconds;
		}

		if (time.total <= 0) {
			clearInterval(timeInterval);
			daysOnPage.textContent = '00';
			hoursOnPage.textContent = '00';
			minutesOnPage.textContent = '00';
			secondsOnPage.textContent = '00';
		}
	}
}

clock(endTime);