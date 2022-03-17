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
    else if (operand == "X"){
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


//create HTML calculator elements
for(i = 0; i<5; i++){
    let new_div = document.createElement("div");
        new_div.classList.add(`number`);
        new_div.classList.add(`number${i}`);
        new_div.setAttribute('style', 'display: flex; flex-basis: 100%, text-align: center;'); 
        new_div.innerHTML = (`<button id = "${i}">${i}</button>`);
        appending = document.getElementById("buttons");
        appending.append(new_div);

}
for(i = 5; i<10; i++){
    let new_div = document.createElement("div");
        new_div.classList.add(`number`);
        new_div.classList.add(`number${i}`);
        new_div.setAttribute('style', 'display: flex; flex-basis: 100%, text-align: center;'); 
        new_div.innerHTML = (`<button id = "${i}">${i}</button>`);
        appending = document.getElementById("buttons2");
        appending.append(new_div);

}

//adding an event listener to number buttons for function to display
let buttons = Array.from(document.getElementsByClassName("number"))
let previousNum = 0
let operator = 7
let operation = []

buttons.forEach(element => {element.addEventListener('click', event =>{ 
    let number = (element.textContent)
    let display = document.getElementById("display")
    let content = display.textContent
    display.textContent = content + number
    operator = ""
    previousNum = previousNum + number
})});

//adding an event listener to non number buttons for function to display
let nonNums = Array.from(document.getElementsByClassName("nonnum"))
nonNums.forEach(element => {element.addEventListener('click', event =>{ 
    if (operator == ""){
        previousNum = parseInt(previousNum)
        operation.push(previousNum)
        operator = (element.textContent)
        let display = document.getElementById("display")
        let content = display.textContent
        display.textContent = content + operator
        previousNum = 0
        operation.push(operator)

    }
})});

//EQUAL BUTTON
let equal = document.getElementById("equal")
equal.addEventListener('click', event =>{
    previousNum = parseInt(previousNum)
    operation.push(previousNum)
    console.log(operation)
})
