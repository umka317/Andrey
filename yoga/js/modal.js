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