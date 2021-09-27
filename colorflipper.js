
// const colorOptions = ["green","red","rgba(130,149,120)","#f45933"];
// const hexValues =   [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ,
//                     'A' , 'B' , 'C' , 'D' , 'E' ,'F' ];

// const colorSwtchBtn = document.getElementById('colorSwtchBtn');
// const colorRandSwtchBtn = document.getElementById('colorRandSwtchBtn');
// const randHexPick = document.getElementById('randHexPick');
// const colorChange = document.querySelector('.color');

// //Event listener for original fn
// colorSwtchBtn.addEventListener('click',()=>{
//     //Get random number for items in colorOptions
//     const randNumber = getRandomNumber();
//     console.log(randNumber);
//     document.body.style.backgroundColor = colorOptions[randNumber];
//     colorChange.textContent = colorOptions[randNumber];
// })

// // change id to Random Color Generator.
// randHexPick.addEventListener('click',()=>{
//     colorSwtchBtn.style.visibility = "hidden";
//     colorRandSwtchBtn.style.visibility = 'visible';
// })

// //Event listener for random color fn.
// colorRandSwtchBtn.addEventListener('click',()=>{
//     currentColor = hexColorGenerator()
//     document.body.style.backgroundColor = currentColor; 
//     document.querySelector('.color').textContent = currentColor;
//     // console.log(currentColor);
// })


// function hexColorGenerator(){
//     var hexColorString = ['#'];
//     let i = 0;
//     while(i<6){
//         hexColorString.push(hexValues[Math.floor(Math.random()*hexValues.length)]);
//         i++;
//     }
//     return(hexColorString.join(''));

// }    
// //generate random whole number values based on the colorOptions list size.
// function getRandomNumber (){
//     return Math.floor(Math.random()*colorOptions.length);
// }





const colorOptions = ["green","red","rgba(130,149,120)","#f45933"];
const hexValues =   [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ,
                    'A' , 'B' , 'C' , 'D' , 'E' ,'F' ];
const colorRandSwtchBtn = document.getElementById('colorRandSwtchBtn');
const colorSwtchBtn = document.getElementById('colorSwtchBtn');
const randColorPickBtn = document.getElementById('randColorPickBtn');
const randHexPickBtn = document.getElementById('randHexPickBtn');



document.getElementById('colorRandSwtchBtn').disabled = true;
document.getElementById('randColorPickBtn').disabled = true;
document.getElementById('randColorPickBtn').style.color = 'black';
function randNumber(range){
    return Math.floor(Math.random()*range);
}

function hexColorGenerator(){
    hexString = '#';
    
    for(i = 0 ; i < 6 ; i ++ ){
        hexString += hexValues[Math.floor(Math.random()*hexValues.length)]
    }
    return hexString;
}


    //Random Colour Selector Based on pre-determined array
    randHexPickBtn.addEventListener('click',()=>{
        colorSwtchBtn.disabled = true;
        randHexPickBtn.disabled = true;
        randColorPickBtn.style.color = "";
        randColorPickBtn.disabled = false;
        colorRandSwtchBtn.disabled = false;
        
        
    })
        
        //Random Colour Selector Based on HEX array
    randColorPickBtn.addEventListener('click',()=>{
        colorSwtchBtn.disabled = false;
        randHexPickBtn.disabled = false;
        randColorPickBtn.disabled = true;
        colorRandSwtchBtn.disabled = true;
    
})


document.getElementById('colorSwtchBtn').addEventListener('click',()=>{
    hexColorCode = colorOptions[randNumber(colorOptions.length)]
    console.log(hexColorCode);
    document.body.style.backgroundColor = hexColorCode;
    document.querySelector('.color').textContent = hexColorCode;
})

document.getElementById('colorRandSwtchBtn').addEventListener('click',()=>{
    hexColorCode = hexColorGenerator();
    console.log(hexColorCode);
    document.body.style.backgroundColor = hexColorCode;
    document.querySelector('.color').textContent = hexColorCode;
})