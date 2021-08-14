var randomNumber1;
randomNumber1 = Math.floor(Math.random()* 6)  +1;
randomNumber2 = Math.floor(Math.random()* 6)  +1;
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");
if(randomNumber1>randomNumber2){
    document.getElementById("result").innerHTML="Player 1 Won !!";
}
else if(randomNumber1<randomNumber2){
    document.getElementById("result").innerHTML="Player 2 Won !!";
}
else{
    document.getElementById("result").innerHTML="It's a Tie !!"; 
}

