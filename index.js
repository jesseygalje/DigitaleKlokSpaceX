//Afbeelding dagdeel
var dagMoment = new Date();
var dagNacht = dagMoment.getHours();

if (dagNacht < 6) {
    document.getElementById("dagdeelimg").src = "image/nacht.jpg"; //nacht
} else if (dagNacht >= 6 && dagNacht < 12) {
    document.getElementById("dagdeelimg").src = "image/ochtend.jpg"; //ochtend
} else if (dagNacht >= 12 && dagNacht < 18) {
    document.getElementById("dagdeelimg").src = "image/middag.jpg"; //middag
} else {
    document.getElementById("dagdeelimg").src = "image/avond.jpg"; //avond
}

//Afbeelding seizoenen
var seizoenMoment = new Date();
var seizoenen = seizoenMoment.getMonth();

if (seizoenen <= 2) {
    document.getElementById("seizoenimg").src = "image/winter.jpg";
} else if (seizoenen > 2 && seizoenen <= 5) {
    document.getElementById("seizoenimg").src = "image/lente.jpg";
} else if (seizoenen > 5 && seizoenen <= 8) {
    document.getElementById("seizoenimg").src = "image/zomer.jpg";
} else {
    document.getElementById("seizoenimg").src = "image/herfst.jpg";
}

// document.getElementById("dagdeelimg").style.backgroundRepeat = "no-repeat";
// document.getElementById("seizoenimg").style.backgroundRepeat = "no-repeat";



//Live timer
function lopendeTijd() {
var moment = new Date();

function addLeadingZero(number) {
    if(number < 10){
        return '0' + number;
    }
    return number
}

var seconds = addLeadingZero(moment.getSeconds());
var minutes = addLeadingZero(moment.getMinutes());
var hours = addLeadingZero(moment.getHours());

document.getElementById('kloktijd').innerHTML = hours + ':' + minutes + ':' + seconds;
document.getElementById('kloktijd').style.textAlign = "center";
}

var autoklok = setInterval(lopendeTijd, 1000);

lopendeTijd();

//Live dag
var huidigeDag = new Array('Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag');
document.getElementById('klokdag').innerHTML = huidigeDag[dagMoment.getDay()];

var huidigeMaand = new Array('januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december');
document.getElementById('klokdatum').innerHTML = dagMoment.getDate() + ' ' + huidigeMaand[dagMoment.getMonth()] + ' ' + dagMoment.getFullYear();