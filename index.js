let form_fecha = document.getElementById('form-fecha');
let form_hoy = document.getElementById('form-hoy');

let fecha_city = document.getElementById('fecha-city');
let fecha_r = document.getElementById('fecha-r');
let temperatura_r = document.getElementById('temperatura-r');
let clima_r = document.getElementById('clima-r');
let img_clima_r = document.getElementById('img-clima-r');
img_clima_r.style.visibility = 'hidden';

let today_city = document.getElementById('today-city');
let fecha_h = document.getElementById('fecha-h');
let temperatura_h = document.getElementById('temperatura-h');
let clima_h = document.getElementById('clima-h');
let img_clima_h = document.getElementById('img-clima-h');
img_clima_h.style.visibility = 'hidden';

form_fecha.addEventListener('submit', function (evento) {
    evento.preventDefault();

    let temperatura = getRandomNumber(5, 30);
    let clima = getClima(getRandomNumber(1, 4));
    let climaimg = getClimaImg(clima);
    let tiempo = Math.floor((Math.random()) * 2000);
    let fecha_seleccionada = document.getElementById('fecha').value;

    setTimeout(datosFecha, tiempo, temperatura, clima, fecha_seleccionada, climaimg);

    function datosFecha(temp, clim, fecha, clima_img) {
        let fecha_string = new Date(fecha);
        today_city.innerText ='';
        fecha_h.innerText = '';
        temperatura_h.innerText = '';
        clima_h.innerText = '';
        img_clima_h.src = '';
        img_clima_h.style.visibility = 'hidden';

        fecha_city.innerText = 'Guatemala';
        fecha_r.innerText = fecha_string.toDateString();
        temperatura_r.innerText = 'Temperatura: ' + temp + ' °C';
        clima_r.innerText = 'Clima: ' + clim;
        img_clima_r.src = clima_img;
        img_clima_r.style.visibility = 'visible';
    }

});

form_hoy.addEventListener('submit', function (evento) {
    evento.preventDefault();

    let temperatura = getRandomNumber(5, 30);
    let clima = getClima(getRandomNumber(1, 4));
    let climaimg = getClimaImg(clima);
    let tiempo = Math.floor((Math.random()) * 2000);
    setTimeout(datosHoy, tiempo, temperatura, clima, climaimg);

    function datosHoy(temp, clim, clim_img) {
        let fecha_hoy = new Date();
        fecha_city.innerText = '';
        fecha_r.innerText = '';
        temperatura_r.innerText = '';
        clima_r.innerText = '';
        img_clima_r.src = '';
        img_clima_r.style.visibility = 'hidden';

        today_city.innerText = 'Guatemala';
        fecha_h.innerText = fecha_hoy.toDateString();
        temperatura_h.innerText = 'Temperatura: ' + temp + ' °C';
        clima_h.innerText = 'Clima: ' + clim;
        img_clima_h.src = clim_img;
        img_clima_h.style.visibility = 'visible';
    }
});

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getClima(value) {
    let clima = "";
    switch (value) {
        case 1:
            clima = "Despejado";
            break;
        case 2:
            clima = "Nublado";
            break;
        case 3:
            clima = "Lluvioso";
            break;
        default:
            break;
    }
    return clima;
}

function getClimaImg(valueImg) {
    let img_source = "";
    switch (valueImg) {
        case "Despejado":
            img_source = "https://img.icons8.com/doodle/192/000000/sun--v1.png";
            break;
        case "Nublado":
            img_source = "https://img.icons8.com/doodle/96/000000/partly-cloudy-day--v1.png";
            break;
        case "Lluvioso":
            // img_source = "https://img.icons8.com/external-smashingstocks-circular-smashing-stocks/65/000000/external-rainy-day-weather-smashingstocks-circular-smashing-stocks.png";
            //img_source = "https://img.icons8.com/external-kosonicon-lineal-color-kosonicon/64/000000/external-rainy-weather-kosonicon-lineal-color-kosonicon.png";
            img_source = "https://img.icons8.com/external-dreamcreateicons-outline-color-dreamcreateicons/452/external-rain-weather-dreamcreateicons-outline-color-dreamcreateicons-3.png" ;
            break;
        default:
            break;
    }
    return img_source;
}