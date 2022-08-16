function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true, video:false });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9WJzia9G8/model.json', modelReady);
}

function modelReady(){
    classifier.classify( gotResults);
}

var dog=0;
var cat=0;
var lion=0;
var cow=0;

function gotResults( error, results){
    if (error) {
        console.error(error);
    } else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_count").innerHTML = 'Detected dog -  ' +dog+ 'Detected cat - ' + at+ 'Detected Lion - ' +lion + 'Detected cow - ' +cow;
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('animal_image')

    if (results[0].label == "bark"){
        img.src = 'download.png';
        dog=dog+1;
        } else if (results[0].label == "meow"){
            img.src = 'download (1).png';
            cat=cat+1
        } else if (results[0].label == "roar"){
            img.src = 'download (3).png';
            lion=lion+1
        } else if (results[0].label == "moo"){

            img.src = 'download (2).png';
            cow=cow+1
        } else{
            img.src='we-listen.gif';
        }
    }};
