//Operating Functions
function add(prevNum, newNum){
    let total = prevNum + newNum
    return total
};

function subtract(prevNum, newNum){
    let total = prevNum - newNum
    return total
};

function multiply(prevNum, newNum){
    let total = prevNum * newNum
    return total
};

function divide (prevNum, newNum){
    let total = prevNum/newNum
    return total
};
let result = 0;

function operate(operand, prevNum, newNum){
    if(operand == "+"){
        result = add(prevNum, newNum);
    }
    else if (operand == "-"){
        result = subtract(prevNum, newNum);
    }
    else if (operand == "*"){
        result = multiply(prevNum, newNum);
    }
    else if (operand == "/" && newNum != 0){
       result =  divide(prevNum,newNum);
    }
    else{
        result = "Not a Valid Operation"
    }
    return result
    

};

a = operate("/", 7, 2);
console.log(a)
