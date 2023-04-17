// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

let userNumber = parseInt(prompt("scegli un numero da 1 a 6"))
console.log(userNumber)

let pcNumber = parseInt(Math.random(1)* 6.);
console.log(pcNumber.toFixed(0))

const maxNumber = parseInt(7)

if (userNumber >= maxNumber){
    console.log("Hai barato!")
}else if(userNumber > pcNumber){
    console.log("hai vinto utente!")
    }else if(userNumber < pcNumber){
        console.log("hai perso utente!")
        
    }else if (userNumber = pcNumber){
        console.log("i numeri si equivalgono")    
        
    }else if (userNumber = isNaN){
        console.log("numero non valido")
        
    }
