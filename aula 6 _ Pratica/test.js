let idade = 25;
let temCarteira = true;
let estaLogado = false;

if (idade >=  10 && temCarteira) {
    console.log("Acesso permitido ao motorista.");
}

if (idade < 18 || !estaLogado) {
    console.log("Acesso negado.");
}
