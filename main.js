var NoseX = 0
var NoseY = 0
function preload() {
imgNose = loadImage("https://i.postimg.cc/X7PVR9p3/waza20.png");
}
function setup() {
    canvas = createCanvas(350, 350);
    canvas.center();
    video = createCapture(VIDEO)
    video.size(350, 350);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoad);
    poseNet.on("pose", poses);
}
function draw() {
    image(video, 0, 0, 350, 350);
    fill(255, 0, 0);
    circle(NoseX, NoseY, 20);
image(imgNose, NoseX - 80, NoseY - 100, 150, 150); 



}
function modelLoad() {
    console.log("POSENET LOADED");

}
function poses(results) {

    if (results.length > 0) {
        console.log(results);
        console.log("x, " + results[0].pose.nose.x);
        console.log("y, " + results[0].pose.nose.y);
        console.log(results[0].pose.nose);
NoseX =  results[0].pose.nose.x;
NoseY =  results[0].pose.nose.y;
    }
}