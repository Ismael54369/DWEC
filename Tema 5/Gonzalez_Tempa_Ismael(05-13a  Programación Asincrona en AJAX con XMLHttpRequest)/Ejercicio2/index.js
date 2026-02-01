////////////////////////////////////////////////////////////////////
// Cuando el documento esté cargado llamamos a la función iniciar().
////////////////////////////////////////////////////////////////////
crearEvento(window, "load", iniciar);

var miXHR; // Variable global para el objeto AJAX

/////////////////////////////////////////////////////////
function iniciar(){
    // Creamos un objeto XHR.
    miXHR = new objetoXHR();
    
    // Cargamos el fichero fecha.php de forma asíncrona.
    if(miXHR) {
        cargarAsync("fecha.php");
    }
}

/////////////////////////////////////////////////////////
// Función cargarAsync: carga el contenido de la url
// usando una petición AJAX de forma ASINCRONA.
/////////////////////////////////////////////////////////
function cargarAsync(url){
    if (miXHR){
        // Activamos el indicador AJAX.
        // IMPORTANTE: Asegúrate de tener una imagen llamada 'AJAX-loader.gif' en la carpeta
        document.getElementById("indicador").innerHTML="<img src='AJAX-loader.gif' alt='Cargando...' />";
        
        // Si existe el objeto miXHR
        miXHR.open('GET', url, true); // Abrimos la url, true=ASINCRONA
        
        // En cada cambio de estado(readyState) se llamará a la función estadoPeticion
        miXHR.onreadystatechange = estadoPeticion;
        
        // Hacemos la petición al servidor. Como parámetro: null ya que los datos van por GET
        miXHR.send(null);
    }
}

/////////////////////////////////////////////////////////
// Función estadoPeticion: será llamada en cada cambio de estado de la petición.
/////////////////////////////////////////////////////////
function estadoPeticion(){
    // Haremos la comprobación en este orden ya que primero tiene que llegar readyState==4
    // y por último se comprueba el status devuelto por el servidor==200.
    if ( this.readyState==4 && this.status == 200 ){
        // Desactivamos el indicador AJAX.
        document.getElementById("indicador").innerHTML="";
        
        // Metemos en el contenedor resultados las respuestas de la petición AJAX.
        textoDIV(document.getElementById("resultados"), this.responseText);
    }
}