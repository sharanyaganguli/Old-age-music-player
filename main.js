song="";
left_wrsitX= 0;
left_wrsitY= 0;


score_leftwrist= 0;

function setup(){

    canvas=createCanvas(600,500);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();

    posenet= ml5.poseNet(video, model_loaded());
    posenet.on('pose', gotPoses);
}

function model_loaded(){
    console.log("posenet is initalised");
}

function gotPoses(results){
    if (results.length>0) {
       console.log(results);
       
      left_wristX= results[0].pose.leftWrist.x;
      left_wristY= results[0].pose.leftWrist.y;
      score_leftwrist= results[0].pose.keypoints[9].score;

      console.log("leftwrist= " + left_wristX + left_wristY + "score= " + score_leftwrist);
        
    }
}
function preload(){
song= loadSound("music.mp3");
}

function draw(){
    image(video, 0, 0, 600, 500);

    fill("red");
    stroke("black");

    if(score_rightwrist>0.2){
        circle(left_wristX, left_wristY, 20);
    
        umwrsitY= Number(left_wristY);
    no_decimal= floor(numwrsitY);
    converted_volume= no_decimal/500;

    document.getElementById("volume_value").innerHTML= converted_volume;

    song.setVolume(converted_volume);
    }

 
    function play_music(){
        song.play();
        song.setVolume;
    }
 
 }





