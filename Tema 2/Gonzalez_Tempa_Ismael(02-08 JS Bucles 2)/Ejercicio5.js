const arr1 = ["Malaga", "Sevilla", "Cordoba", "Huelva", "Cadiz", "Almeria", "Granada" ];
for (let ciudad of arr1) {
    const btn = document.createElement("button");
    btn.textContent = ciudad;
    btn.onclick = function() {
        alert("La ciudad mas bonita es " + ciudad);
    }
    document.body.appendChild(btn);
}