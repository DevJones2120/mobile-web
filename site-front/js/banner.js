const imagens = ["../../img/img-1.jpg", "../../img/img-2.jpg", "../../img/img-3.jpg", "../../img/img-4.jpg"];


let index = 0; // começa na primeira imagem
const banner = document.getElementById("banner");

function trocarImagem() {
    index++; // Vaio para proxima imagem
    // Outra opção //index = index + 1;

    if (index >= imagens.length) {
        index = 0; // Se passou do ultimo, volta para o primeiro
    }
        
    banner.src = imagens[index]
}

// Chamar a função
// trocarImagem();
setInterval(trocarImagem, 3000)