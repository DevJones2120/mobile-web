const form = document.getElementById("newForm");

form.addEventListener("submit", function(event) {
    event.preventDefault()
    
    const email = document.querySelector("#email").value.trim();


    
    // Condição de validação
    if (email === "") {
        alert("imail inválido");
        return false;
    } 


    // Limpa o campo
    form.reset();
});
