crearEvento(window,"load",iniciar);

function iniciar(){
    miXHR = new objetoXHR();
    // Enviamos datos por POST
    cargarAsync("nombre=Teresa&apellidos=Blanco Ferreiro");
}

function cargarAsync(parametros){
    if (miXHR){
        document.getElementById("indicador").innerHTML="<img src='ajax-loader.gif' alt='Cargando...'/>";
        
        // POST a procesar.php
        miXHR.open('POST', "procesar.php", true); 
        miXHR.onreadystatechange = estadoPeticion;
        
        // Cabecera OBLIGATORIA para POST
        miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        
        miXHR.send(parametros);
    }
}

function estadoPeticion(){
    if ( this.readyState==4 && this.status == 200 ){
        document.getElementById("indicador").innerHTML="";
        textoDIV(document.getElementById("resultados"), this.responseText);
    }
}