// Creazione variabili con numeri casuali da 0 a 6
const userNumber = Math.floor(Math.random() * 7);
const aiNumber = Math.floor(Math.random() * 7);

// Inserisco in una variabile il wrapper e creo un elemento "h1"
const wrapper = document.getElementById("wrapper");
const output = document.createElement("h1");

// Creo delle condizioni per stabilire chi ha vinto e mando un messaggio in output
if (userNumber > aiNumber) {
    output.textContent = "Hai vinto";
} else if (aiNumber > userNumber) {
    output.textContent = "Hai perso";
} else {
    output.textContent = "Pareggio";
}

// Inserisco h1 come figlio del wrapper in HTML
wrapper.append(output);
