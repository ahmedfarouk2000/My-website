




var hiddenHeart= document.querySelectorAll('.hiddenHeart')
var borderHeart= document.querySelectorAll('.borderHeart')
// for( var i=0 ; hiddenHeart.length>i;i++){
for (const hiddenHeart0 of hiddenHeart) {
hiddenHeart0.addEventListener('click',function(e){

//  alert('asdasdas')
//  CurrentHeart.style.color='green'
hiddenHeart0.classList.toggle("hiddenHeartRed")
currentIndex=Array.from(hiddenHeart).indexOf(hiddenHeart0)
borderHeart[currentIndex].classList.toggle("borderHeartRed")
var randomDeg =(Math.floor(Math.random() * 60) -30);
var randomSize =Math.random() * 1.5;
if (randomSize<1) 
    randomSize+=1

// console.log(randomSize);

// console.log(randomDeg);
// previousHeart =hiddenHeart.style.transform
if (hiddenHeart0.style.transform ==''){
    hiddenHeart0.style.transform = `rotate(${randomDeg}deg)`;
    hiddenHeart0.style.transform+=`scale(${randomSize})`;
    hiddenHeart0.style.opacity='1'

    // borderHeart[currentIndex].style.transform = `rotate(${randomDeg}deg)`;
    // borderHeart[currentIndex].style.transform+=`scale(${randomSize+0.1})`;
    borderHeart[currentIndex].style.opacity=`0`;
}
else {
    hiddenHeart0.style.transform = ``;
    hiddenHeart0.style.transform+=``;
    hiddenHeart0.style.opacity='0.5'
    borderHeart[currentIndex].style.opacity=`1`;

    // borderHeart[currentIndex].style.transform = ``;
    // borderHeart[currentIndex].style.transform+=``;
}



// hiddenHeart.style.transform = "rotate(90deg)";

// borderHeart.classList.toggle("borderHeartRed")
})

}

document.addEventListener('mousemove',function(e){
    // document.querySelector('img').style.top=e.clientY+'px'
    console.log(document.querySelector('.eye'));
    var rect = document.querySelector('.eye').getBoundingClientRect();
    var ball=document.querySelector('.Ball')
   
    
    console.log(rect.top, rect.right, rect.bottom, rect.left);
    centerPointX = rect.left +(rect.right - rect.left)/2 
    centerPointY =   rect.top +(rect.bottom - rect.top)/2 
    currentRadius=30 // assume for now its the c enter point
    // we will assume that eyeball at center always radius ==10 diam==20 center at 
    DistanceFromBall=  Math.sqrt(Math.pow(e.clientY-centerPointY,2)+Math.pow(e.clientX-centerPointX,2))
    console.log(Math.pow(e.clientY-centerPointY,2));
    console.log('currentRadius=',centerPointX)
    console.log('currentRadius=',centerPointY)
    console.log('distancefromball=',DistanceFromBall)
    console.log('e.clientX=',e.clientX)
    console.log('e.clientY=',e.clientY)
    DistanceX = e.clientX-centerPointX
    console.log('DistanceX',DistanceX);
    DistanceY = e.clientY-centerPointY

    if (DistanceFromBall<currentRadius){ // inside the eye
        // currentD
        // if (e.clientX > centerPointX){ // mouse on its right

        // }
      
        // NewBallY= e.clientY - centerPointY
        ball.style.top=DistanceY+'px'
        if (DistanceX >=0){
            ball.style.left=`calc(49% + ${Math.abs(DistanceX)}px)`
            
        }
        else {
            ball.style.left=`calc(49% - ${Math.abs(DistanceX)}px)`
        

        }
    
        
    }
    else { // outside the eye 
        console.log('elsssssssse');
        currentRadiusNew=currentRadius-10
        NewYBall =  Math.abs((currentRadius* DistanceY) / DistanceX)
        // ball.style.left=`calc(49% + ${Math.abs(currentRadius)}px)`
        ball.style.top=NewYBall+'px'

        if (DistanceY >=0){
            ball.style.top=NewYBall+'px'
            if (DistanceY >currentRadius){
                ball.style.top=currentRadiusNew+'px'
            }
        }
        else {
            ball.style.top=-NewYBall+'px'
            if (DistanceY <-currentRadius){
                ball.style.top=-currentRadiusNew+'px'
            }
        }
       
        if (DistanceX >=0){
            ball.style.left=`calc(49% + ${Math.abs(DistanceX)}px)`
                console.log('iff');
            if (DistanceX >currentRadius){
                ball.style.left=`calc(49% + ${Math.abs(currentRadiusNew)}px)`
            }
        }
        else {
            ball.style.left=`calc(49% - ${Math.abs(DistanceX)}px)`
            console.log('else');
            if (DistanceX <-currentRadius){
                ball.style.left=`calc(49% - ${Math.abs(currentRadiusNew)}px)`
            }
        }
     

    }
    
    // console.log(e.clientX)
    // console.log(e.clientY)
    })




document.addEventListener("keydown",function(e){
    // console.log(e);
    var rightArrow = document.querySelector('.rightarrow')
    var leftArrow = document.querySelector('.leftarrow')
    if (e.key=='ArrowRight'){
        rightArrow.click() ;
    }
    else if (e.key=='ArrowLeft'){
        leftArrow.click() ;
    }

})


var Ball =document.querySelector('.Ball')
var eye =document.querySelector('.eye')
eye.addEventListener('click',function(e){
    if (e.target==eye){
        Ball.classList.toggle("BallRed")
    }
})
Ball.addEventListener('click',function(e){
    // console.log(Ball.style.color);
    if (e.target==Ball){
        Ball.classList.toggle("BallRed")
    }
})


