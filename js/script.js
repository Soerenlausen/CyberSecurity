'use strict'

const btns = document.querySelectorAll('.btn-group button');
const startBtn = document.getElementById('start');
const choices = []; // Array til id på knappen, der er blevet klikket på
const sections = document.querySelectorAll('section'); // fast variabel, som henter de forskellige sectioner(elementer) fra html'en udfra teksten 'section'

// Function til at skift section
const checkAnswer = (e) => { // Funktion med en parameter (e)
    sections.forEach(section => {
        section.style.display = 'none';
    })
    choices.push(e.target.id); // gemmer id i choices
    console.log(choices);
    localStorage.setItem('answer', choices); // gemmer 'choices' i localStorage
    switch (e.target.id) { // Forholder sig til det klikkede elements id
        case 'start': document.querySelector('#q1').style.display = 'flex'; // Viser elementet med id="q1"
        break;
        case ' svar 1': document.querySelector('#q3').style.display = 'flex'; // Viser elementet med id="q3"
        break;
        case ' svar 2': document.querySelector('#q2').style.display = 'flex'; // Viser elementet med id="q2"
        break;
        case ' svar 3': document.querySelector('#e1').style.display = 'flex'; // Viser elementet med id="e1"
        document.getElementById('done').innerText = 'GODT KLARET! - Du gjorde det på ' + count + ' forsøg'; //sætter tekst og svar ind, i elementet med id'et 'done'
        document.querySelector('#counter').style.display = 'none'; // gemmer forsøg tælleren i toppen, så tallet kun står i beskeden midt på skærmen
        break;
        case ' svar 2-1': document.querySelector('#e3').style.display = 'flex'; // Viser elementet med id="e3"
        break;
        case ' svar 2-2': document.querySelector('#e2').style.display = 'flex'; // Viser elementet med id="e2"
        break;
        case ' svar 1-1': document.querySelector('#e3').style.display = 'flex';
        document.querySelector('#fb1').style.display = 'flex';
        document.getElementById('fb1').innerText = 'Du skal altid checke: hvem er afsenderen? er mailaddressen lidt mistænklig? er det en NETS certificret side, du betaler på?' // Viser elementet med id="q2", samt viser paragraph'en med id'et 'fb1' og indsætter teksten via .innerText functionen
        break;
        case ' svar 1-2': document.querySelector('#e2').style.display = 'flex'; // Viser elementet med id="e2"
        break;
        default: console.log("Error"); // Viser error, hvis id ikke findes
    }
}

let count = localStorage.getItem('clickCount') || 0; // Henter nummer from localStorage eller 0 hvis intet er gemt tidligere

startBtn.addEventListener('click', () => { // event listener til start knap, så starten på et nyt spil bliver registeret
    count++; // tilføjer én til det gemte nummer i localStorage
    
    localStorage.setItem('clickCount', count); // gemmer det nye nummer i localStorage

    document.getElementById('counter').innerText = 'Antal forsøg: ' + count; //sætter tekst og svar ind, i elementet med id'et 'start'
});

btns.forEach(btn => { // for hver knap tilføjer den en event listener, som tjekker om der er blevet klikket på en knap og hvilken en.
    btn.addEventListener('click', checkAnswer);
})