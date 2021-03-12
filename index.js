//Afbeelding dagdeel
var dagMoment = new Date ();
var dagNacht = dagMoment.getHours();

if (dagNacht < 6) {
    document.getElementById("dagdeelimg").src = "image/nacht.jpg"; //nacht
} else if (dagNacht >= 6 && dagNacht < 12) {
    document.getElementById("dagedeelimg").src = "image/ochtend.jpg"; //ochtend
} else if (dagNacht >= 12 && dagNacht < 18) {
    document.getElementById("dagdeelimg").src = "image/middag.jpg"; //middag
} else {
    document.getElementById("dagdeelimg").src = "image/avond.jpg"; //avond
}

//Afbeelding seizoenen
var seizoenMoment = new Date ();
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