//события и их обработки

let btn = document.querySelectorAll('button'),
	wrap = document.querySelector('.wrapper'),
	link = document.querySelector('a');


// btn[1].onclick = function() {
// 	alert('gg');
// }

btn[1].addEventListener('click', function(event) {
	let one = event.target;
	one.style.color = 'red';
})

// wrap.addEventListener('click', function(event) {
// 	console.log('it was: ' + event.type + ' on ' + event.target);
// })

link.addEventListener('click', function(event) {
	event.preventDefault();
	console.log('it was: ' + event.type + ' on ' + event.target);
});

// btn.forEach(function(item) {
// 	item.addEventListener('mouseleave', function() {
// 		console.log('gg');
// 	})
// })