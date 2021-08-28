canvas =document.getElementById('my_canvas');
ctx =canvas.getContext("2d");
   
rover_width = 100;
rover_height =90;
nasa_images =["mar1.jpg","mar2.jpg","mar3.JPG","mar4.JPG"];
var rondom_number =Math.floor(Math.random()*4)
console.log(rondom_number);
background_image=nasa_images[rondom_number]
console.log(background_image);
roverimage="marsamarth.jpeg"

roverx=10
rovery=10

function add(){
    background_imagetag=new Image()
    background_imagetag.onload=uploadbackground
    background_imagetag.src=background_image
    rover_imagetag=new Image()
    rover_imagetag.onload=uploadrover
    rover_imagetag.src=roverimage
}
function uploadbackground(){
    ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height)
}
function uploadrover(){
    ctx.drawImage(rover_imagetag,roverx,rovery,rover_width,rover_height)
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    keyPressed=e.keyCode
    console.log(keyPressed)
    if(keyPressed == '38'){
        up()
        console.log("up")
        
        
    }
    if(keyPressed == '40'){
        down()
        console.log("down")
        
        
    }
    if(keyPressed == '37'){
        lift()
        console.log("lift")
        
        
    }
    if(keyPressed == '39'){
        right()
        console.log("right")
        
        
    }
}
function up()
{
	if(rovery >=0)
	{
		rovery = rovery - 10;
		console.log("When up arrow is pressed,  x = " + roverx + " | y = " +rovery);
		 uploadBackground();
		 uploadrover();
		 
	}
}
function down()
{
	if(rovery <=500)
	{
		rovery =rovery+ 10;
		console.log("When down arrow is pressed,  x = " + roverx + " | y = " +rovery);
		uploadBackground();
		 uploadrover();
	}
}
function left()
{
	if(roverx >= 0)
	{
		roverx =roverx - 10;
		console.log("When left arrow is pressed,  x = " + roverx + " | y = " +rovery);
		uploadBackground();
		 upload();
	}
}
function right()
{
	if(roverx <= 700)
	{
		roverx =roverx + 10;
		console.log("When right arrow is pressed,  x = " + roverx + " | y = " +rovery);
		uploadBackground();
		uploadrover();
   }
}
	
