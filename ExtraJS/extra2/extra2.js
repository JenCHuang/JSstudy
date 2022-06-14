function asyncProcess(imageID, imageURL){
    return new Promise(  
        (resolve,reject) => {
            // resolve: 內容都沒問題時產生的"回傳值"
            // reject:  內容出問題時產生的"回傳值"
            $(imageID).attr('src',imageURL);
            // 對特定id, 改 src = imageURL
            $(imageID).on('load',function(){
                // 當圖片載入後執行
                // debugger;
                // resolve($(this)[0].naturalWidth);
                    // this 即是指當前這張圖片
                    // $(this) 會抓到元件, 但會變成 array[img], 所以要指定[0]
                    //         此為jquery的缺陷
                resolve(this.naturalWidth); // 修正寫法
            });
        }
    );
};

$(function(){
    $("#buttone2").on("click",gofunc2);
});

function gofunc2(){
    // 開始計算三張圖片的寬度
    // 1.等所有圖片都載入才開始計算
    // Promise.all(必要的事).then(等必要的事都完成,接著要做的事)
    Promise.all([
        asyncProcess("#image1","https://punchline.asia/wp-content/uploads/2017/09/it-movie-poster-1.jpg"),
        asyncProcess("#image2","https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c618cd88432989.5dd5e72e505d1.jpg"),
        asyncProcess("#image3","https://www.u-buy.com.tw/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFIQk9PN3RZNUwuX0FDX1NMMTUwMF8uanBn.jpg")
    ])
    .then(
        // .then(response,error)
        // 等 .all 所有程序都完成才執行
        // response 會拿到一個陣列, 蒐集了所有上面的執行成果
        // response[i] 為寬度的數字
        response => {
            // debugger;
            // response 為 .all 傳過來的結果, 此處為array, 內有三張圖片的寬度
            $("#widthResult").text('圖片寬度: ');
            var totalWidth = 0;
            for(let x=0;x<response.length;x++){
                $("#widthResult").append(response[x]);
                totalWidth += response[x];
                if(x<response.length-1){
                    $("#widthResult").append(" + ");
                }else{
                    $("#widthResult").append(" = "+totalWidth);
                };
            };
        },
        error => {
            // show error massage
            console.log(`Error:${error}`);
        }
    );
};