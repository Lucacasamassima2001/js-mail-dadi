

// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


let usermail = prompt("qual è la tua mail?")

const NamesList = ["michele@gmail.com","laura@gmail.com","luisa@gmail.com","giuseppe@gmail.com","giovanni@gmail.com" ]
// console.log(NamesList)
// console.log(NamesList.includes(usermail))
if (NamesList.includes(usermail)){
    console.log("benvenuto nella tua area personale!")
}else{
    console.log("Non risulta alcuna mail con questo nome.")
}