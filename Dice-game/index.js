// random iamge 1
var randomNumber = Math.floor(Math.random() * 6 + 1);
var diceImage = "dice" + randomNumber +".png";
var randomImage = "images/" + diceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage);



// random iamge 2
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var diceImage2 = "dice" + randomNumber2 + ".png";
var randomImage2 ="images/" + diceImage2;
var image2 =document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage2);

if(randomNumber > randomNumber2){

    document.querySelector("h2").innerHTML="player 1 won!" ;
}
else if(randomNumber < randomNumber2){
    document.querySelector("h2").innerHTML="player 2 won!" ;
}
else{
    document.querySelector("h2").innerHTML="ohh! it's Tie." ; 
}