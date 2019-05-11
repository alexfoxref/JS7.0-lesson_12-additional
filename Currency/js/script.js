
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

function getData() {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();

        request.open('GET', 'js/current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();

        request.addEventListener('load', function() {
            if (request.status == 200) {
                resolve(request.response);
            } else {
                reject('Что-то пошло не так!');
            }
        });
    })  
}



    getData()
        .then((data) => {
            inputRub.addEventListener('input', () => {
                inputUsd.value = inputRub.value / JSON.parse(data).usd;
            })
        })
        .catch((message) => {
            console.log(message);
        })


