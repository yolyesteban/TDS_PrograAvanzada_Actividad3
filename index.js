let form_fecha = document.getElementById('form-fecha');
let form_fecha_hoy = document.getElementById('form-fecha-hoy');

let fecha_city_1 = document.getElementById('fecha-city-1');
let fecha_1 = document.getElementById('fecha-1');
let temperatura_1 = document.getElementById('temperatura-1');
let clima_1 = document.getElementById('clima-1');
let img_clima_1 = document.getElementById('img-clima-1');
img_clima_1.style.visibility = 'hidden';

let fecha_city_2 = document.getElementById('fecha-city-2');
let fecha_2 = document.getElementById('fecha-2');
let temperatura_2 = document.getElementById('temperatura-2');
let clima_2 = document.getElementById('clima-2');
let img_clima_2 = document.getElementById('img-clima-2');
img_clima_2.style.visibility = 'hidden';

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
        fecha_city_2.innerText ='';
        fecha_2.innerText = '';
        temperatura_2.innerText = '';
        clima_2.innerText = '';
        img_clima_2.src = '';
        img_clima_2.style.visibility = 'hidden';

        fecha_city_1.innerText = 'Guatemala';
        fecha_1.innerText = fecha_string.toDateString();
        temperatura_1.innerText = temp + ' °C';
        clima_1.innerText = clim;
        img_clima_1.src = clima_img;
        img_clima_1.style.visibility = 'visible';
    }
});

form_fecha_hoy.addEventListener('submit', function (evento) {
    evento.preventDefault();

    let temperatura = getRandomNumber(5, 30);
    let clima = getClima(getRandomNumber(1, 4));
    let climaimg = getClimaImg(clima);
    let tiempo = Math.floor((Math.random()) * 2000);
    setTimeout(datosHoy, tiempo, temperatura, clima, climaimg);

    function datosHoy(temp, clim, clim_img) {
        let fecha_hoy = new Date();
        fecha_city_1.innerText = '';
        fecha_1.innerText = '';
        temperatura_1.innerText = '';
        clima_1.innerText = '';
        img_clima_1.src = '';
        img_clima_1.style.visibility = 'hidden';

        fecha_city_2.innerText = 'Guatemala';
        fecha_2.innerText = fecha_hoy.toDateString();
        temperatura_2.innerText =  temp + ' °C';
        clima_2.innerText = clim;
        img_clima_2.src = clim_img;
        img_clima_2.style.visibility = 'visible';
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
            img_source = "https://img.icons8.com/external-dreamcreateicons-outline-color-dreamcreateicons/452/external-rain-weather-dreamcreateicons-outline-color-dreamcreateicons-3.png" ;
            break;
        default:
            break;
    }
    return img_source;
}