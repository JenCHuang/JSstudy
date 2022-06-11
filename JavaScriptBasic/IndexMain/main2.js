function showAlert() {
    thisH1.innerHTML = "Hello!";
    // For loop: p29
    // for(let i=0;i<10;i++){
    //     if(i==3){
    //         // break;
    //         continue;
    //     }
    //     console.log(i);
    // }


    //For-in: p15
    // let person = {
    //     firstName:"Ryan",
    //     lastName:"Chung",
    //     height:178
    // };
    // for(n in person){
    //     console.log(n + ": "+person[n]);
    // }

    // Lab: p16
    for (x in window) {
        console.log(x + ": " + window[x])
    }
}
let thisBotton = document.getElementsByTagName("button")[0];
let thisH1 = document.getElementsByTagName("h1")[0];
thisBotton.onclick = showAlert;