
   
   /*
var uCoi = "U";
 var cCoi = Math.random();
  var w = "YOU WIN !!";
   var l = "YOU LOSE HUMAN !";
    var d = document;
     var dmS = d.getElementById("myStatu");
	  var dsC = d.getElementById("Score");
	   var dsT = d.getElementById("Statu");
	   



function rp() {window.location.href=window.location;}

function r() {window.uCoi = "ROCK"; dmS.innerHTML =("Player: "+uCoi);}
 function p() {window.uCoi = "PAPER"; dmS.innerHTML =("Player: "+uCoi);}
  function s() {window.uCoi = "SCISSORS"; dmS.innerHTML =("Player: "+uCoi);}

if (cCoi < 0.32) {var cCoi = "ROCK";} else if (cCoi < 0.62) {var cCoi = "PAPER";} else {var cCoi = "SCISSORS";} 
	var print = "Computer:  "+cCoi+"<br>"; 


*/



function g(){
	if (uCoi == cCoi) {
		dsT.innerHTML =(print);
		dsC.innerHTML =("DRAW !");
		drU.innerHTML =("|| Play Matches Play ||");
		
	} else if (uCoi == "ROCK"){
		if (cCoi == "PAPER") {
			dsT.innerHTML =(print);
			dsC.innerHTML =(l);
			drU.innerHTML =("|| Paper Covers Rock ||");
			
		} else {
			dsT.innerHTML =(print);
			dsC.innerHTML =(w);
			drU.innerHTML =("|| Rock Breaks Scissors ||");
		}
	}else if (uCoi == "PAPER") {
		if (cCoi == "ROCK") {
			dsT.innerHTML =(print);
			dsC.innerHTML =(w);
			drU.innerHTML =("|| Paper Covers Rock ||");
		} else {
			dsT.innerHTML =(print);
			dsC.innerHTML =(l);
			drU.innerHTML =("|| Scissors Cuts Paper ||");
		}
	} else {
		if (cCoi == "PAPER") {
			dsT.innerHTML =(print);
			dsC.innerHTML =(w);
			drU.innerHTML =("|| Scissors Cuts Paper ||");
		} else {
			dsT.innerHTML =(print);
			dsC.innerHTML =(l);
			drU.innerHTML =("|| Rock Breaks Scissors ||");
			
		}
	}
}

  //# sourceURL=pen.js

  
function myFunction() {	 	
	alert("Dragon activity about your GPS location has been reported. Particular attention should be paid to open roadways with hot dark asphalt and updrafts and also ice-cream shops.");		
}

