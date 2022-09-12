function Somar() {
    var num1 = parseFloat(document.getElementById("num1").value)
    var num2 = parseFloat(document.getElementById("num2").value)
    var soma = num1 + num2;
    document.getElementById("soma").value = soma;
    console.log(soma);

    document.getElementById("history").innerHTML += "<h4>" + soma + "</h4>";
    document.getElementById("result").innerHTML = "Resultado da Soma";
}

function Subtrair() {
    var num1 = parseFloat(document.getElementById("num1").value)
    var num2 = parseFloat(document.getElementById("num2").value)
    var soma = num1 - num2;
    document.getElementById("soma").value = soma;
    console.log(soma);

    document.getElementById("history").innerHTML += "<h4>" + soma + "</h4>";
    document.getElementById("result").innerHTML = "Resultado da Subtração";
}

function Dividir() {
    var num1 = parseFloat(document.getElementById("num1").value)
    var num2 = parseFloat(document.getElementById("num2").value)
    var soma = num1 / num2;
    document.getElementById("soma").value = soma;
    console.log(soma);

    document.getElementById("history").innerHTML += "<h4>" + soma + "</h4>";
    document.getElementById("result").innerHTML = "Resultado da Divisão";
}

function Multiplicar() {
    var num1 = parseFloat(document.getElementById("num1").value)
    var num2 = parseFloat(document.getElementById("num2").value)
    var soma = num1 * num2;
    document.getElementById("soma").value = soma;
    console.log(soma);

    document.getElementById("history").innerHTML += "<h4>" + soma + "</h4>";
    document.getElementById("result").innerHTML = "Resultado da Multiplicação";
}