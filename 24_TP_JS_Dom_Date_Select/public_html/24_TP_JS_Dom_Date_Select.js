/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
annee = 1900;
jour = 1;

function choixAnnee() {
    var date = new Date();
    var anneeD = date.getFullYear();

    select = document.getElementById('annee');
    select.innerHTML = "";
    for (var i = 1900; i <= anneeD; i++) {
        var option = document.createElement('option');
        option.text = i;
        select.add(option);
    }
}

function choixJour() {
    annee = document.getElementById("annee").value;
    mois = document.getElementById("mois").value;
    var nbj = 31;
    if (mois == 4 || mois == 6 || mois == 9 || mois == 11) {
        nbj = 30;
    } else if ((mois == 2) && (annee % 4 == 0)) {
        nbj = 29;
    } else if (mois == 2) {
        nbj = 28;
    }
    console.log(annee, mois);
    select = document.getElementById('jour');
    select.innerHTML = "";
    for (var j = 1; j <= nbj; j++)
    {
        option = document.createElement('option');
        option.text = j;
        select.add(option);
    }
}

function calculDate() {
    annee = document.getElementById("annee").value;
    mois = document.getElementById("mois").value - 1;
    jour = document.getElementById("jour").value;
    date = new Date();

    var dateNaissance = new Date(annee, mois, jour);
    var dateDiff;
    console.log(dateNaissance.toString());

    var radioJours = document.getElementById("Jours").checked;
    var radioMois = document.getElementById("Mois").checked;
    var radioAnnee = document.getElementById("Annee").checked;

    if (radioJours == true) {
        dateDiff = ((date.getTime() - dateNaissance.getTime()) / 86400000);
        alert(Math.round(dateDiff) + ' jours');
    } else {
        if (radioMois == true) {
            dateDiff = ((date.getTime() - dateNaissance.getTime()) / 2629800000);
            alert(Math.round(dateDiff) + ' mois');
        } else {
            if (radioAnnee == true) {
                dateDiff = date.getFullYear() - dateNaissance.getFullYear();
                alert(dateDiff + ' année');
            } else {
                alert("Aucune unité selectionnée");
            }
        }
    }
}
function init() {
    choixAnnee();
    choixJour();
}



