function spsGame(yourChoice){

    //step 1 is define human and computer choice
    //so declare two variable...
    //its is easy to pass human choice id...
    //now for pass computer choice id, we need to make array and select random with floor and random function...

    let humanChoice , botChoice;
    humanChoice = yourChoice.id;
    console.log("Human choice : ",humanChoice);

    botChoice = numberToChoice(randomselection());
    console.log("computer choice : ",botChoice);

    //now from this id, we have to write logic code for winner. so frist 
    result = decideWinner(humanChoice,botChoice);
    console.log("Result : ",result);

    //creating functions for middel message
    message = finalMessage(result);
    console.log("Message : ",message)

    spsFrontEnd(humanChoice,botChoice,message)

}

function randomselection() {
    let number;
    number = Math.floor(Math.random() * 3);
    // console.log(number);
    return number;
}
function numberToChoice(number){
    return ['stone','paper','scissors'][number];
    //array for options to choice to computer.....
}

function decideWinner(yourChoice,computerChoice){
    //now we create json object for pass value to respective there choice.....
    let spsDatabase = {
        'stone' : {'scissors':1, 'stone':0.5, 'paper':0},
        'paper' : {'stone':1, 'paper':0.5, 'scissors':0},
        'scissors':{'paper':1, 'scissors':0.5, 'stone':0}
    };

    let yourScore = spsDatabase[yourChoice][computerChoice];
    let botScore = spsDatabase[computerChoice][yourChoice];

    return [yourScore,botScore];
}

function finalMessage([yourScore,botScore]){
    if(yourScore === 0 ){
        return {'message':'You are Loss!','color':'red'}
    }
    if (yourScore === 0.5){
        return {'message':'It is Tie!','color':'yellow'}
    }
    else {
        return {'message':'You are Win!','color':'green'}
    }
}

function spsFrontEnd(humanImageChoice,botImageChoice,finalMessage){
    let imagesDatabase = {
        'stone': document.getElementById('stone').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    //remvoe all the div.
    document.getElementById('stone').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    let humanDiv = document.createElement('div');
    let messageDiv = document.createElement('div');
    let botDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src= '" +imagesDatabase[humanImageChoice]+ "' height=150 width=150 style='box-shadow: 0 10px 50px blue;'>"

    messageDiv.innerHTML = "<h2 style = 'color: " +finalMessage['color']+ "; padding:10px; font-size:50px; '>" +finalMessage['message']+"<h2>"

    botDiv.innerHTML = "<img src = '" +imagesDatabase[botImageChoice]+ "' height=150 width=150 style='box-shadow: 0 10px 50px red;'>"

    document.getElementById('flex-box-sps').appendChild(humanDiv);
    document.getElementById('flex-box-sps').appendChild(messageDiv);
    document.getElementById('flex-box-sps').appendChild(botDiv);


}





