$(function(){
    // $("button").on("click",gofunc1);
    $("#buttone1").on("click",gofunc1);
    $("#userinput").on("keypress",keycheck);
    // $("#userinput").on("keypress",function(keyin){
    //     if (keyin.key == 'Enter') gofunc1();
    // });
});

const maleKeywords = ["雄","強","賢","志"];
const femaleKeywords = ["芸","芬","佩","嬌"];

// let keycheck =(e)=> {
//     if (e.key == 'Enter') gofunc1();
// };
// 簡化
let keycheck =(e)=> e.key == 'Enter'?gofunc1():console.log();
    
// 箭頭函數 
// let function_name = (input) => {scripts}
// let function_name = input => {scripts}
// let function_name = (input) => script in 1 line
let gofunc1 = () => {
    var inputText = $('#userinput').val();
    const isMale = maleKeywords.some(thisElement => inputText.includes(thisElement));
    const isFemale = femaleKeywords.some(thisElement => inputText.includes(thisElement));
    // array.some: (callback function) 
    // 此處使用 箭頭函數:  input => script in 1 line
    // thisElement : array裡的元素 (歷遍, 疊代?)
    // 
    if(isMale && isFemale){
        $("#emoji").text("😁");
        // Call emoji in windows: "win + . "
    }else if(isMale){
        $("#emoji").text("🧑");
    }else if(isFemale){
        $("#emoji").text("👩");
    }else{
        $("#emoji").text("😎");
    };
};