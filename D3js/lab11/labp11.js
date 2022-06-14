//get csv file

// d3.csv('harry_potter.csv').then(
//     res => console.log('Local CSV:', res)
// );

//==============================================
//get csv file in internet

// d3.csv('https://raw.githubusercontent.com/ryanchung403/dataset/main/Housing_Dataset_Sample.csv')
//     .then(
//         res => {
//             console.log('Local CSV:', res);
//         }
//     );

//==============================================
//get json file

// d3.json('harry_potter.json').then(
//     res => console.log('Local json:', res)
// );

//==============================================
//get json file in internet

// d3.json('https://api.themoviedb.org/3/search/movie?api_key=YourKeyHere&language=zh-TW&query=%E7%80%91%E5%B8%83')
// d3.json('https://api.chucknorris.io/jokes/random')
//     .then(
//         res =>{
//             console.log('API json:',res);
//         }
//     );

//==============================================
//get local multi-files

// const potter = d3.csv('data/harry_potter.csv');
const potter = d3.json('harry_potter.json');
const rings = d3.csv('lord_of_the_rings.csv');
Promise.all([potter, rings]).then(
    res => {
        // debugger;
        // console.log('potter:', res[0]);
        // console.log('rigns:', res[1]);
        // 一次show兩個
        console.log('Multiple Request:', res);
        // 合併兩個table
        // console.log('Concat:', [...res[0], ...res[1]]);
        let combinedData = [...res[0],...res[1]];
        debugger;
    }
);
