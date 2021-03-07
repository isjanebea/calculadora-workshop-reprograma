// HORA   X  TRABALHO
// PRDUTCTION DEPLOYS

var inputDaHora = document.querySelector("#valor-hora")
var inputDoProjeto = document.querySelector("#horas-projeto")
var spanResultado = document.querySelector("#resposta")

function calcular() {
    let  horasTrabalhadas = inputDaHora.valueAsNumber
    let  tempoDoProjeto = inputDoProjeto.valueAsNumber
    let  total = horasTrabalhadas * tempoDoProjeto 
    spanResultado.textContent = "R$ " + total;
}


//11940042422
//  (062) 99614-7755
