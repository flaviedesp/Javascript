/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function annee() {
    var date = new Date();
    var annee = date.getFullYear();
    var mois = date.getMonth();
    var jour = date.getDate();


}
function calculDate() {
    var annee = document.getElementById("annee").value;
    var mois = document.getElementById("mois").value - 1;
    var jour = document.getElementById("jour").value;

    var dateNaissance = new Date(annee, mois, jour);
    var date = new Date();
    var dateDiff;
    console.log(dateNaissance.toString());

    var radioJours = document.getElementById("Jours").checked;
    var radioMois = document.getElementById("Mois").checked;
    var radioAnnee = document.getElementById("Annee").checked;

    if (radioJours == true) {
        dateDiff = ((date.getTime() - dateNaissance.getTime()) / 86400000);

        alert(Math.round(dateDiff) + ' jours');
    } else if (radioMois == true) {
        dateDiff = ((date.getTime() - dateNaissance.getTime()) / 2629800000);
        alert(Math.round(dateDiff) + ' mois');
    } else if(radioAnnee == true){
        dateDiff = date.getFullYear() - dateNaissance.getFullYear();
        alert(dateDiff + ' année');
    }else{
        alert("Aucune unité selectionnée");
    }
}

