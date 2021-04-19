/*
======================
add nd dlt on weField
======================
*/

function addNewWEField() {
    // console.log("addNewWEField is worked");

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter here");
    newNode.setAttribute("rows", 3);

    let weObj = document.getElementById('we');
    let weAddButtonObj = document.getElementById('weAddButton');

    weObj.insertBefore(newNode, weAddButtonObj);


}

$(document).ready(function () {
    $('#wedltlast').click(function () {
        // console.log("delete cliked")
        $('.weField:last').remove();
    });

});



/*
======================
add nd dlt on aqField
======================
*/
function addNewAQField() {

    //  console.log("addNewAQField is worked");

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter here");
    newNode.setAttribute("rows", 3);

    let aqObj = document.getElementById('aq');
    let aqAddButtonObj = document.getElementById('aqAddButton');

    aqObj.insertBefore(newNode, aqAddButtonObj);

}
$(document).ready(function () {
    $('#aqdltlast').click(function () {
        // console.log("delete cliked")
        $('.aqField:last').remove();
    });

});


/*
======================
//generating cv
======================
*/
function generateCV() {
    // console.log("generateCV is worked");

    //name under profile at left side
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT");
    nameT1.innerHTML = nameField;

    //name at right side
    document.getElementById("nameT2").innerHTML = nameField;

    //contact
    document.getElementById('contactT').innerHTML = document.getElementById('contactField').value;

    //address
    document.getElementById('addressT').innerHTML = document.getElementById('addressField').value;

    //link
    document.getElementById('fbT').innerHTML = document.getElementById('fbField').value;
    document.getElementById('instaT').innerHTML = document.getElementById('instaField').value;
    document.getElementById('linkedT').innerHTML = document.getElementById('linkedField').value;

    //objective
    document.getElementById('objectiveT').innerHTML = document.getElementById('objectiveField').value;

    //work experience 
    let wes = document.getElementsByClassName('weField');
    let str = "";
    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById('weT').innerHTML = str;

    //Academic Qualification 
    let aqs = document.getElementsByClassName('aqField');
    let str1 = "";
    for (let e of aqs) {
        str1 = str1 + `<li> ${e.value} </li>`;
    }
    document.getElementById('aqT').innerHTML = str1;

    //code for fetching Profile image from userdata
    let file = document.getElementById('imgField').files[0];
    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

    //code for set Profile image to tamplate
    reader.onloadend = function () {
        document.getElementById("imgT").src = reader.result;

        // document.getElementById("imgT").setAttribute("src","reader.result"); 
    };


    //cv-form will hide
    document.getElementById('cv-form').style.display = 'none';

    //cv-template will display block
    document.getElementById('cv-template').style.display = 'block'
}


/*
======================
print button
======================
*/
function printCV() {
    window.print();
}

/*
======================
back button
======================
*/
function back() {
    //cv-form will display block
    document.getElementById('cv-form').style.display = 'block';

    //cv-template will none
    document.getElementById('cv-template').style.display = 'none'
}


