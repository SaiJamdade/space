var canvas = new fabric.Canvas("myCanvas");

 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
        top : block_y,
        left : block_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '83') 
	{
	    new_image("sun.png");
		console.log("S");
	}
	if(keyPressed == '77')
	{
		block_x = 50;
		new_image("mercury.png");
		console.log("M");
	}
	
	if(keyPressed == '86')
	{
		block_x = 100;
		new_image("download.jpg");
		console.log("V");
	}
	if(keyPressed == '69')
	{
		block_x = 200;
		new_image("download (1).jpg");
		console.log("E");
	}
	if(keyPressed == '65')
	{
		block_x = 300;
	    new_image("mars.jpg");
		console.log("A");
	}
	
    if(keyPressed == '74')
	{
		block_x = 400;
	    new_image("jupiter.jpg");
		console.log("J");
	}

    if(keyPressed == '84')
	{
		block_x = 500;
	    new_image("download (2).jpg");
		console.log("T");
	}

    if(keyPressed == '85')
	{
		block_x = 600;
	    new_image("uranus.png");
		console.log("U");
	}

    if(keyPressed == '78')
	{
		block_x = 700;
	    new_image("download (3).jpg");
		console.log("N");
	}

    if(keyPressed == '80')
	{
		block_x = 800;
	    new_image("download (4).jpg");
		console.log("P");
	}
}

