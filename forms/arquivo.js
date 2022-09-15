function verifique() {
    var numero = document.getElementById('numero').value;
    //var numeroDois = document.getElementById('numero2').value;
    var resultado = document.getElementById('resultado');
    if (numero % 2 == 0) {
        resultado.innerHTML ='Seu número é par'
        alert('Seu número é par')
        console.log('Seu número é par')
    } else {
        resultado.innerHTML = 'Seu número é ímpar'
    }
}