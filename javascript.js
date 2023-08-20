let inputA = null;
let inputB = null;
let operator = null;

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

/*
updateDisplay either adds the last clicked digit button to the rightmost part of 
the display or clears and starts  if an operator has been selected and input2 is null
*/
function updateDisplay(input){
    let temp = document.getElementsByClassName('calculator_display')[0];
    if (temp.textContent == 0){
        temp.textContent = input;
    }
    else{
        temp.textContent = temp.textContent + input;
    }
/*
Checks for where values should be stored. First test is for the first digit of first operand
Second test is if you are still inputting the first operand before giving it an operator
Third test is to update second operand if an operator has been selected already
*/

if (inputA == null){
        inputA = Number.parseFloat(temp.textContent);
    }
    else if (inputA != null && operator == null){
        inputA = Number.parseFloat(temp.textContent);
    }
    else if (operator != null){
        inputB = Number.parseFloat(temp.textContent);
    }
    
}

function clear(){
    let temp = document.getElementsByClassName('calculator_display')[0];
    temp.textContent = '0';
    inputA = null;
    inputB = null;
    operator = null;
}

function operate(inputA, inputB, operator){
    if (Number.isNaN(inputA) || Number.isNaN(inputB)){
        console.log("Non number operand");
    }
    else{
        if (operator == "+"){
            return add(inputA, inputB);
        }
        else if (operator == "-"){
            return subtract(inputA, inputB);
        }
        else if (operator == "*"){
            return multiply(inputA, inputB);
        }
        else if (operator == "/"){
            return divide(inputA, inputB);
        }
        else{
            console.log("Something went wrong here ..");
            return -1;
        }
    }
}

window.onload = function(){

    let temp = document.getElementsByClassName('calculator_body')[0];

    temp.addEventListener('click', (event) => {
        const isButton = event.target.nodeName === 'BUTTON';

        if (!isButton){
            return;
        }
        else{
            let id = event.target.id;

            if (Number.isNaN(id)){
                if (id == "multiply"){

                    return;
                }
                if (id == "divide"){

                    return;
                }
                if (id == "add"){

                    return;
                }
                if (id == "subtract"){

                    return;
                }
                if (id == "clear"){

                    return;
                }
            }
            else{
                updateDisplay(Number.parseInt(id));
                return;
            }
        
        }
    });
};