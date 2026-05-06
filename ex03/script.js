let valor = Number(prompt("Digite o valor da sua compra (0 para finalizar):"));
let total = 0;
while (valor !==0) {
    total += valor;

    valor = Number(prompt("Digite outro valor (0 para finalizar):"));

}
alert("Total da compra: " + total);