// localStorage.setItem('number', 1);    //добавить

// console.log(localStorage.getItem('number'));

// localStorage.removeItem('number');  //удалить свойство

// localStorage.clear();  //удалить все

window.addEventListener('DOMContentLoaded', function() {

  let checkbox = document.getElementById('rememberMe'),
      change = document.getElementById('change'),
      form = document.getElementsByTagName('form')[0],
      container = document.querySelector('.container');

  if(localStorage.getItem('isChecked') === 'true') {
    checkbox.checked = true;
  };

  if(localStorage.getItem('bg') === 'changed') {
    container.style.backgroundColor = '#FF4766';
  };

  checkbox.addEventListener('click', function() {
    localStorage.setItem('isChecked', true);
  });

  change.addEventListener('click', function(){
    localStorage.setItem('bg', 'changed');
    container.style.backgroundColor = '#FF4766';
  });

  // let persone = {
  //   name: 'Alex',
  //   age: 25,
  //   tech: ['mobile', 'notebook']
  // }

  // let serializedPersone = JSON.stringify(persone);
  // console.log(serializedPersone);
  // localStorage.setItem('Andrey', serializedPersone);

  // console.log(JSON.parse(localStorage.getItem('Andrey')));
})