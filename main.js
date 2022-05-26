function preload(){

}

function setup(){
    video = createCapture(VIDEO);
    video.size(500 , 500);
    video.position(30 , 150);

    canvas = createCanvas(500 , 500);
    canvas.position(550 , 150);

    poseNet = ml5.poseNet(video , modelloaded);
    poseNet.on("pose",gotresults)


}

function draw(){
    background("#f29e30");

}

function modelloaded(){
    console.log("Model is Loaded");

}

function gotresults(results){
    if(results.length > 0){
        console.log(results);

    }
}