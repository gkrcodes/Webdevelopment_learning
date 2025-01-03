const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const tocelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
let temp;
function convert(){
    if (toFahrenheit.checked){
        temp = Number(textBox.value)
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "F";
    }
    else if (tocelcius.checked){
        temp = Number(textBox.value)
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "C";
    }
    else {
        result.textContent = "Select a unit";
    }
}