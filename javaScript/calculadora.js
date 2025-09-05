// alert("Bem vindo á calculadora!")
console.log("Vamos começar!?")

//Variável
const num1 = document.getElementById("numero1")
const num2 = document.getElementById("numero2")

const result = document.getElementById("result")

// Função
function soma(event) {
    event.preventDefault()
    // Validação de formulário
    if (num1.value == "") {
        alert("preencha o campo");
        return false;
    }

    if(num2.value == || num2.value == "") {
        alert("Preencha o campo");
        return false;
    }


    result.innerHTML = Number(num1.value) + Number(num2.value)
    num1.value = "";
    num2.value = "";

}

function sub(event) {
    event.preventDefault()
    result.innerHTML = Number(num1.value) - Number(num2.value)
    num1.value = "";
    num2.value = "";
}

function mult(event) {
    event.preventDefault()
    result.innerHTML = Number(num1.value) * Number(num2.value)
    num1.value = "";
    num2.value = "";
}

function div(event) {
    event.preventDefault()
    result.innerHTML = Number(num1.value) / Number(num2.value)
    num1.value = "";
    num2.value = "";
}
