const text = document.getElementById("age");
const submit = document.getElementById("submit");
let result = document.getElementById("result")

submit.onclick = function(){
    age = text.value; 
    age = Number(age);
if(age >= 100){
    result.textContent = `You are TOO OLD to enter this site.`;
}
else if(age == 0){
    result.textContent = `You can't enter. You are just born.`;
}
else if (age >=18){
    result.textContent = `You are old enough to enter this site.`;
}
else if (age < 0){
    result.textContent = `Your age can't be below 0.`;
}
else{
    result.textContent = `You must be 18+ to enter this site.`;
}
}