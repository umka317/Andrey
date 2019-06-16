// let inputRub = document.getElementById('rub'),
//     inputUsd = document.getElementById('usd');


// function convert() {
//     inputRub.addEventListener('input', () => {

//         let request = new XMLHttpRequest();
//         // request.open(method, url, async, login, pass);
//         request.open('GET', 'current.json');
//         request.setRequestHeader('Content-type', 'application/json; charser=utf-8');
//         request.send();

//         //status
//         //statusText
//         //responseText / response
//         //readyState

//         request.addEventListener('readystatechange', function() {
//             return new Promise( ( resolve, reject ) => {
//                 if (request.readyState === 4 && request.status === 200) {
//                     resolve(
//                         let data = JSON.parse(request.response);
//                         inputUsd.value = inputRub.value / data.usd;
//                     )
//                 } else {
//                     reject( inputUsd.value = 'bed idea'; )
//                 }
//             })
//         });
//     });
// }

let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {

    function catchData() {

        return new Promise(function(resolve, reject){
            let request = new XMLHttpRequest();
            request.open("POST", "current.json");

            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();

            request.onload = function() {
                if(request.readyState === 4) {
                        if(request.status == 200) {
                            resolve(this.response)
                        }
                        else {
                            reject();

                        }
                }
            }
        });
    };

    catchData()
    .then(response => {
        console.log(response);
        let data = JSON.parse(response);
        inputUsd.value = inputRub.value / data.usd;
    })
    .then(() => console.log(5000))
    .catch(() => inputUsd.value = "Что-то пошло не так");
});