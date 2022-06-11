let thisH1 = document.getElementsByTagName("h1")[0];
// thisH1.addEventListener("click",showAlert);
//              Note: 引入function時, 後面不要加()
thisH1.addEventListener("mousedown",showAlert);

// String Lab: p22
function showAlert(){
    alert(
        "String Length: "+thisH1.innerHTML.length+"\n"+
        "'World' 在第"+thisH1.innerHTML.indexOf("World")+"個位置"+"\n"+
        "First word:  " + thisH1.innerHTML.split(" ")[0]+"\n"+
        "Second word: " + thisH1.innerHTML.split(" ")[1]
        );
    }
    
// Self Testing
let backup = thisH1.innerHTML
function chword1(){
    thisH1.innerHTML = thisH1.innerHTML.toUpperCase();
}
function chword2(){
    thisH1.innerHTML = backup;
}
thisH1.addEventListener("mouseover",chword1);
thisH1.addEventListener("mouseout",chword2);
// thisH1.addEventListener("mouseout",thisH1.innerHTML = backup);