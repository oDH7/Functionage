function avaliarIdade() {
    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);
    let resultado = '';

    if (isNaN(idade) || idade < 0) {
        resultado = 'Por favor, digite uma idade válida.';
    } else if (idade <= 11) {
        resultado = `${nome} é uma Criança.`;
    } else if (idade <= 20) {
        resultado = `${nome} é um Adolescente.`;
    } else if (idade <= 64) {
        resultado = `${nome} é um Adulto.`;
    } else {
        resultado = `${nome} é um Idoso.`;
    }

    document.getElementById('resultado').innerText = resultado;
}
