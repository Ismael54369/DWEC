function area(forma, ancho, alto) {
    var area = (forma == "triangulo") ? ancho * alto / 2 : ancho * alto;
    return "soy un " + forma + " con un area de " + area + " cm2.";
}
// En lugar de document.body, usamos console.log para verlo en la terminal
console.log(area("rectangulo", 30, 15));
console.log(area("triangulo", 10, 20));
