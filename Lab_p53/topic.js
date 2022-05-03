let topic = [
    "尚未開學",
    "國定假日",
    "環境準備",
    "隨機",
    "重複"
]

let startDate = new Date();

function setMonthAndDay(startMonth,startDay){
// 一次設定好月份跟日期
    startDate.setMonth(startMonth-1,startDay); // 設定的月份要減一才符合JS的function
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
};

setMonthAndDay(2,21);