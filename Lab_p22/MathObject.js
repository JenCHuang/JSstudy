let thisH1 = document.getElementsByTagName("h1")[0];
let thisButton = document.getElementsByTagName("button")[0];
// thisButton.addEventListener("click",ChangWord);
thisButton.addEventListener("click",Lab);

// Math 物件 p25
function ChangWord() {
    let num = -12.34;
    thisH1.innerHTML = "Number =  " + num;
    thisButton.innerHTML = "One More ?!"
    console.log("abs(Number)   = " + Math.abs(num));
    console.log("floor(Number) = " + Math.floor(num));
    console.log("ceil(Number)  = " + Math.ceil(num));
    console.log("round(Number) = " + Math.round(num));
    // console.log(Math.max(num));
    console.log('圓周率 = ' + Math.PI);
    console.log('random = ' + Math.random());
}
// 隨機產生一個 1~10 之間的整數
function Lab() {
    let num = Math.floor(Math.random()*10)+1;
    thisH1.innerHTML = "Number =  " + num;
    thisButton.innerHTML = "Next ?!"
    if(num < 6){
        document.body.style.color = 'blue';
    }else{
        document.body.style.color = 'red';
    }


}