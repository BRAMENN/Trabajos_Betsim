let modal_es = '<p class="ganaste">Has ganado</p>'+
            '<div class="prueba">'+
            '<img src="static/imagenes/bycoin.png" id="img_bycoins">  <p id="num_aleator">0</p> </div>'+
            '<p class="texto_modal">Continua acumulando y canjea premios como PS4, XBOX, dinero en PayPal y mucho más!</p> </p>'+
            '<div class="prueb2"><button type="button" class="btn btn-danger animated flash" onclick="fuct_1()">Ver premios</button><button type="button" class="btn btn-warning" onclick="fuct_2()">Jugar ahora</button>';

let modal_en = '<p class="ganaste">You won</p>'+
    '<div class="prueba">'+
    '<img src="static/imagenes/bycoin.png" id="img_bycoins">  <p id="num_aleator">0</p> </div>'+
    '<p class="texto_modal">Continue accumulating and redeem prizes like PS4, Xbox, PayPal money and many more!</p> </p>'+
    '<div class="prueb2"><button type="button" class="btn btn-danger animated flash" onclick="fuct_1()">See prizes</button><button type="button" class="btn btn-warning" onclick="fuct_2()">Play Now!</button>';

let score = 0;

function generar_num(num) {
	console.log(num);
	document.getElementById('num_aleator').innerHTML= num;
 }


function fuct_1() {
	window.location="https://betsimprizes.com";
}

function fuct_2() {
	window.location="https://app.betsim.net/es/play-win";
}

function fuct_3() {
	window.location="https://betsim.net";
}

    
function changeLanguaje_to_Spanish(){
    
    document.getElementById('language').innerHTML='es';
    document.getElementById('contenedor').innerHTML=modal_es;

    generar_num(score);
    
}

function changeLanguaje_to_English(){
    document.getElementById('language').innerHTML='en';
    document.getElementById('contenedor').innerHTML=modal_en;

    generar_num(score);
}



window.onload = function () {
   
   var ln = navigator.language || navigator.userLanguage;
   let idioma = ln.split("-");
   console.log(idioma );
   if (idioma[0] == 'en') {
     document.getElementById('language').innerHTML='en'
     document.getElementById('contenedor').innerHTML=modal_en;

   } 
   else if (idioma[0] == 'es') {
     document.getElementById('language').innerHTML='es'
     document.getElementById('contenedor').innerHTML=modal_es;
   }
   else{
     console.log("desconocido", ln);
   }
}



window.addEventListener( "message", function (e) {
            //alert(e.data);
            if (e.data != "") {
              let modal = document.querySelectorAll(".modal")[0];
              let modalC = document.querySelectorAll(".modal-container")[0];

              let box = document.querySelectorAll(".box")[0];
              box.style["pointer-events"] = "none";
              score = e.data;
              generar_num(score);
              modalC.style.opacity = "1";
              modalC.style.visibility = "visible";
              modal.classList.toggle("modal-close");

            }
            


}, false);




