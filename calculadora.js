function calcularGorjeta() {
    // aqui ele vai obter os valores dos inputs matheus
    let totalConta = parseFloat(document.getElementById('totalConta').value);
    let numeroPessoas = parseInt(document.getElementById('numeroPessoas').value);
    let percentualGorjeta = parseFloat(document.getElementById('percentualGorjeta').value);
    let despesas = parseFloat(document.getElementById('despesas').value);

    // vai verificar se os valores inseridos são válidos (achei melhor colocar ne)
    if (isNaN(totalConta) || isNaN(numeroPessoas) || isNaN(percentualGorjeta) || totalConta <= 0 || numeroPessoas <= 0) {
        alert('Por favor, insira valores válidos para a conta total e o número de pessoas.');
        return;
    }

    //  eh pra calcular a gorjeta e o total a pagar
    let gorjeta = (totalConta * percentualGorjeta) / 100;
    let totalPagar = totalConta + gorjeta;

    // mostrar a gorjeta e o total a pagar por pessoa
    let gorjetaPorPessoa = gorjeta / numeroPessoas;
    let totalPorPessoa = totalPagar / numeroPessoas;
    let despesasPessoa = despesas / numeroPessoas;
    totalPorPessoa = totalPorPessoa + despesasPessoa;

    // mostrar os resultados na tela (usei o toFixed pra deixar apenas 2 casas decimais)
    document.getElementById('resultadoGorjeta').innerText = 'Gorjeta por pessoa: R$' + gorjetaPorPessoa.toFixed(2);
    document.getElementById('resultadoTotal').innerText = 'Total por pessoa: R$' + totalPorPessoa.toFixed(2);
}

// ação de quando apertar no bortao
document.getElementById('calcular').addEventListener('click', calcularGorjeta);
