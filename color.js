var n=6;
var colors=generaterandomcolors(n);

var squares= document.querySelectorAll(".square");
var pickedcolor=pickcolor();
var colordisp=document.getElementById("colordisp");
var messagedisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetbutton=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");


easybtn.addEventListener("click",function(){
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	n=3;
	colors=generaterandomcolors(n);
	pickedcolor=pickcolor();
	colordisp.textContent=pickedcolor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.background=colors[i];
		}else{
			squares[i].style.display="none";
		}
	}

});

hardbtn.addEventListener("click",function(){
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	n=6;
	colors=generaterandomcolors(n);
	pickedcolor=pickcolor();
	colordisp.textContent=pickedcolor;
	for(var i=0;i<squares.length;i++){
		
			squares[i].style.background=colors[i];
		
			squares[i].style.display="block";
		
	}
});

messagedisplay.textContent="";

resetbutton.addEventListener("click",function(){
	//generate all new colors
	colors=generaterandomcolors(n);
	//pick a new random color from array
	pickedcolor=pickcolor();
	colordisp.textContent=pickedcolor;
	this.textContent="new color";
	for(var i=0;i<squares.length;i++){
	//add initial colors to squares
	squares[i].style.background=colors[i];
}
	h1.style.background="black";
})

colordisp.textContent=pickedcolor;

for(var i=0;i<squares.length;i++){
	//add initial colors to squares
	squares[i].style.background=colors[i];
	// //add click listeners to squares
	squares[i].addEventListener("click",function(){
	 	var clickedcolor=this.style.background;
		if(clickedcolor===pickedcolor){
	 		messagedisplay.textContent="correct :)"
	 		resetbutton.textContent="to play again,please  click here";
	 		changecolors(clickedcolor);
	 		h1.style.background=clickedcolor;
		}
		else{
			this.style.background="#14213D";
			messagedisplay.textContent="Try Again !"
		}
	
	} );
}

function changecolors(color){
	//loop via all squares
	for(var i=0;i<squares.length;i++){
		//change each square's color 
		squares[i].style.background=color;
	}

}

function pickcolor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generaterandomcolors(num){
	//make an array
	var arr=[]
	//repeat num times
	for(var i=0;i<num;i++){
		//generate random color and push into arr
		arr.push(randomcolor());	

	}
	//return array
	return arr;
}

function randomcolor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";//add space after commas otherwise even if correct color is selected it would show try again:5th bookmark 
}
