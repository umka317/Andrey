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