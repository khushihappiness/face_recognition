Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
 var camera=document.getElementById("camera");
 Webcam.attach(camera);

 function take_snapshot()
 {
     Webcam.snap(function(data_uri)
     {
         document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
     });

 }
 console.log("The ml5 version is",ml5.version);


 classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Vpy2rTqGi//model.json",modelLoaded);
  
 function modelLoaded()
 {
     console.log("Model is loaded");
 }

 function check()
 {
var img=document.getElementById("captured_image");
classifier.classify(img, gotResult);
 }
  
 function gotResult(error,results)
 {
     if(error)
     {
         console.error(error);
     }
     else
     {
console.log(results);
document.getElementById("result_member_name").innerHTML=results[0].label;
document.getElementById("result_member_accuracy").innerHTML=results[0].confidence.toFixed(4);

     }
     
 }
