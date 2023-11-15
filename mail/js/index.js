const mailuserList = ["gino.rossi@gmail.com","gina.verdi@gmail.com","rossi.rossi@gmail.com"];
const submitButton = document.getElementById("submit");
const wrapper = document.getElementById("wrapper");
const output = document.createElement("p");

submitButton.addEventListener("click", function() {
    const email = document.getElementById("email").value;
    if (mailuserList.includes(email)) {
        output.textContent = "Autenticato";
        output.classList.add("text-green");
    } else {
        output.textContent = "Non autenticato";
        output.classList.add("text-red");
    }
    wrapper.append(output);
});