let thisH1 = document.getElementsByTagName("h1")[0];
// thisH1
let thisButton = document.getElementsByTagName("button")[0];
// thisButton.addEventListener("click",showAlert);
thisButton.addEventListener("click",ChangWord);

// 日期時間物件: p24
function showAlert(){
    let d = new Date();
    // thisH1.innerHTML = d.toLocaleDateString();
    // thisH1.innerHTML = d.toLocaleTimeString();
    thisH1.innerHTML = d.toLocaleString();
}

function ChangWord() {
    let d = new Date();
    thisH1.innerHTML =
        d.getFullYear() + "年 " +
        (d.getMonth()+1) + "月 " +
        d.getDate() + "日\n" +
        "星期" + d.getDay() + "\n" +
        d.getHours() + "時 " +
        d.getMinutes() + "分 " +
        d.getSeconds() + "秒" ;
}