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

function operate(prevNum, operand, newNum){
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
let content = ""
let result_display = false
let error = true

buttons.forEach(element => {element.addEventListener('click', event =>{ 
    let number = (element.textContent)
    console.log(number)
    if (result_display != true){
        let display = document.getElementById("display")
        content = display.textContent  
    }
    else if (result_display == true && operator != "" && error != true) {
        let display = document.getElementById("display")
        content = display.textContent
    }
    else{
        content = ""
        previousNum = 0
    }
    error = false
    display.textContent = content + number
    operator = ""
    previousNum = previousNum + number
    result_display = false
    return;
})});

//adding an event listener to non number buttons for function to display
let nonNums = Array.from(document.getElementsByClassName("nonnum"))
nonNums.forEach(element => {element.addEventListener('click', event =>{ 
    console.log(operator)
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
    return;
})});

//EQUAL BUTTON
let equal = document.getElementById("equal")
equal.addEventListener('click', event =>{
    previousNum = parseInt(previousNum)
    operation.push(previousNum)
    size = operation.length
    console.log(operation)
    if (size >= 3 && operator ==""){
        result = operate(operation[0], operation[1], operation[2])
        opp = 1
        opp2 = 2
        if (size > 3){
            size = size -3 
            while (size > 0){
                opp = opp + 2
                opp2 = opp2 + 2
                size = size - 2
                result = operate(result, operation[opp], operation[opp2])
            }

        }
        let display = document.getElementById("display")
        display.textContent = result
        operation = []
        operator = ""
        previousNum = result
        result_display = true
    }
    else{
        let display = document.getElementById("display")
        display.textContent = "ERROR PLEASE TRY AGAIN"
        operation = []
        operator = 7
        previousNum = ""
        result_display = true
        error = true

    }
    return;
})
//CLEAR BUTTON
let clear = document.getElementById("clear")
clear.addEventListener('click', event =>{
    let display = document.getElementById("display")
        display.textContent = ""
        operation = []
        operator = 7
        previousNum = ""
        result_display = true

})


//keyboard
opFunct = ['*', "+", "-", "/"]
document.addEventListener('keydown', function (event) {
    numOrNo = isFinite(event.key)
    if (numOrNo === true) {
        let number = (event.key)
        document.getElementById(`${event.key}`).click();
    }
    if (opFunct.includes(event.key)) {
        if (event.key == "*"){
            document.getElementById(`mult`).click();
        }
        else if (event.key == "+"){
            document.getElementById(`add`).click();
        }
        else if (event.key == "-"){
            document.getElementById(`sub`).click();
        }
        else if (event.key == "/"){
            document.getElementById(`div`).click();
        }
        
    }
    if (event.key == "="){
        document.getElementById("equal").click();
    }
    if (event.key == "Backspace"){
        document.getElementById("clear").click();
        

    }
  });