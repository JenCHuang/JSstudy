let userInput = document.getElementById("userInput");
let hint      = document.getElementById("hint");
let timer     = document.getElementById("timer");
let Button1   = document.getElementsByTagName("button")[0];
let Button2   = document.getElementsByTagName("button")[1];

let originhint = hint.innerHTML;
let count=10;
timer.innerHTML = count;

Button1.addEventListener("click", checkPasswd);
let myVar = setInterval(myTimer,1000);

function myTimer(){
    count--;
    timer.innerHTML = count;
    if(count == 0){
        hint.innerHTML = "You are dead !!!";
        clearInterval(myVar); //歸零後就不再 count--
    }
};

function checkPasswd(){
    hint.innerHTML = '';
    if (parseInt(userInput.value) == 1234){
        alert("You got it!");
        clearInterval(myVar);
    }else{
        hint.innerHTML = "Try again !!"
    }
    userInput.value = null;
};

// Reset to begining
Button2.addEventListener("click", resetc);
function resetc(){
    clearInterval(myVar);
    hint.innerHTML = originhint;
    count = 10;
    timer.innerHTML = count;
    myVar = setInterval(myTimer,1000);
};

// Trigger Event on Enter pressed in input
userInput.addEventListener("keypress", function(keyin){
    if (keyin.key == 'Enter'){
        checkPasswd();
    };
});
