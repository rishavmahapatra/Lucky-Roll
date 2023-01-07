var i = 0;
function myFunction(){
  
var randomNumber1= Math.floor(Math.random() * 6) + 1;

var image1= "images/dice" + randomNumber1 + ".png";

    document.querySelector("img.img1").setAttribute("src", image1 );
 
    var randomNumber2= Math.floor(Math.random() * 6) + 1;

    var image2= "images/dice" + randomNumber2 + ".png";
    
        document.querySelector("img.img2").setAttribute("src", image2 );

  if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="You Win!";
    i++;
  } 
  else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="You Lose!";
    i--;
  }     
  else{
    document.querySelector("h1").innerHTML="It's a Draw !!";
  }
  document.querySelector("button p1").innerHTML="Roll Again🎲";

  document.querySelector("h2").innerHTML= "Your Total Score is: " + i ;
}
