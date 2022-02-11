var num = document.querySelector('#num');
var res = document.querySelector('#res');


function converter(){
    let count = 0;
    let numConvertido = 0;
    console.log(num.value.length)
    
    for(let ii=parseInt(num.value.length, 10); ii>0; ii--){
        if(num.value[count]==1){
            numConvertido+= Math.pow(2, ii-1);
        }
        
        console.log(`caractere ${num.value[count]}`);
        console.log(ii);
        console.log(numConvertido);
        
        count++;
    }

    res.innerHTML = `${numConvertido}`;
}