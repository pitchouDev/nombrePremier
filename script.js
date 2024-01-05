
let nbrPremiers = [2];
init()

const inputNbrPremier = document.getElementById("inputNbrPremier");
const reponse = document.getElementById("reponse");
const boite = document.getElementById("boite");


inputNbrPremier.addEventListener("input", () => {
    let nombre = parseInt(inputNbrPremier.value);

    if (!nombre) {
        afficherRien()
    } else {
        if (nombre > 0 && nombre < 100000) {
            if (verifierPremier(nombre)) {
                afficherPremier()
            } else {
                afficherNonPremier()
            }
             
        } else {
            afficherNbrInvalide()
        }
    }
})


function verifierPremier(nombre) {
    for (let i = 0; i < nbrPremiers.length; i++) {
        if(nbrPremiers[i] === nombre){
            return true
        }
    }
    return false;
}

function afficherPremier() {
    boite.setAttribute("class", "boiteValid")
    reponse.setAttribute("class", "valid")
    reponse.innerText = " عدد اولي ";
}

function afficherNonPremier() {
    boite.setAttribute("class", "boiteInValid")
    reponse.setAttribute("class", "invalid")
    reponse.innerText = "ليس عدد اولي";
}

function afficherNbrInvalide() {
    boite.setAttribute("class", "boiteInValid")
    reponse.setAttribute("class", "invalid")
    reponse.innerText = "كبير بزاف شقوا";
}

function afficherRien() {
    boite.setAttribute("class", "normal")
    reponse.innerText = "";
}

function init() {
    for (let i = 3; i < 100000; i++) {
        let isINbrPremier = true
        let square = Math.floor(Math.sqrt(i));
        for (let j = 0; j < nbrPremiers.length; j++) {
            if (nbrPremiers[j] > square) {
                break;
            }
            if (i % nbrPremiers[j] === 0) {
                isINbrPremier = false;
                break;
            }
        }
        if (isINbrPremier) {
            nbrPremiers.push(i);
        }
    }
}

