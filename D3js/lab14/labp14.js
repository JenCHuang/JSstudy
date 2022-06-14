//Load Data
d3.csv('movies.csv').then(res=>console.log(res));

//Data utilities
//先設定要處理資料的方式
//遇到NA就設定為undefined(JS的空值), 要不然就維持原本的字串
const parseNA = string => (string === 'NA' ? undefined : string);
// '===' 型別&值 都相等
//日期處理
//用 d3.timeParse ,  將形式為 '%Y-%m-%d' 的字串(string), 轉換為日期時間格式 (Date())
const parseDate = string => d3.timeParse('%Y-%m-%d')(string);

//轉換為數字
function type(d){
    const date = parseDate(d.release_date);
    return{
        budget:+d.budget,
        genre:parseNA(d.genre),
        genres:JSON.parse(d.genres).map(d=>d.name),
        homepage:parseNA(d.homepage),
        id:+d.id,
        imdb_id:parseNA(d.imdb_id),
        original_language:parseNA(d.original_language),
        overview:parseNA(d.overview),
        popularity:+d.popularity,
        poster_path:parseNA(d.poster_path),
        production_countries:JSON.parse(d.production_countries),
        release_date:date,
        release_year:date.getFullYear(),
        revenue:+d.revenue,
        runtime:+d.runtime,
        tagline:parseNA(d.tagline),
        title:parseNA(d.title),
        vote_average:+d.vote_average,
        vote_count:+d.vote_count
    };
}