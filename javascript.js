function add(a,b){
    if (!Number.isNaN(a) && !Number.isNaN(b)){
        return a + b;
    }
    else{
        console.log("Non number operand");
    }
}

function subtract(a,b){
    if (!Number.isNaN(a) && !Number.isNaN(b)){
        return a - b;
    }
    else{
        console.log("Non number operand");
    }
}

function multiply(a,b){
    if (!Number.isNaN(a) && !Number.isNaN(b)){
        return a * b;
    }
    else{
        console.log("Non number operand");
    }
}

function divide(a,b){
    if (!Number.isNaN(a) && !Number.isNaN(b)){
        return a / b;
    }
    else{
        console.log("Non number operand");
    }
}

function updateDisplay(input){
    let temp = document.getElementsByClassName('calculator_display')[0];
    if (temp.textContent == 0){
        temp.textContent = input;
    }
    else{
        temp.textContent = temp.textContent + input;
    }
    
}