enum Roles1 { Admin, User } // Admin = 0, User = 1
let user1: Roles1 = Roles1.Admin;
console.log("Valor de user1 (Admin por defecto):", user1);

enum Roles2 { Admin = 1, User }
let user2: Roles2 = Roles2.User; // Ahora User será 2
console.log("Valor de user2 (User después de Admin=1):", user2);

enum Roles3 { Admin = 1, User = 3, Guest = 0 };
let nombreRol: string = Roles3[1];
console.log("El rol con el valor 1 es:", nombreRol);