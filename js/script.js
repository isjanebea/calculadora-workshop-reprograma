console.log("rodando") // ctrl+cv
var inputSalario = document.querySelector("#ganho-mes")

var inputHoras = document.querySelector("#horas-dia")

var resposta = document.querySelector("#resposta")

function calcularValorHora() {
     var salario = inputSalario.valueAsNumber
     var horas = inputHoras.valueAsNumber

     var soma = salario + horas

     var horasMes = horas * 22
     var valorHora = salario /  horasMes
     
     var ValorDuasCasas = valorHora.toFixed(2)     // metodo de arredondamento do numero.

     resposta.textContent = "R$ " + ValorDuasCasas
}

//flexbox
