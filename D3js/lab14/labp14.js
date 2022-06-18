//Data utilities
//先設定要處理資料的方式
//遇到NA就設定為undefined(JS的空值), 要不然就維持原本的字串
const parseNA = string => (string === 'NA' ? undefined : string);
// '===' 型別&值 都相等

//日期處理
// release_date: "1995-10-30"
//用 d3.timeParse ,  將形式為 '%Y-%m-%d' 的字串(string), 轉換為日期時間格式 (Date())
const parseDate = string => d3.timeParse('%Y-%m-%d')(string);
// d3.timeParse('%Y-%m-%d') 這一串為一個function, 所以可以輸入

// 資料轉換
// 將數字資料轉為數字 / 處理空值 / 多欄資料處理
// 取得感興趣資料
function type(d) {
    const date = parseDate(d.release_date);
    return {
        budget: +d.budget, // 在資料前給個 + 即轉為數字
        genre: parseNA(d.genre),  // 處理空值
        // 處理多欄資料
        genres:JSON.parse(d.genres).map(d=>d.name),
        // JSON.parse(): 將JSON格式字串 轉成 JSON
        // .map(d=>d.name): 將JSON內 標籤為name的值取出來
        homepage: parseNA(d.homepage),
        id: +d.id, // 轉為數字
        imdb_id: parseNA(d.imdb_id),
        original_language: parseNA(d.original_language),
        overview: parseNA(d.overview),
        popularity: +d.popularity, // 轉為數字
        poster_path: parseNA(d.poster_path),
        production_countries:JSON.parse(d.production_countries).map(d=>d.name),
        release_date: date,
        release_year: date.getFullYear(), // 增加資料: 取出年份
        revenue: +d.revenue, // 轉為數字
        runtime: +d.runtime, // 轉為數字
        tagline: parseNA(d.tagline),
        title: parseNA(d.title),
        vote_average: +d.vote_average, // 轉為數字
        vote_count: +d.vote_count // 轉為數字
    };
};

//資料篩選
function filterData(data) {
    return data.filter( // 設定條件: 滿足條件才回傳
        d => {  
            return (
                d.release_year > 1999 && d.release_year < 2010 &&
                d.revenue > 0 &&
                d.budget > 0 &&
                d.genre &&  // d.genre 要有值
                d.title     // d.title 要有值
            );
        }
    );
};

// 資料聚合
function prepareBarChartData(data){
    // onsole.log(data);
    const dataMap = d3.rollup( // 呼叫 D3 rollup
    // Groups and reduces the specified iterable of values 
    //                into an InternMap from key to value. 
        data, // 輸入data
        // 輸出 v
        // d3.sum(): sum([detail.revenue for detail in v]),
        //               where v is the group_ed data
        v => d3.sum(v, detail => detail.revenue), //將revenue加總
        // GroupBy 的指標
        d => d.genre //依電影分類groupby
    );
    // 此時 dataMap 為 InterMap 類別 (d3定義的objects)
    // 內含 資料  { key => value }
    //      [...dataMap][0][0] ==> 'action'
    //      [...dataMap][0][1] ==> 33656636378
    const dataArray = Array.from(dataMap, d=>({genre:d[0], revenue:d[1]}));
    // Array.from(): array generator, As (d[0],d[1] for d in dtaMap)
    return dataArray;
};

// 轉換數字表示式 (刻度用)
function formatTicks(d){
    return d3.format('~s')(d)
    .replace('M','mil')
    .replace('G','bil')
    .replace('T','tri')
};

