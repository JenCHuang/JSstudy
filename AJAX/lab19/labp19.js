$(function(){
    $("button").on("click",loadServerData);
});

function loadServerData(){
    // 引入他人的api 服務:  將 rss檔 轉為 json檔
    let rss2json = "https://api.rss2json.com/v1/api.json?rss_url=";
    $.getJSON(rss2json+"https://www.mohw.gov.tw/rss-16-1.html")
    .done(function(data){
        // debugger;
        // data->items->title,link,pubDate
        for(let x=0;x<data.items.length;x++){
            let text = `<tr><td>`+
                // 第一格內容: <td><a href='news link'> news title </a></td>
                // target='_blank' : 設定為點擊時另開新頁
                `<a target='_blank' href='${data.items[x].link}'>${data.items[x].title}</a>`+
                // <td> pubDate的日期部分 </td>
                `</td><td>${data.items[x].pubDate.split(" ")[0]}</td></tr>`
            $("#dataTable").append(text);
        }
    })
    .fail(function(){ console.log("Error");})
    .always(function(){console.log("Always");});
}