status = "";

function setup(){
    canvas = createCanvas(490, 390);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 490, 390);
}

function start(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status: Currently Detecting the Objects";
}

function modelLoaded(){
    console.log("Model is Loaded");
    status = true;
}