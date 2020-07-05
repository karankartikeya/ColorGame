var numsquares=6;
var colors = [];
var pickedcolor;
var squares=document.querySelectorAll(".square");
var colordisplay=document.getElementById("colordisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetbutton=document.querySelector("#reset");
var modebuttons=document.querySelectorAll(".mode");
var about=document.querySelector("#about");

init();

function init(){
	//mode button lsitener
	for(var i=0; i<modebuttons.length; i++){
	 modebuttons[i].addEventListener("click",function(){
         modebuttons[0].classList.remove("selected");
         modebuttons[1].classList.remove("selected");
         this.classList.add("selected");

        this.textContent ==="Easy" ? numsquares=3 : numsquares=6;
        reset();
     });
    }


    for(var i=0; i<squares.length;i++){
	//add click listeners to squares
	squares[i].addEventListener("click",function(){

		//grab color of clicked square
		var clickedcolor=this.style.backgroundColor;
		//compare color to picked color
		if(clickedcolor === pickedcolor){
			messageDisplay.textContent="Correct!!!";
			resetbutton.textContent="Play again?";
            h1.style.backgroundColor=pickedcolor;
			changeColors(clickedcolor);
		}
		else{
			this.style.backgroundColor="#232323"
			messageDisplay.textContent="Try again";
		}
  
	});
}
 reset();

}




function reset(){

	colors=generateRandomColors(numsquares);
	//pick new random color
	pickedcolor=pickcolor();
	//cahnge colordisplay to match pickedcolor
	colordisplay.textContent=pickedcolor;
	//change colors of squares
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display="block";
		squares[i].style.backgroundColor=colors[i];
	    }
	else{
		squares[i].style.display="none";
	}
}
	h1.style.backgroundColor="steelblue";
	resetbutton.textContent="New colors";
	messageDisplay.textContent="";


}

/**easybtn.addEventListener("click",function(){
	hardbtn.classList.remove("selected")
	easybtn.classList.add("selected");
	numsquares=3;
	colors=generateRandomColors(numsquares);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
	messageDisplay.textContent="";
});

hardbtn.addEventListener("click",function(){
	
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	numsquares=6
	colors=generateRandomColors(numsquares);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
	for(var i=0; i<squares.length; i++){
		
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
	}
	messageDisplay.textContent="";
})
*/
resetbutton.addEventListener("click", function(){
	//geneerate all new colors
	colors=generateRandomColors(numsquares);
	//pick new random color
	pickedcolor=pickcolor();
	//cahnge colordisplay to match pickedcolor
	colordisplay.textContent=pickedcolor;
	//change colors of squares
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";
	this.textContent="New colors";
	messageDisplay.textContent="";

});




function changeColors(color){
	//loop through all squares
	for(var i=0; i<colors.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor=color;
	}
}

function pickcolor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}


function generateRandomColors(num){
	//make an array
	var arr=[]
	//add num random colors to array
	for(var i=0; i<num; i++){
		//get random colors and push into array
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0-255
	var r=Math.floor(Math.random() * 256)
	//pick a "green" from 0-255
	var g=Math.floor(Math.random() * 256)
	//pick a "blue" from 0-255
	var b=Math.floor(Math.random() * 256)
	
	return "rgb(" + r + ", " + g + ", " + b + ")";
}