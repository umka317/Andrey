// function applyForVisa( documents ) {
//   let promise = new Promise( function( resolve, reject) {
//       setTimeout( function() {
//         Math.random() > .5 ? resolve( {} ) : reject( 'в визе отказано' );
//       }, 2000)
//   });
//   return promise;
// }

// function getVisa( visa ) {
//   console.log( 'Виза получена' );
//   return new Promise( function( resolve, reject ) {
//     setTimeout( () => resolve(visa), 2000);
//   });
// }

// function bookHotel(visa) {
//   console.log( 'покупаем билеты' );
//   return new Promise.resolve(visa);
// }

// function buyTickets( booking ) {
//   console.log( 'бронируем отель' );
//   console.log( 'Бронь', booking);
// }


// applyForVisa( {} )
//   .then( getVisa )
//   .then( bookHotel )
//   .then( buyTickets )
//   .catch ( error => console.error(error));



// function go(num) {
//   return new Promise(function(resolve, reject) {
//     let delay = Math.ceil(Math.random() * 3000);
//     console.log(num, delay);
//     setTimeout(() => {
//       if (delay > 2000)
//         reject(num);
//       else
//         resolve(num);
//     }, delay);
//   });
// }

// let p1 = go(1);
// let p2 = go(2);
// let p3 = go(3);

// // Promise.all([p1, p2, p3])         //выдает все промисы
// //   .then(value => console.log(value));

// Promise.race([p1, p2, p3])         //выдает первый промис, кот сработл
//   .then(value => console.log(value));

