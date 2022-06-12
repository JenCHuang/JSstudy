let cityData = [
    {name:"",lat:"",lon:""}, // 第一筆設空值, 讓下拉式選單一開始沒有值
    {name:"台北",lat:25.0856513,lon:121.421409},
    {name:"宜蘭",lat:25.0374821,lon:121.8489738},
    {name:"桃園",lat:24.8550566,lon:121.0921012},
    {name:"新竹",lat:24.6871974,lon:121.0321219},
    {name:"苗栗",lat:24.5150534,lon:120.8016458},
    {name:"台中",lat:24.1852333,lon:120.4946381},
    {name:"彰化",lat:23.992187,lon:120.3230689},
    {name:"南投",lat:23.8412218,lon:120.7023334},
    {name:"雲林",lat:23.6745746,lon:120.2945078},
    {name:"嘉義",lat:23.425616,lon:120.3974613},
    {name:"台南",lat:23.1508776,lon:120.201934},
    {name:"高雄",lat:22.7000444,lon:120.0508691},
    {name:"屏東",lat:22.3913338,lon:120.3482353},
    {name:"澎湖",lat:23.4815521,lon:119.2404997},
    {name:"花蓮",lat:23.9605646,lon:121.5453113},
    {name:"台東",lat:22.7483716,lon:121.0803036}
];

$(function(){
    for(let x=0;x<cityData.length;x++){
        $("#citySelect")
        .append(`<option value='${x}'>${cityData[x].name}</option>`);
    };
    $("#citySelect").on("change",loadServerData);
});

function loadServerData(){
    $("#result").empty();
    if(this.value==0) return; // 如果選到第一列的空值, 就不再動作
    // if-statement 只有一行時, 可以不用 {}
    // "this" 通常是驅動此function的元件
    // debugger;
    let weatherAPI_URL = "https://api.openweathermap.org/data/2.5/weather?";
    let weatherMapAPIKey = "847bf9a41e993fb6962ba48428b0ea58";

    $.getJSON(weatherAPI_URL,{
        lat:cityData[this.value].lat,
        lon:cityData[this.value].lon,
        appid:weatherMapAPIKey,
        units:'metric',  // 溫度是攝氏還是華氏
        lang:'zh_tw'
    })
    .done(function(data) {
        $("#result").append(`<p>氣溫: ${data.main.temp_min} ~ ${data.main.temp_max}<p>`);
        $("#result").append(
            `<p><img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'></p>`
        );
    })
    .fail(function(){ console.log("Error");})
    .always(function(){ console.log("Always");});
    
}