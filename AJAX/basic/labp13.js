let thisButton = document.getElementsByTagName("button")[0];
let showData = document.getElementById("showData");
thisButton.addEventListener("click", loadServerData);

function loadServerData(){
    console.log("Load Server Data!")
    let d = new Date();
    let dm = d.getMonth() + 1
    // let dm = 7;
    if (dm < 10){
        dm = '0' + dm;
    };
    let dd = d.getDate()
    // let dd = 1;
    if (dd < 10){
        dd = '0' + dd;
    };
    let filen = 'lab13data/'+d.getFullYear()+dm+dd+'.txt'
    debugger;

    let xmlHttpRequest;
    if(window.XMLHttpRequest){ // 確定 Browser 有 XMLHttpRequest 這東西
        xmlHttpRequest = new XMLHttpRequest();
    }else{
        alert("No XMLHttpRequest !")
        return;
    };

    xmlHttpRequest.open("GET",filen, true);
    xmlHttpRequest.send();

    xmlHttpRequest.onreadystatechange = function(){
        console.log(xmlHttpRequest.readyState);
        if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){
            showData.innerHTML = xmlHttpRequest.responseText;
            thisButton.style.visibility = "hidden";
        };
    }
}