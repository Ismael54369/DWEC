// Ejercicio 1
$(document).ready(function () {
    // alert('el documento está preparado');
    
    // Inicializamos los eventos del Ejercicio 7 aquí
    ej7(); 
});

// Ejercicio 2 
function copiarEj2() {
    let msg = $('#id2-1').prop('innerHTML');
    $('#id2-2').append(msg + "<br>");
}

// Ejercicio 3: Copiar Ej3 L1 primero, segundo y ultimo
function ej3() {
    let primero = $('#id3-1 li').first().text();
    let segundo = $('#id3-1 li').eq(1).text();
    let ultimo = $('#id3-1 li').last().text();
    $('#id3-2').append(`Copia: ${primero}, ${segundo}, ${ultimo} <br>`);
}

// Ejercicio 3b: Mostrar todos los Li (con Vanilla JavaScript)
function ej3b() {
    let elementos = document.querySelectorAll('#id3-1 li');
    let texto = Array.from(elementos).map(el => el.textContent).join(' - ');
    document.getElementById('id3-3').innerHTML += texto + '<br>';
}

// Ejercicio 3c: Mostrar todos los Li con jQuery
function ej3c() {
    let texto = $('#id3-1 li').map(function() {
        return $(this).text();
    }).get().join(' - ');
    $('#id3c').append(texto + '<br>');
}

// Ejercicio 4: Ejemplo de selectores avanzados (ej. enlaces que contienen <b>)
function ej4() {
    // Busca las etiquetas <a> que tengan una etiqueta <b> dentro
    let enlaces = $('a:has(b)').map(function() {
        return $(this).text() + " (" + $(this).attr('href') + ")";
    }).get().join('<br>');
    
    $('#id4').append('<b>Enlaces que contienen negrita:</b><br>' + enlaces + '<br><br>');
}

// Ejercicio 5: Obtener información del formulario
function ej5() {
    // .serialize() recoge todos los datos del formulario listos para enviar
    let datosFormulario = $('#f1').serialize();
    $('#id5').append('<b>Datos serializados:</b><br>' + datosFormulario + '<br><br>');
}

// Ejercicio 6: Acción libre (ej. Ocultar/Mostrar el formulario con animación)
function ej6() {
    // Un efecto visual clásico de jQuery
    $('#f1').slideToggle('slow'); 
}

// Ejercicio 7: Eventos en botones
function ej7() {  
    $('#botonEventos').on('click', function() {
        $('#idEventos').text('¡Has hecho clic en el botón de eventos!');
        $('#idEventos').css({
            'color': 'white',
            'background-color': 'blue',
            'padding': '10px',
            'margin-top': '10px'
        });
    });
}