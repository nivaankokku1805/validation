function clearScreen(){
    document.getElementById("result").value = ""
}
function setScreenValue(){
    document.getElementById("result").value += value; 
}
function calculateResult(){
    const resultElement = document.getElementById("result")
    const expression = resultElement.value.trial()

if (expresssion ===''){
    resultElement.value = "Enter an expression"
    return;
}
try{
    resultElement.value = eval(expression)
}catch (e){
    resultElement.value = "Invalid expression"
}
}