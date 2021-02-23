var randomvariable=Math.floor(((Math.random()*6)+1));

var source="dice"+randomvariable+".png";

var image1=document.querySelector(".img1");

image1.setAttribute("src",source);

var randomvariable2=Math.floor(((Math.random()*6)+1));

var source2="dice"+randomvariable2+".png";

var image2=document.querySelector(".img2");

image2.setAttribute("src",source2);

if(randomvariable>randomvariable2)
{
  document.querySelector("h1").innerHTML="🚩Player 1 wins";
}

else if(randomvariable<randomvariable2)
{
  document.querySelector("h1").innerHTML="Player 2 wins🚩";
}

else
{
  document.querySelector("h1").innerHTML="Draw !";
}
