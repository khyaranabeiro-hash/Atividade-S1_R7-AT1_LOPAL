let saldo = 1000;
alert("Saldo atual: R$ " + saldo.toFixed(2));

while (saldo > 0) {
    let saque = parseFloat(prompt("Digite o valor do saque:"));

    if (saque > saldo) {
        alert("Saldo insuficiente. Tente novamente.");
        continue;
    }

    if (saque <= 0) {
        alert("Valor inválido. Tente novamente.")
        continue;
    }

    if (saque <= 0) {
        alert("Valor inválido. Tente novamente.");
        continue;
    }
    saldo -= saque
    alert("Saque realizado com sucesso. Saldo atual: R$ " + saldo.toFixed(2));
    if (saldo <= 0){
        alert("Saldo esgotado. Encerrado")
    }
}