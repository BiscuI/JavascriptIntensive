var display = document.querySelector("#display");
var displayContent = document.querySelector("#display-content");
var vetorTemp = '';
var vetorDois = '';
var operacao = '';

function addNumber(num){
    vetorTemp += num;
    displayContent.textContent = vetorTemp;
}

function addOperation(simbol){
    operacao+=simbol;
    vetorDois = vetorTemp;
    vetorTemp = '';
}

function reset(){
    vetorTemp = '';
    vetorDois = '';
    operacao = '';
}

function addResult(){
    if(operacao=='+'){
        let numA = parseInt(vetorDois, 10);
        let numB = parseInt(vetorTemp, 10);
        let result = numA+numB;

        vetorTemp = '';
        vetorDois = '';
        operacao = '';

        displayContent.textContent = `${result}`
    }else if(operacao=='-'){
        let numA = parseInt(vetorDois, 10);
        let numB = parseInt(vetorTemp, 10);
        let result = numA-numB;

        vetorTemp = '';
        vetorDois = '';
        operacao = '';

        displayContent.textContent = `${result}`
    }else if(operacao=='/'){
        let numA = parseInt(vetorDois, 10);
        let numB = parseInt(vetorTemp, 10);
        let result = numA/numB;

        vetorTemp = '';
        vetorDois = '';
        operacao = '';

        displayContent.textContent = `${result}`
    }else if(operacao=='*'){
        let numA = parseInt(vetorDois, 10);
        let numB = parseInt(vetorTemp, 10);
        let result = numA*numB;

        vetorTemp = '';
        vetorDois = '';
        operacao = '';

        displayContent.textContent = `${result}`
    }else{
        window.alert('Você não selecionou uma operação');
    }
}