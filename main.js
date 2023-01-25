function setup(){
    canvas=createCanvas(900,550);
    canvas.position(150,180);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,250,100,350,350);
    fill("#32b836");
    rect(185,50,30,450);
    rect(635,50,30,450);
    rect(189,35,450,30);
    rect(189,485,450,30);
    fill("#c22f2f");
    circle(200,50,40);
    circle(200,500,40);
    circle(650,50,40);
    circle(650,500,40);
    

    

}

function preload(){
    
}