function setupCanvas(data){
    // set svg
    const svg_width = 800;
    const svg_height = 500;
    // 設定 長條圖 邊界, 上邊留'標題'、'刻度'空間, 左邊留'標籤'空間
    const chart_margin = {top:80,bottom:40,left:80,right:40};
    const chart_width = svg_width - (chart_margin.left + chart_margin.right);
    const chart_height = svg_height - (chart_margin.top + chart_margin.bottom);
    // 在網頁中插入 svg元件 跟 g元件
    const this_svg = d3.select('.bar-chart-container')
                        .append('svg')
                        .attr('width', svg_width).attr('height',svg_height)
                        .append('g')
                        .attr('transform',`translate(${chart_margin.left},${chart_margin.top})`);
                        //                 as f-string in python
    
    //Set Scale: 三種寫法
    //寫法1: d3.extent 找到 revenue 中的 max & min 
    const xExtent = d3.extent(data, d=>d.revenue);
    const xScale_v1 = d3.scaleLinear().domain(xExtent) // domain: 要放的資料
                                    .range([0,chart_width]); //range: 塞圖表的空間
                                    // 把 資料(最小值到最大值) 塞滿圖表空間
    //寫法2:  0 ~ max
    const xMax = d3.max(data, d=>d.revenue);
    const xScale_v2 = d3.scaleLinear().domain([0, xMax]).range([0,chart_width]);
    //寫法3: Short writing for v2
    const xScale_v3 = d3.scaleLinear([0,xMax],[0, chart_width]);

    //垂直空間的分配- 平均分布給各種類
    // array.map() 會建立一個陣列，
    //             內容為原陣列的每一個元素經由回呼函式運算後所回傳的結果之集合。
    const yScale = d3.scaleBand()
                    .domain(data.map(d=>d.genre)) // 電影種類                
                    .rangeRound([0, chart_height]) // 塞圖表的空間, 平均分配給各bar
                    .paddingInner(0.25);  // 圖裡各bar的間隔
    
    //設定 bars 並畫出 bars
    const bars = this_svg.selectAll('.bar')
                        .data(data)
                        .enter()  // 畫出來
                        .append('rect') // 加入 bar
                                .attr('class','bar')
                                .attr('x',0)
                                .attr('y',d=>yScale(d.genre))
                                .attr('width',d=>xScale_v3(d.revenue))
                                .attr('height',yScale.bandwidth())
                                .style('fill','green');
    // 寫出 header
    const header = this_svg.append('g')
                            .attr('class','bar-header')
                            .attr('transform',`translate(0,${-chart_margin.top/2})`)
                            .append('text');
    header.append('tspan').text('Total revenue by genre in $US')
                        .style('font-size','2em');
    header.append('tspan').text('Years:2000-2009')
                        .attr('x',0).attr('y',20)
                        .style('font-size','0.8em').style('fill','red');
    // 設定格線
    const xAxis = d3.axisTop(xScale_v3)
                    .tickFormat(formatTicks)
                    .tickSizeInner(-chart_height) // 刻度線;  負號表示往下長 
                    .tickSizeOuter(0)
        //tickSizeInner : the length of the tick lines
        //tickSizeOuter : the length of the square ends of the domain path
    // 畫出格線
    const xAxisDraw = this_svg.append('g').attr('class','x axis').call(xAxis);

    const yAxis = d3.axisLeft(yScale).tickSize(0); // 設水平的格線
    //              一次設定好 tickSizeInner & tickSizeOuter
    const yAxisDraw = this_svg.append('g').attr('class','y axis').call(yAxis)
    yAxisDraw.selectAll('text').attr('dx','-0.6em');  // 讓文字跟圖分開一點
};


//Main Part
function ready(movies){
    const moviesClean = filterData(movies); // 套用篩選條件
    // console.log(moviesClean);
    const barChartData = prepareBarChartData(moviesClean).sort( // 加入排序
        (a,b)=> {return d3.descending(a.revenue, b.revenue)}
        // (a,b)=> {return  b.revenue - a.revenue}  // 和上面同結果
    ); 
    // sort(call back funciotn(a,b)), 
    //          if return of function < 0 ==> [a,b]
    //          if return of function > 0 ==> [b,a]
    console.log(barChartData);
    // 加入畫圖的設定
    setupCanvas(barChartData);
};

//Load Data
// d3.csv('movies.csv').then(res => console.log(res));
// 讀檔時, 掛入型態轉換, 即可把資料讀成需求的格式
// d3.csv('movies.csv',type).then(res => console.log(res));
// 整理篩選資料、統計資料 (透過 ready(movies) )
d3.csv('../movies.csv',type).then(res => ready(res));
