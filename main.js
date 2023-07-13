function preload() {

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

    }
}