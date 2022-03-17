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

//create HTML calculator elements
for(i = 0; i<5; i++){
    let new_div = document.createElement("div");
        new_div.classList.add(`number${i}`);
        new_div.setAttribute('style', 'display: flex; flex-basis: 100%, text-align: center;'); 
        new_div.innerHTML = (`<button id = "${i}">${i}</button>`);
        appending = document.getElementById("buttons");
        appending.append(new_div);

}
for(i = 5; i<10; i++){
    let new_div = document.createElement("div");
        new_div.classList.add(`number${i}`);
        new_div.setAttribute('style', 'display: flex; flex-basis: 100%, text-align: center;'); 
        new_div.innerHTML = (`<button id = "${i}">${i}</button>`);
        appending = document.getElementById("buttons2");
        appending.append(new_div);

}

