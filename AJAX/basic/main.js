let thisButton = document.getElementsByTagName("button")[0];
let showData = document.getElementById("showData");
thisButton.addEventListener("click", loadServerData);

function loadServerData(){
    console.log("Load Server Data!")
    let xmlHttpRequest;
    if(window.XMLHttpRequest){ // 確定 Browser 有 XMLHttpRequest 這東西
        xmlHttpRequest = new XMLHttpRequest();
        // debugger;
    }else{
        alert("No XMLHttpRequest !")
        return;
    };

    // 設定請求方法：open(method,url,async)
    // method：GET / POST ; async：非同步/同步true / false
    xmlHttpRequest.open("GET","datafromserver.txt", true);
    xmlHttpRequest.send();

    // 當readyState改變時觸發
    xmlHttpRequest.onreadystatechange = function(){
        console.log(xmlHttpRequest.readyState);
        if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){
            showData.innerHTML = xmlHttpRequest.responseText;
            thisButton.style.visibility = "hidden";
        };
    }
}