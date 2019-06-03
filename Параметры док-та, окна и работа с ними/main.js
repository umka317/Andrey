let box = document.querySelector('.box'),
	btn = document.querySelector('button'),
	width =  box.scrollWidth,
	heigth = box.scrollHeight;

console.log(width);		//длина обьекта с учетом паддингов
console.log(heigth);	//ширина обьекта с учетом паддингов
console.log(box.getBoundingClientRect()); //выводит 4 координаты: top, botton, left, right
console.log(document.documentElement.clientWidth); //ширина браузерного окна
console.log(document.documentElement.clientHeight); //длина б о
console.log(document.documentElement.scrollTop); //преход к вершине документа

btn.addEventListener('click', function() {
	// box.style.height = box.scrollHeight + 'px'; //делает контент на всю страницу
	box.scrollTop = 0;		//возвращает скролл в верх
});

scrollBy(0, 200);	//перемещение по Х и У относительно нашего положения
scrollTo(0, 200);   //перемещение по Х и У