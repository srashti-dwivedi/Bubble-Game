


// here making bubble
let score=0
document.querySelector('.score').textContent=score
hitVal=0
function ScoreRun(){
   
    
        score+=10
        document.querySelector('.score').textContent=score

}







function makebubble(){

    document.querySelector(".pbootom")
let cluter=''
for (var i =0; i<189;i++){
    rn= Math.floor((Math.random() * 10))
    cluter+=`<div class="circle">${rn}</div>`
}
document.querySelector('.pbootom').innerHTML=cluter;
}


// here getting hitval

function hitScore(){
 hitVal=Math.floor((Math.random() * 10))
let hitScore=document.querySelector('.hitbox')
hitScore.textContent=hitVal

}

//  here running time
let time =60
function Runtimer(){
    
  
    var timer=setInterval(()=>{
        if(time>0){
            time--;
            document.querySelector(".timerbox").textContent=time
        }
    else{
        clearInterval(timer)
        document.querySelector('.pbootom').innerHTML='<div class="end"><h1><center>Game is Over</center></h1></div>';
        document.querySelector('.pbootom').style.backgroundColor="pink"

    }
    },1000)
}


let clickval=0

document.querySelector(".pbootom").addEventListener("click",(e)=>{
     clickval=e.target.innerHTML
     if (clickval==hitVal){
      
          ScoreRun()
        hitScore()
        makebubble()
        
     }
    
})



hitScore()
makebubble()
Runtimer()

