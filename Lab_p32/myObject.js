// Method 1
// let myObj = new Object();
// myObj.firstname = "Gentoo";
// myObj.lastname = "Huang";
// myObj.age = 500;
// myObj.eyecolor = "black";
// myObj.smile = function(){
//     console.log("^________^");
// }

// myObj.smile();

// Method 2
// let myObj = {
//     firstname:"Gentoo",
//     lastname:"Huang",
//     age:500,
//     eyecolor:"black",
//     smile:function(){document.write("-_-|||")}
// };
// myObj.smile();

// Method 3
function Person(firstname,lastname,age,eyecolor){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.eyecolor = eyecolor;
    this.smile=function(){
        document.write('^o^"')
    };
};
let myObj = new Person("Gentoo","Huang",500,"black");
myObj.smile();