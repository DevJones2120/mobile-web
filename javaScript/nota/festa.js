
// variáveis
const inputIdade = document.getElementById("idade")
const resultado = document.getElementById("result")
const mensagem = document.getElementById("mensagem")

//  Função
function resultadoIdadeClick(event) {
     event.preventDefault()

    if (inputIdade.value >= 18) {
        resultado.innerHTML = "Aguardo sua presença !"
        
    } else {
        resultado.innerHTML = "Você não pode ir !"
    }

    // Validação de formulário
    if (inputIdade.value == "") {
        return false;
    }

    inputIdade.value = ""
}
