function setup(){
    canvas= createCanvas(640,480);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    
}
function draw(){
    image(video,50,60,530,360);
   fill("red"); 
   stroke("yellow");
circle(50,50,80);
circle(50,430,80);
circle(590,50,80);
circle(590,430,80);
fill("green");
stroke("green");
    rect(90,40,460,20);
    rect(90,420,460,20);
    rect(40,90,20,300);
    rect(580,90,20,300);
   

}
function take_snapshot(){
    save("mypicture.png");

}
