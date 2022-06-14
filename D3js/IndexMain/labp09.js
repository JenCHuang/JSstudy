const svg = d3.select('body').append('svg')
    .attr('width', 500).attr('height', 400);
// 超出這個視窗者, 不顯示

const height_male = svg.append('g')
    .attr('transform', 'translate(100,100)');
height_male.append('line')
    .attr('x1', 0).attr('x2', 173.5)
    .style('stroke', 'blue').style('stroke-width', '2');
// 凡數值類的參數,  例如 x1,x2,y1,y2, 預設都是零
// style 可用 attr 取代
height_male.append('circle')
    .attr('cx', 173.5).attr('cy', 0).attr('r', 4)
    .style('fill', 'blue');
height_male.append('text')
    .attr('x', 0).attr('y', 20)
    .text("台灣男生平均身高173.5 cm");

const height_female = svg.append('g')
    .attr('transform', 'translate(100,200)');
height_female.append('line')
    .attr('x1', 0).attr('x2', 161.5)
    .style('stroke', 'pink').style('stroke-width', '2');
height_female.append('circle')
    .attr('cx', 161.5).attr('cy', 0).attr('r', 4)
    .style('fill', 'pink');
height_female.append('text')
    .attr('x', 0).attr('y', 20)
    .text("台灣女生平均身高161.5 cm");