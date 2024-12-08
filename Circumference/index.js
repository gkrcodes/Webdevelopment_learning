const PI = 3.14159;
let circumference;
let radius;

document.getElementById("calculate").onclick = function(){
    radius = document.getElementById("radius").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("result").textContent = `The circumference of the circle with radius ${radius} is ${circumference} cms.`;

}