// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

let userNumber = parseInt(Math.random()* 6.) + 1;
console.log(userNumber.toFixed(0))

let pcNumber = parseInt(Math.random()* 6.) + 1;
console.log(pcNumber.toFixed(0))



let display = document.getElementById("Who-wins")

 if(userNumber > pcNumber){
    console.log("hai vinto utente!")
    display.innerHTML = "HAI VINTO UTENTE!";

    }else if(userNumber < pcNumber){
        console.log("hai perso utente!")
        display.innerHTML = "HAI PERSO UTENTE!";
        
    }else if (userNumber = pcNumber){
        console.log("i numeri si equivalgono")
        display.innerHTML = "I NUMERI SI EQUIVALGONO!";  
    }