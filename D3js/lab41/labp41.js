const friends = {
    steven: ['Apple', 'Orange', 'Lemon'],
    natalia: ['Apple', 'Orange'],
    clinton: ['Apple', 'Cherry', 'Peach', 'Orange']
};

const thisSVG = d3.select('svg');

d3.selectAll('button').on('click', click);

// d3.select('body').on("keypress", keyEvent);
// https://www.educative.io/answers/how-to-get-keys-values-and-entries-in-javascript-object
// function keyEvent(e){
//     e.preventDefault();
//     if (e.key == 'ArrowLeft'){
//         let button = document.getElementsByClassName('steven')[0];
//         button.focus();
//         button.click();
//     };
//     if (e.key == 'Enter') {
//         let button = document.getElementsByClassName('steven')[0];
//         button.focus();
//         button.click();
//     };
// };

function click() {
    const thisFruitList = friends[this.dataset.name];
    // this: 驅動click()的元件, 此處即被按下的button
    // console.log(thisFruitList);
    update(thisFruitList);
};

function update(data){
    thisSVG.selectAll('text').data(data,d=>d)
            .join(
                // 進入效果
                enter => {
                    enter.append('text')
                        .text(d=>d)
                        .attr('x',-100).attr('y',(d,i)=>50+i*30) //文字出現的起始
                        .style('fill','green')
                        .transition().attr('x',30); //文字出現後, 移動到x=30
                },
                // 更新效果
                update => {
                    update.transition() // 移動
                        .style('fill','blue') // 更新時, 將文字轉為藍色
                        .attr('y',(d,i)=>50+i*30); // 重算文字位置, 並移過去
                },
                // 離開效果
                exit => {
                    exit.transition() // 移動
                        .attr('x',150) // 將文字往右扔
                        .style('fill','red')
                        .remove() // 扔完文字後, 將該物件刪除
                }
            );
};