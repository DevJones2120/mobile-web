const form = document.getElementById("newForm");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function(event) {
    event.preventDefault()
    
    const email = document.querySelector("#email").value.trim();
    
    // Condição de validação
    if (email === "") {
        mensagem.textContent = "Preencha o campo de Email ! ❌";
        mensagem.style.color = "red"
        return false;
    } 

    // Validação simples: tem @ e .
    if (!email.includes("@") || !email.includes(".")) {
        mensagem.textContent = "Email inválido, tente novamente ! ⚠️";
        return false;

    }

    mensagem.textContent = "Email cadastrado com sucesso ! ✅"


    // Limpa o campo
    form.reset();
});
