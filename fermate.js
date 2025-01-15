function creaRiga(linea, orario) {
    let tabella = document.getElementById("tabella");

    let nuovaRiga = document.createElement("tr");

    let cellaLinea = document.createElement("td");
    cellaLinea.textContent = linea;
    nuovaRiga.appendChild(cellaLinea);

    let cellaOrario = document.createElement("td");
    cellaOrario.textContent = orario;
    nuovaRiga.appendChild(cellaOrario);

    tabella.appendChild(nuovaRiga);
}

function cerca() {
    let numeroFermata = document.getElementById("input").value;

    if (!numeroFermata) {
        alert("Per favore, inserisci un numero di fermata.");
        return;
    }

    let URL = "https://gpa.madbob.org/query.php?stop=" + numeroFermata;

    fetch(URL)
    .then(x => x.json())
    .then(y => {
        let tabella = document.getElementById("tabella");
        tabella.innerHTML = "";

        y.forEach(elemento => {
            creaRiga(elemento.line, elemento.hour);
        });
    })
}
