let form_fecha = document.getElementById('form-fecha');
        let form_hoy = document.getElementById('form-hoy');

                
        let fecha_r = document.getElementById('fecha-r');
        let temperatura_r = document.getElementById('temperatura-r');
        let clima_r = document.getElementById('clima-r');
        let img_clima_r = document.getElementById('img-clima-r');
        img_clima_r.style.visibility = 'hidden';

        let fecha_h = document.getElementById('fecha-h');
        let temperatura_h = document.getElementById('temperatura-h');
        let clima_h = document.getElementById('clima-h');
        let img_clima_h = document.getElementById('img-clima-h');
        img_clima_h.style.visibility = 'hidden';

        form_fecha.addEventListener('submit', function(evento){
            evento.preventDefault();   

            let temperatura = getRandomNumber(5,30);
            let clima = getClima(getRandomNumber(1,3));
            let tiempo = Math.floor((Math.random()) * 2000);
            let fecha_seleccionada = document.getElementById('fecha').value;
            
            setTimeout(datosFecha, tiempo, temperatura, clima, fecha_seleccionada);        

            function datosFecha(temp, clim, fecha){
                fecha_h.innerText = '';
                temperatura_h.innerText = '';
                clima_h.innerText = '';
                img_clima_h.src = '';
                img_clima_h.style.visibility = 'hidden';

                fecha_r.innerText = 'Los datos del clima y de la temperatura de la fecha ' + fecha;
                temperatura_r.innerText = 'Temperatura: ' + temp + ' celcius';
                clima_r.innerText = 'Clima: ' + clim;
                img_clima_r.src = 'img/'+clim+'.jpg';
                img_clima_r.style.visibility = 'visible';
            }

        });

        form_hoy.addEventListener('submit', function(evento){
            evento.preventDefault();            

            let temperatura = getRandomNumber(5,30);
            let clima = getClima(getRandomNumber(1,3));
            let tiempo = Math.floor((Math.random()) * 2000);
            setTimeout(datosHoy, tiempo, temperatura, clima); 

            function datosHoy(temp, clim){
                fecha_r.innerText = '';
                temperatura_r.innerText = '';
                clima_r.innerText = '';
                img_clima_r.src = '';
                img_clima_r.style.visibility = 'hidden';

                fecha_h.innerText = 'Los datos del clima y de la temperatura del dia de hoy';
                temperatura_h.innerText = 'Temperatura: ' + temp + ' celcius';
                clima_h.innerText = 'Clima: ' + clim;
                img_clima_h.src = 'img/'+clim+'.jpg';
                img_clima_h.style.visibility = 'visible';
            }
        });

        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        }

        function getClima(value){
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