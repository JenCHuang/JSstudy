let thisH1 = document.getElementsByTagName("h1")[0];
let thisButton = document.getElementsByTagName("button")[0];
thisButton.addEventListener("click",alertWin);

// 改變物件 p32
// document.body.style.color = 'blue';
// // CSS:  background-image: url("paper.gif");
// let thisURL = "https://www.w3schools.com/cssref/paper.gif";
// document.body.style.backgroundImage = "url("+ thisURL +")";


// Lab
let ArrURL = [
        "https://cdn2.ettoday.net/images/6317/d6317856.jpg",
        "https://media.nownews.com/nn_media/thumbnail/2022/03/1647828429477-31a4df73aba84925a60ad8932acf7445-800x534.jpg?unShow=false",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Ohtani_batting_2019.08.04%283%29.jpg/220px-Ohtani_batting_2019.08.04%283%29.jpg"
];

function alertWin(){
    let num = Math.floor(Math.random()*ArrURL.length)
    document.body.style.backgroundImage = "url("+ ArrURL[num] +")";
}