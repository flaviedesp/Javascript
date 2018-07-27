/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var nombre = 0; /*variable globale du nombre mystere*/
var nbrPropose = 0;
var compteur = 7;
nombre = Math.floor((100) * Math.random()) + 1;

function init() {
    document.getElementById("proposition").value = "0";    
    document.getElementById("essai").value = "7";
    document.getElementById("message").value = "";
    document.getElementById("reponse").value = "";
    location.reload();
}

function solution() {
    alert('La solution est ' + nombre);
    init();
}

function propose() {
    nbrPropose = document.getElementById("proposition").value;

    if (nbrPropose == nombre) {
        alert("C'est gagné!!");
        init();
    } else {
        if (nbrPropose > nombre) {
            document.getElementById("message").value = "Trop grand";
            document.getElementById("message").style.color="red";
            compteur--;
        } else {
            if (nbrPropose < nombre) {
                document.getElementById("message").value = "Trop petit";
                document.getElementById("message").style.color="blue";
                compteur--;
            }
            document.getElementById("essai").value = compteur;
        }
        document.getElementById("reponse").value += nbrPropose + "   ";
    }
    if (compteur == 0) {
        alert("Game Over!!");
        init();
    }
}