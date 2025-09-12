function diasParaNiver () {
    const hoje = new Date();
    const diaSemana = hoje.getDay(); // 0=Dom, 1=Seg, ..., 4=Quin
    let diasFaltando = 4 - diaSemana

    if (diasFaltando < 0) {
        diasFaltando += 7;
    }

    documento.getElementById("dias").textContent = diasFaltando
}


// Chamar função
diasParaNiver();

