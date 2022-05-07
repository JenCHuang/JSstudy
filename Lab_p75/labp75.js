let mapArray, ctx, currentImgMain;
//mapArray - 決定地圖中每個格子的元素
//ctx - HTML5 Canvas用
//currentImgMainX, currentImgMainY - 決定主角所在座標

let imgMountain, imgMain, imgEnemy;
//imgMountain, imgMain, imgEnemy - 障礙物, 主角, 敵人的圖片物件

// Setting grid to 200*200
const gridLength = 200;

//網頁載入完成後初始化動作
// initial / start / beginning
$(function () {
    mapArray = [ //0-可走,1-障礙,2-終點,3-敵人
        [0,1,1],
        [0,0,0],
        [3,1,2]
    ];

    ctx = $("#myCanvas")[0].getContext("2d");
    // Canvas: 畫布
    // Canvas.getContext: 拿畫筆作畫
    // getContext("2d"):  採用平面作畫模式
    // [0]: 一般用 #id 不需要指定, 但對canvas來說會輸出一包矩陣, 故要指定
    //      這是jQuery語法取得元素的細節, 可在console中確認
    //      若用 document.getElementById("myCanvas") 則無此問題
    
    imgMain = new Image();
    imgMain.src = "images/spriteSheet.png";
    currentImgMain = { // 原點由左上角出發
        "x":0,
        "y":0
    };

    // 將主角繪製至畫面上 
    //  (由於有圖片物件未載入完成的隱憂，用onload來指定"載入圖片完成就執行")
    imgMain.onload = function(){
        ctx.drawImage(imgMain, 0,0,80,130,currentImgMain.x,currentImgMain.y,gridLength,gridLength);
    };

    imgMountain = new Image();
    imgMountain.src = "images/material.png";
    imgEnemy = new Image();
    imgEnemy.src = "images/Enemy.png";
    imgMountain.onload = function(){
        imgEnemy.onload = function(){};
    };
});
//處理使用者按下按鍵
$(document).on("keydown", function (event) {
});
