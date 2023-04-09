//COSAS QUE FALTAN: 1. SIMPLIFICAR EL CÓDIGO. 
//CONSEGUIR QUE EL CONTENIDO DEL INPUT NO OCUPE MAS DE SU TAMAÑO

const screen = document.querySelector(".calculatorScreen");
const btnsNumbers = document.querySelectorAll("#btn");
const btnClear = document.getElementById("btn-clear");
const btnDeleteItem = document.getElementById("btn-delete-item");
const btnSum = document.getElementById("btn-sum");
const btnRes = document.getElementById("btn-res");
const btnMultiplicacion = document.getElementById("btn-mul");
const btnDivision = document.getElementById("btn-divi");
const btnSquareRoot = document.getElementById("btn-square-root");
const btnDecimal = document.getElementById("btn-decimal");
const btnResult = document.getElementById("btn-result");

let firstNumber = "";
let operator = "";
let secondNumber = "";



btnsNumbers.forEach((button) => {
    button.addEventListener("click", ()=>{
        firstNumber += button.innerText; 
        screen.value = firstNumber;
    });
});

btnSum.addEventListener("click", ()=>{
    operator = "+";
    secondNumber = firstNumber;
    firstNumber = "";
})

btnRes.addEventListener("click", ()=>{
    operator = "-";
    secondNumber = firstNumber;
    firstNumber = "";
})

btnMultiplicacion.addEventListener("click", ()=>{
    operator = "*";
    secondNumber = firstNumber;
    firstNumber = "";
})

btnDivision.addEventListener("click", ()=>{
    operator = "/";
    secondNumber = firstNumber;
    firstNumber = "";
})

btnSquareRoot.addEventListener("click", ()=>{
    operator = "√";
    secondNumber = firstNumber;
    firstNumber = "";
})

btnDecimal.addEventListener("click", ()=>{
    if(!firstNumber.includes(".")){
        firstNumber += btnDecimal.innerHTML;
        screen.value = firstNumber
    }
})
btnResult.addEventListener("click", ()=>{
    let result;
    switch(operator){ 
        case "+":
            result = Number(secondNumber) + Number(firstNumber)
            break;
        case "-":
            result = Number(secondNumber) - Number(firstNumber)
            break;
        case "*":
            result = Number(secondNumber) * Number(firstNumber)
            break;
        case "/":
            result = Number(secondNumber) / Number(firstNumber)
            if(parseFloat(firstNumber || secondNumber) === 0){
                alert(`ERROR: DIVISION BY ${Number(firstNumber || secondNumber)}`)
            }
            break;
        case "√":
            result = Math.sqrt(firstNumber);
            break;
        default:
            return;    
        }
        screen.value = result.toString();
})

btnDeleteItem.addEventListener("click", ()=>{
    firstNumber = screen.value.slice(0,-1);
    screen.value = firstNumber
});

btnClear.addEventListener("click", ()=>{
    screen.value = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
});


