let nota = Number(prompt("Digite sua nota (negativo para parar):"));

let soma = 0;
let quantidade = 0;

while (nota >= 0) {
    soma += nota;
    quantidade++;

    nota = Number(prompt("Digite outra nota (negativo para parar):"));
}

if (quantidade > 0) {
    let media = soma / quantidade;
    alert("Média: " + media);
} else {
    alert("Nenhuma nota válida foi digitada.");
}