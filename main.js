Webcam.set ({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
}); //Webcam.set is an inbuilt function of webcam.js to set the properties for the live view of the webcam.

Camera_variable = document.getElementById("camera"); //Taking the element where the live view is to be shown and storing it in a variable.
Webcam.attach (Camera_variable); //Triggering the webcam, so as a result as soon as the page is loaded the webcam will start and show the live view inside the camera element.

function take_snapshot() {
    Webcam.snap(function(data_uri) //Function. It will capture the image and store it in the variable "data_uri"
    {
        document.getElementById("result").innerHTML = '<img id = "captured_image" src = " '+ data_uri +' "/>'; 
    }) 
}
console.log('m15 version:', m15.version);

classifier = m15.imageClassifier('https://teachablemachine.withgoogle.com/models/[...]', modelLoaded);