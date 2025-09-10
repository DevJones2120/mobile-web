// variáveis

const inputNota = document.getElementById("nota");
const resultado = document.getElementById("result");

//  Função
function resultadoNotaClick(event) {
    event.preventDefault()
    // console.log(inputNota.value)

    // Lógica-condição
    if (inputNota.value >= 6) {
        // alert("Aprovado")
        resultado.innerHTML = "Aprovado"
    } else {
        // alert("Reprovado")
        resultado.innerHTML = "Reprovado"
    }

    inputNota.value = ""

}




