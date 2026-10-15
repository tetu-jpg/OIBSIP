let input=document.getElementById("display");
let history=JSON.parse(localStorage.getItem("history"))  []
function clearDisplay(){
    input.value = "";
}

input.classList.add("input");
function deleteLast(){
    input.value = input.value.slice(0, -1);
}
function appendNumber(number) {
    input.value += number;
}
function appendOperator(operator) {
    input.value += operator;
}
function calculateResult() {
    try {
        let expression = input.value;
        let result = eval(expression);
        history.push(`${expression} = ${result}`);
        localStorage.setItem("history", JSON.stringify(history))
        input.value=result;
    } catch (error) {
        input.value = error.message;
    }
}
let historycontainer=document.createElement("div");
historycontainer.classList.add("history")
function showHistory() {
    
    let historyList=document.createElement("ul");
    if (history.length > 0){
        let listItem=document.createElement("li");
        listItem.classList.add("list")
        listItem.textContent = history [history.length -1];
        historyList.appendChild(listItem);
    };
    historycontainer.appendChild(historyList);
    document.querySelector(".container").appendChild(historycontainer);
    

}
function factorial(n) {
    if (!Number.isInteger(n)  n < 0 || n > 170) {
        return error.message;
    }

    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

function calculateFactorial() {
    input.value = factorial(Number(input.value));
}
function toggleInverse() {
    isInverse = !isInverse;
}
function calculateSin() {
    let angle = Number(input.value);

    if (isDegree) {
        angle = angle * Math.PI / 180;
    }

    input.value = isInverse
        ? Math.asin(angle) * (isDegree ? 180 / Math.PI : 1)
        : Math.sin(angle);
  }
