var target="magenta";
var gcount=0;
var finished=false;
var colors=["blue","cyan","gold","gray","green","magenta","orange","red","white","yellow"];

//function game()
//{
  while(!finished)
  {
  guess=prompt("I have one of the following colors in mind:\n\n"+colors+"\n\nWhich one is it?");
  gcount++;

  if(typeof(guess)!="string"||colors.lastIndexOf(guess)==-1)
  {
    alert("Sorry!"+"Cannot recognize your color!");
    finished=false;
  }
  else if(guess<target)
  {
    alert("Incorrect guess!"+"Your guess is alphabetically lower."+"Try again!");
    finished=false;
  }
  else if(guess>target)
  {
    alert("Incorrect guess!"+"Your guess is alphabetically higher."+"Try again!");
    finished=false;
  }
  else
  {
    alert("Congrats!"+"You got it!"+"You will see the color in the background."+"\n\nYou found it in"+" "+gcount+" "+"guess(es)!");
    finished=true;
  }
 }
//}
