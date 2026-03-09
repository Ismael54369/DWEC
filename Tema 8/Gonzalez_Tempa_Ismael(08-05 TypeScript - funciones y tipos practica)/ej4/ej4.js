var Roles1;
(function (Roles1) {
    Roles1[Roles1["Admin"] = 0] = "Admin";
    Roles1[Roles1["User"] = 1] = "User";
})(Roles1 || (Roles1 = {})); // Admin = 0, User = 1
var user1 = Roles1.Admin;
console.log("Valor de user1 (Admin por defecto):", user1);
var Roles2;
(function (Roles2) {
    Roles2[Roles2["Admin"] = 1] = "Admin";
    Roles2[Roles2["User"] = 2] = "User";
})(Roles2 || (Roles2 = {}));
var user2 = Roles2.User; // Ahora User será 2
console.log("Valor de user2 (User después de Admin=1):", user2);
var Roles3;
(function (Roles3) {
    Roles3[Roles3["Admin"] = 1] = "Admin";
    Roles3[Roles3["User"] = 3] = "User";
    Roles3[Roles3["Guest"] = 0] = "Guest";
})(Roles3 || (Roles3 = {}));
;
var nombreRol = Roles3[1];
console.log("El rol con el valor 1 es:", nombreRol);
