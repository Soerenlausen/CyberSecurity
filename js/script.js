'use strict'

const btns = document.querySelectorAll('.btn-group button');
const choices = []; // Array til id på knappen, der er blevet klikket på
const sections = document.querySelectorAll('section'); // fast variabel, som henter de forskellige sectioner(elementer) fra html'en udfra teksten 'section'

// Function til at skift sectio
const checkAnswer = (e) => { // Funktion med en parameter (e)
    sections.forEach(section => {
        section.style.display = 'none';
    })
    choices.push(e.target.id) // gemmer id i choices
    console.log(choices)
    switch (e.target.id) { // Forholder sig til det klikkede elements id
        case 's1': document.querySelector('#q1').style.display = 'flex'; // Viser elementet med id="q3"
        break;
        case 'a1': document.querySelector('#q3').style.display = 'flex'; // Viser elementet med id="q3"
        break;
        case 'a2': document.querySelector('#q2').style.display = 'flex'; // Viser elementet med id="q2"
        break;
        case 'a3': document.querySelector('#e1').style.display = 'flex'; // Viser elementet med id="e1"
        break;
        case 'a2-1': document.querySelector('#e3').style.display = 'flex'; // Viser elementet med id="q2"
        break;
        case 'a2-2': document.querySelector('#e2').style.display = 'flex'; // Viser elementet med id="e1"
        break;
        case 'a1-1': document.querySelector('#e3').style.display = 'flex';
        document.querySelector('#fb1').style.display = 'flex';
        document.getElementById('fb1').innerText = 'Du skal altid check hvem der skriver, er mailaddressen den rigtige eller mailen lidt mistænklig? og er det en nets certificret side, du betaler på' // Viser elementet med id="q2", samt viser paragraph'en med id'et 'fb1' og indsætter teksten via .innerText functionen
        break;
        case 'a1-2': document.querySelector('#e2').style.display = 'flex'; // Viser elementet med id="e1"
        break;
        default: console.log("Error"); // Viser error, hvis id ikke findes
    }
}

btns.forEach(btn => { // for hver knap tilføjer den en event listener, som tjekker om der er blevet klikket på en knap og hvilken en.
    btn.addEventListener('click', checkAnswer);
})