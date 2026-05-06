let nome = prompt("Digite seu nome:");
let sobrenome = prompt("Digite seu sobrenome:");

while (nome === "" || sobrenome === "") {
    alert("Preencha corretamente!");

    nome = prompt("Digite seu nome:");
    sobrenome = prompt("Digite seu sobrenome:");
}

alert("Seu nome completo é: " + nome + " " + sobrenome);