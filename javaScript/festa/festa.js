
// variáveis
const inputIdade = document.getElementById("idade")
const resultado = document.getElementById("result")
const mensagem = document.getElementById("mensagem")
const imagem = document.getElementById("projeto")

//  Função
function resultadoIdadeClick(event) {
     event.preventDefault()

    if (inputIdade.value >= 18) {
        resultado.innerHTML = "Aguardo sua presença 🍻!"
        imagem.style.display = "block";

    } else {
        resultado.innerHTML = "Você não pode ir ❌👮!"
        imagem.style.display = "none";
    }

    // Validação de formulário
    if (inputIdade.value == "") {
        return false;
    }

    inputIdade.value = ""
}
