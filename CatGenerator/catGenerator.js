function catGen(){

    let img = document.createElement('img');
    
    img.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    img.alt = "can't loaded, please refresh the page again!";

    let div = document.getElementById('flex-box');
    div.appendChild(img);
}