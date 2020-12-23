

function calculate(){

    let value = document.getElementById('input').value;
    // console.log(value);
    let agedays = ( 2020 - value ) * 365;
    // console.log(agedays);
    let oldtext = document.getElementById('result-h3-box').innerText;
    // console.log(oldtext);

    //DOM
    if((value == 0) || (value == null) ){
        document.getElementById('result-h3-box').innerText = 'Please enter valid Age!';
    }
    else if(value <= 0) {
       document.getElementById('result-h3-box').innerText = 'Please enter Positive Number!';
    } 
    else {
        document.getElementById('result-h3-box').innerText = 'You are '+ agedays +' days older!';
    } 
}

function reset() {

    document.getElementById('result-h3-box').innerText = "Your Answer comes here!";

}