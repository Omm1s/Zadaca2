let resultHistory = [0];

function addHistoryLog (userInput,userOperation, operationResult){
    let logEntry = {
        input: userInput,
        operation:userOperation,
        result: operationResult,
    };
    resultHistory.push(logEntry);
   console.log(resultHistory);
}

let currentResult=0;
addBtn.addEventListener("click",add);
subtractBtn.addEventListener("click",sub);
multiplyBtn.addEventListener("click",multiply);
divideBtn.addEventListener("click",divide);
squareBtn.addEventListener("click",square);
powBtn.addEventListener("click",pow);

function add(){
    let calculationDescription = currentResult + " + " + userInput.value; 
    currentResult = currentResult + parseInt(userInput.value);
    outputResult(currentResult, calculationDescription);
    addHistoryLog(parseInt(userInput.value),"ADD",currentResult)
}


function sub(){
    let calculationDescription = currentResult + " - " + userInput.value; 
    currentResult = currentResult - parseInt(userInput.value);
    outputResult(currentResult, calculationDescription);
  
    addHistoryLog(parseInt(userInput.value),"SUBSTRACT",currentResult)
}

function multiply(){
    let calculationDescription = currentResult + " * " + userInput.value; 
    currentResult = currentResult * parseInt(userInput.value);
    outputResult(currentResult, calculationDescription);
    
    addHistoryLog(parseInt(userInput.value),"MULT",currentResult)
}

function divide(){
    let calculationDescription = currentResult + " / " + userInput.value; 
    currentResult = currentResult / parseInt(userInput.value);
    outputResult(currentResult, calculationDescription);
    resultHistory.push(currentResult);
    console.log(resultHistory);

    addHistoryLog(parseInt(userInput.value),"DIVIDE",currentResult)
}

function square(){
    let calculationDescription = currentResult + " ^2 "; 
    currentResult = currentResult * currentResult;
    outputResult(currentResult, calculationDescription);

    addHistoryLog(parseInt(userInput.value),"SQUARE",currentResult)
}

function pow(){
    let calculationDescription = currentResult + " ^ " + userInput.value;
    currentResult= Math.pow(currentResult,parseInt(userInput.value));
    outputResult(currentResult, calculationDescription);

    addHistoryLog(parseInt(userInput.value),"POW",currentResult)
}