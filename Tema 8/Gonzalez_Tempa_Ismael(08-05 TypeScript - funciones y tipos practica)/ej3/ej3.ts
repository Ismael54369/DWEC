let arrayNumber: number[] = [1, 2, 3];
let arrayString: string[] = ['1', '2', '3'];

let arrayNumberBis: Array<number> = [1, 2, 3];
let arrayStringBis: Array<string> = ['1', '2', '3'];

let arrayMixed: any[] = [2, '5', 3];

let tupla: [string, number];
tupla = ['Hola', 2]; // Correcto
console.log(tupla);

// tupla = [2, 'hola']; // Si descomentas esto, el compilador tsc te dará un error rojo.