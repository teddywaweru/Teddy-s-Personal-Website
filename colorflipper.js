
const colorOptions = ["green","red","rgba(130,149,120)","#f45933"];
const hexValues =   [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ,
                    'A' , 'B' , 'C' , 'D' , 'E' ,'F' ];

const colorSwtchBtn = document.getElementById('colorSwtchBtn');
const colorRandSwtchBtn = document.getElementById('colorRandSwtchBtn');
const randHexPick = document.getElementById('randHexPick');
const colorChange = document.querySelector('.main-container');

//Event listener for original fn
colorSwtchBtn.addEventListener('click',()=>{
    //Get random number for items in colorOptions
    const randNumber = getRandomNumber();
    console.log(randNumber);
    document.body.style.backgroundColor = colorOptions[randNumber];
    colorChange.textContent = colorOptions[randNumber];
})

// change id to Random Color Generator.
randHexPick.addEventListener('click',()=>{
    colorSwtchBtn.style.visibility = "hidden";
    colorRandSwtchBtn.style.visibility = 'visible';
})

//Event listener for random color fn.
colorRandSwtchBtn.addEventListener('click',()=>{
    hexColorGenerator();    
    
})


function hexColorGenerator(){
    var hexColorString = ['#'];
    let i = 0;
    while(i<6){
        hexColorString.push(hexValues[Math.floor(Math.random()*hexValues.length)]);
        i++;
    }
    console.log(hexColorString);
    console.log(hexColorString.join(""));
    document.body.style.backgroundColor = hexColorString.join("")




}    
//generate random whole number values based on the colorOptions list size.
function getRandomNumber (){
    return Math.floor(Math.random()*colorOptions.length);
}
