const form = document.getElementById("newForm");

form.addEventListener("submit", function(event) {
    event.preventDefault()
    
    const email = document.querySelector("#email").value.trim();

console.log(email)
    
    // Condição de validação
    if (email === "") {
        alert("imail inválido");
        return false;
        
    } 

    // Validação simples: tem @ e .
    if (!email.includes("@") || !email.includes(".")) {
        alert("Email inválido, tente novamemte !");
        return;

    }

    if (email.value) {
        innerHTML = "Email cadastrado com sucesso! ✅"
        email.style.display = "block";
    }
   
    email.style.display = "none";



    // Limpa o campo
    form.reset();
});
