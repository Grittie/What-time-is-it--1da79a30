const pi = 3.14;

var tijd = new Date();
document.getElementById("tijd").innerHTML = tijd;

function diaMeter() {
    let diam = document.getElementById('nummer').value;

    let antwoord = diam * pi;

    document.getElementById("antwoord").innerText = antwoord;
}

function oppervlakte() {
    let diam = document.getElementById('nummer').value;

    let antwoord2 = diam * diam * pi * 0.25;

    console.log(antwoord2);

    document.getElementById("antwoord2").innerText = antwoord2;
}

function bereken() {
    oppervlakte();
    diaMeter();
}