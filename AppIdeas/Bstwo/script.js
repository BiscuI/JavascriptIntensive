var radius = document.getElementById("radius");

function converterPx() {
    let valor = document.querySelector("#valorPixels");
    //console.log(radius)

    //radius.setAttribute("border-radius", `${valor.value}px`);
    if (valor.value == '') {
        window.alert("Nenhum valor foi inserido!");
    } else {
        radius.style.borderRadius = `${valor.value}px`;
    }
}

function converterPercent() {
    let valor = document.querySelector("#valorPorcentagem");

    if (valor.value == '') {
        window.alert("Nenhum valor foi inserido!");
    } else {
        radius.style.borderRadius = `${valor.value}%`;
    }
}

function converterBordas() {
    let topLeft = document.querySelector("#topLeft");
    let topRight = document.querySelector("#topRight");
    let bottomRight = document.querySelector("#bottomRight");
    let bottomLeft = document.querySelector("#bottomLeft");

    if (topLeft.value == '' || topRight.value == '' ||
        bottomRight.value == '' || bottomLeft.value == '') {
        window.alert('Por favor, preencha um valor para cada borde se quiser usar essa opção');
    } else {
        console.log(topLeft.value);
        console.log(topRight.value);
        console.log(bottomRight.value);
        console.log(bottomLeft.value);
        radius.style.borderRadius = `${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px`;
    }
}