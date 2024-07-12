console.log("welcome to tik tak toe");
let turn="X";
const changeturn=()=>{
    return turn=="X"?"0":"X";
}
const cheeckwin=()=>{
    let boxtexts=document.getElementsByClassName('boxcontext')
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [1,4,7],
        [2,5,8],
        [0,4,8]
        [2,4,6]
    ]
 wins.forEach(e=>{
    if (((boxtext)[e[0]].innerText==boxtext[e[1]].innerText)&&((boxtext)[e[2]].innerText==boxtext[e[1]].innerText)&&((boxtext)[e[0]].innerText!=""))
         document.querySelector('info').innerText=boxtext[e[0]].innnertext+"won";
 )
}
//GAME LOGIC
let boxes=document.getElementsByClassName("box")
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxcontext');
    element.addEventListener('click',(e)=>{
        if (boxtext.innerText=='')
            {
                boxtext.innerText=turn;
                turn=changeturn();
                document.getElementsByClassName("info")[0].innerText="turn for"+ turn;
            }
    }
    )
})
