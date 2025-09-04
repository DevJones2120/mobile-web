// alert("Bem vindo á calculadora!")
console.log("Vamos começar!?")

//Variável
const num1 = document.getElementById("numero 1")
const num2 = document.getElementById("numero 2")

const result = document.getElementById("result")

// Função
function soma(event) {
    event.preventDefault()
    result.innerHTML = Number(num1.value) + Number(num2.value)
    num1.value = ""
    num2.value = ""
}

function sub(event) {
    event.preventDefault()
    result.innerHTML = Number(num1.value) - Number(num2.value)
    num1.value = ""
    num2.value = ""
}

function mult(event) {
    event.preventDefault()
    result.innerHTML = Number(num1.value) * Number(num2.value)
    num1.value = ""
    num2.value = ""
}

function div(event) {
    event.preventDefault()
    result.innerHTML = Number(num1.value) / Number(num2.value)
    num1.value = ""
    num2.value = ""
}