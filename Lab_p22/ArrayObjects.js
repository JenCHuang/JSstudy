let thisH1 = document.getElementsByTagName("h1")[0];
let thisButton = document.getElementsByTagName("button")[0];
thisButton.addEventListener("click",ChangWord);

// Array 物件 p24-25
function ChangWord() { // 3 ways to create Array
    // let myFriends = new Array();
    // myFriends[0]="John";
    // myFriends[1]="Mary";
    // myFriends[2]="David";

    // let myFriends = new Array("John","Mary","David")

    // let myFriends = ["John",123,"David"]
    
    // let d = new Date();
    // let myFriends = ["John",123,d]

    let text = "John,Mary,David";
    let myFriends = text.split(","); // 不用加[]

    // thisH1.innerHTML = myFriends
    thisH1.innerHTML = "[ "+myFriends.join(" | ")+" ]";
    console.log("["+myFriends.join(', ')+"]");
    console.log(typeof(myFriends[0]));
    console.log(typeof(myFriends[1]));
    console.log(typeof(myFriends[2]));
}