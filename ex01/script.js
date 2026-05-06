let numero = Number(prompt("Digite um número positivo: "));

while (numero < 0 || isNaN(numero)) {
    numero = Number(prompt("Número inválido! Digite novamente (número positivo):"));
}

alert("Número válido: " + numero);