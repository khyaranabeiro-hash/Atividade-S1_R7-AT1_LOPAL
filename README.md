# 📘 Exercícios de JavaScript – Estruturas de Repetição

Este projeto contém 5 exercícios desenvolvidos em JavaScript com foco em:

* Estruturas de repetição (`while`)
* Validação de dados
* Interação com o usuário (`prompt` e `alert`)

---

## 📌 Exercício 1 – Número Positivo

### 🧠 Descrição

Solicita um número positivo ao usuário. Caso o valor seja negativo ou inválido, o programa continua pedindo até que um valor válido seja informado.

### 💻 Código

```javascript
let numero = Number(prompt("Digite um número positivo: "));

while (numero < 0 || isNaN(numero)) {
    numero = Number(prompt("Número inválido! Digite novamente (número positivo):"));
}

alert("Número válido: " + numero);
```

---

## 📌 Exercício 2 – Média de Notas

### 🧠 Descrição

Permite ao usuário digitar várias notas. O programa encerra quando um número negativo é informado e calcula a média das notas inseridas.

### 💻 Código

```javascript
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
```

---

## 📌 Exercício 3 – Total da Compra

### 🧠 Descrição

Recebe valores de compras e soma todos eles. O programa encerra quando o usuário digita 0.

### 💻 Código

```javascript
let valor = Number(prompt("Digite o valor da sua compra (0 para finalizar):"));

let total = 0;

while (valor !== 0) {
    total += valor;

    valor = Number(prompt("Digite outro valor (0 para finalizar):"));
}

alert("Total da compra: " + total);
```

---

## 📌 Exercício 4 – Nome Completo

### 🧠 Descrição

Solicita nome e sobrenome do usuário. Caso algum campo esteja vazio, o programa pede novamente até ambos serem preenchidos corretamente.

### 💻 Código

```javascript
let nome = prompt("Digite seu nome:");
let sobrenome = prompt("Digite seu sobrenome:");

while (nome === "" || sobrenome === "") {
    alert("Preencha corretamente!");

    nome = prompt("Digite seu nome:");
    sobrenome = prompt("Digite seu sobrenome:");
}

alert("Seu nome completo é: " + nome + " " + sobrenome);
```

---

## 📌 Exercício 5 – Saque com Saldo

### 🧠 Descrição

Simula um sistema de saque bancário com saldo inicial de R$1000. O programa permite saques enquanto houver saldo disponível, validando valores inválidos e saldo insuficiente.

### 💻 Código

```javascript
let saldo = 1000;
alert("Saldo atual: R$ " + saldo.toFixed(2));

while (saldo > 0) {
    let saque = parseFloat(prompt("Digite o valor do saque:"));

    if (saque > saldo) {
        alert("Saldo insuficiente. Tente novamente.");
        continue;
    }

    if (saque <= 0) {
        alert("Valor inválido. Tente novamente.");
        continue;
    }

    saldo -= saque;

    alert("Saque realizado com sucesso. Saldo atual: R$ " + saldo.toFixed(2));

    if (saldo <= 0) {
        alert("Saldo esgotado. Encerrado");
    }
}
```

---

## 🛠️ Tecnologias Utilizadas

* JavaScript
* Navegador (execução com `prompt` e `alert`)
* Visual Studio Code

![Demonstração](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGZsb3EwaHdtcWp6aXFkcHAxNWZvd2puMjdpdXpuOThzdW15bDdmNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DX1cytoIQvnmgqBlQ3/giphy.gif)
