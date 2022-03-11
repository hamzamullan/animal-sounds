function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9WJzia9G8/model.json', modelReady);
}

function modelReady(){
    classifier.classify( gotResults);
}

function gotResults( error, results){
    if (error) {
        console.error(error);
    } else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence*100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('dog')
        img1 = document.getElementById('cat')
        img2 = document.getElementById('lion')
        img3 = document.getElementById('cow')

    if (results[0].label == "bark"){
        img.src = 'download.png';
        img1.src = 'download (1).png';
        img2.src = 'download (2).png';
        img3.src = 'download (3).png';
        } else if (results[0].label == "meow"){
            img.src = 'download.png';
            img1.src = 'download (1).png';
            img2.src = 'download (2).png';
            img3.src = 'download (3).png';
        } else if (results[0].label == "roar"){
            img.src = 'download.png';
            img1.src = 'download (1).png';
            img2.src = 'download (2).png';
            img3.src = 'download (3).png';
        } else{
            img.src = 'download.png';
            img1.src = 'download (1).png';
            img2.src = 'download (2).png';
            img3.src = 'download (3).png';
        }}};
