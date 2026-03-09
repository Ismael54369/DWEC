var list = [4, 5, 6];
console.log("Usando in (índices):");
for (var i in list) {
    console.log(i);
}
console.log("Usando of (valores):");
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var i = list_1[_i];
    console.log(i);
}
