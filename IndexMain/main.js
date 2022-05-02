// window.onload = function(){  // 匿名程式, 用於以後不用的函數
//     document.write("Hello JavaScript!")
// };

// Alert box: p10
// window.onload = function(){
//     document.onclick = function(p){
//         // use javascript for debugger
//         // debugger;
//         alert(p.target.innerHTML + "有" + p.target.innerHTML.length + "個字元");
//         // 
//     }
// }

// Confirm Box: p11
// define variable: confirmAnswer
// let confirmAnswer = confirm("你真的確定你想要取消這個服務嗎?");
// 找到'第一個'<h1>標籤區塊
// let thisH1 = document.getElementsByTagName("h1")[0];
// if (confirmAnswer) {
//     thisH1.innerHTML = "服務已取消";
// } else {
//     thisH1.innerHTML = "繼續使用本服務";
//  }

//  Prompt Box: p13
// let promtAnswer = prompt("小明家有三個小孩，他兩個哥哥叫張一、張二，請問第三個小孩叫什麼 ? ","張三");
//     // 找到特定id的標籤區塊
// let thisH1 = document.getElementById("Response");
// switch (promtAnswer) {
//     case "張三":
//         thisH1.innerHTML = "那小明是誰?";
//         break;
//     case "小明":
//         thisH1.innerHTML = "聰明";
//         break;
//     default:
//         thisH1.innerHTML = "你想多了";
// }

// Function: p14
function showAlert(){
    thisH1.innerHTML = "Hello!";
    console.log("Hello!")
}
let thisBotton = document.getElementsByTagName("button")[0];
let thisH1 = document.getElementsByTagName("h1")[0];
// thisBotton.onclick = function(){
//     showAlert();
// } // #ver.1
// thisBotton.onclick = function(){
//     thisH1.innerHTML = "Hello!"
// } // #ver.2
// thisBotton.onclick = showAlert; // #ver.3: 點擊=執行showAlert
    // if using "showAlert()", if will excute automatically.
thisBotton.addEventListener("click",showAlert); // #ver.4: p35