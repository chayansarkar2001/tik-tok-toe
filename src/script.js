let turn = 'X'
let isgameover=false;
let boxes = document.getElementsByClassName('box')
let resetbtn = document.getElementById('reset')
let color = document.querySelector('#colorpicker');
const reset = ()=>{
  Array.from(boxes).forEach(element => {
    element.querySelector('.boxtext').innerText='';
  })
  turn = 'X';
  document.getElementsByClassName('info')[0].innerText= "Turn for "+ turn;
  document.querySelector(".line").style.width = '0';
  document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0"; 
  isgameover=false;
}

Array.from(boxes).forEach((element)=>{
  let boxtext = element.querySelector('.boxtext');
  element.addEventListener('click',()=>{
    if(boxtext.innerText == '' && !isgameover){
      boxtext.innerText=turn;
      turn = turn === 'X' ? '0' : 'X';
      checkWin();
      if(!isgameover){
      document.getElementsByClassName('info')[0].innerText= "Turn for "+ turn; 
      }  
    }
  })
})
  
resetbtn.addEventListener('click',reset);
color.addEventListener('input',()=>{ document.getElementsByClassName('container')[0].style.color = color.value;
})

const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && 
           (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && 
           (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }
    })
}

// @media screen and (max-width: 950px)
// {
//     .gameContainer{
//         flex-wrap: wrap;
//     }
//     .gameInfo{
//         margin-top: 34px;
//     }
//     .gameInfo h1{
//         font-size: 1.5rem;
//     }
//     .container { 
//         grid-template-rows: repeat(3, 20vw);
//         grid-template-columns: repeat(3, 20vw);
//     }
// }