var eyecard =document.querySelectorAll('.eyecard')
var cursorEye =document.querySelector('.cursorEye')

for( var i=0 ;i<eyecard.length ;i++){
eyecard[i].addEventListener('mousemove',function(e){
    cursorEye.style.opacity='1'
    cursorEye.style.top=e.clientY+'px'
    cursorEye.style.left=e.clientX+'px'

})
eyecard[i].addEventListener('mouseleave',function(e){
    cursorEye.style.opacity='0'
})
}





function EnterCards() {
    var cards =document.querySelectorAll('.MostLeftImageLayer')
    var timer=300
    for ( const card of cards){
    setTimeout(function(){ 
        card.style.opacity='1'
     }, timer+=500);

    }
}

EnterCards()







// function EnterInfo() {
//     var infos =document.querySelectorAll('.CurrentInfo')
//     var timer=300
//     for ( const info of infos){
//     setTimeout(function(){ 
//         info.style.opacity='1'
//      }, timer+=500);

//     }
// }
// EnterInfo()



var personalImage= document.querySelector('.SecChildLeft')
var hoveredOn=false
personalImage.addEventListener('mouseenter',function(){
    // console.log('enter');
    // clearInterval(SlideUp)
    hoveredOn=true
  var hoverMe =document.querySelector('.shadowAnimation')
  hoverMe.style.top='0px'
    var timer=100
    // var timer=300
  setTimeout(function(){ 
    hoverMe.style.background='rgba(0, 195, 218,0.5)'
 }, timer);

//   hoverMe.style.opacity='0.4'
//   console.log(hoverMe.style.top);
})

personalImage.addEventListener('mouseleave',function(){
  
  var hoverMe =document.querySelector('.shadowAnimation')
  hoveredOn=false
  hoverMe.style.top='100%'

  var timer=100
    // var timer=300
  setTimeout(function(){ 
    hoverMe.style.background='rgba(0, 195, 218,0.5)'
 }, timer);
})


SlideUp =setInterval(function(){
    if (!hoveredOn){
    // console.log('interval');
    var hoverMe =document.querySelector('.shadowAnimation')
    hoverMe.style.top='70%'
        setTimeout(function(){
                hoverMe.style.top='100%'
        },1000)
    }
},5000)





const checkOn2 = document.querySelector('.waitMe2');
const observer = new MutationObserver((mutations, obs) => {
    console.log('looop')
    var English =document.querySelector('.English')
    var Deutsch =document.querySelector('.Deutsch')
    var Arabic =document.querySelector('.Arabic')
    var Skills =document.querySelectorAll('.Skill')
    Alllanguage=document.querySelectorAll('.language')
  
    // const waitMe2 = document.querySelector('.waitMe2');
    if(checkOn2.classList.contains('active')){
        // console.log('yess')
    var timer=0
    for ( const language of Alllanguage){
    setTimeout(function(){ 
        if (language.classList.contains('English')){
            console.log('English 1')
            English.style.transition = "all 1s";
            English.style.right='10%'
        }
        if (language.classList.contains('Deutsch')){
            Deutsch.style.transition = "all 1s";
            Deutsch.style.right='25%'
            console.log('Deutsch 1')
        }
        if (language.classList.contains('Arabic')){
            Arabic.style.transition = "all 1s";
            Arabic.style.right='0%'
            console.log('Arabic 1')
        }
     
     }, timer+=500);

    }

    setTimeout(function(){
        var timer2=0
        for ( const Skill of Skills){
            setTimeout(function(){ 
                Skill.style.opacity='1'
             }, timer2+=400);
        
            }
    },timer)
   



}
else {
    console.log('ELSEEE');
    for ( const language of Alllanguage){
        if (language.classList.contains('English')){
            English.style.transition = "all 0s";
            English.style.right='100%'
            console.log('English 2')
        }
        if (language.classList.contains('Deutsch')){
            Deutsch.style.transition = "all 0s";
            Deutsch.style.right='100%'
            console.log('Deutsch 2')
        }
        if (language.classList.contains('Arabic')){
            Arabic.style.transition = "all 0s";
            Arabic.style.right='100%'
            console.log('Arabic 2')
        }
        }

    // var timer=0
    for ( const Skill of Skills){   
            Skill.style.opacity='0'
        }
}

  });
  
  observer.observe(checkOn2, {
    attributes: true,
    // subtree: true
  });

  


// document.addEventListener('DOMContentLoaded', (event) => {
//     console.log('loadeeeeed');
//   })


var checkOn =document.querySelector('.waitMe')
const observer2 = new MutationObserver((mutations, obs) => {
    var infos =document.querySelectorAll('.CurrentInfo')
    if(checkOn.classList.contains('active')){
        // console.log('yess')
    var timer=300
    for ( const info of infos){
    setTimeout(function(){ 
        info.style.opacity='1'
     }, timer+=500);

    }
}
else {
    // console.log('else');
    for ( const info of infos){
        info.style.opacity='0'
        }
}

  });
  
  observer2.observe(checkOn, {
    attributes: true,
    // subtree: true
  });
  


//   var test =document.querySelector('.DeutschTitle::after')

//   test.addEventListener('click',function(){
//       console.log('maan am here');
//   })

var SecButton=document.querySelector('.SecButton')
SecButton.addEventListener('click',function(){
    window.open('https://drive.google.com/file/d/1NJHiq_313jZVbr0TgPStXyabqBeKc32U/view?usp=sharing', '_blank');
  })

var CV=document.querySelector('.FirstButton')
CV.addEventListener('click',function(){
    window.open('googl.com', '_blank'); // put her the cv
  })