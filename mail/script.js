

// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


let usermail = prompt("qual è la tua mail?")

const arrNamesList = [
    "michele@gmail.com",
    "laura@gmail.com",
    "luisa@gmail.com",
    "giuseppe@gmail.com",
    "giovanni@gmail.com" 
];
// console.log(NamesList)
// console.log(NamesList.includes(usermail))

// METODO INCLUDES

// if (arrNamesList.includes(usermail)){
//     console.log("benvenuto nella tua area personale!")
// }else{
//     console.log("Non risulta alcuna mail con questo indirizzo.")
// }


// METODO FOR


let isFound = false
for(let i = 0; i < arrNamesList.length; i++){
    
    if (usermail == arrNamesList[i]){
    isFound = true
    }
}

if(isFound){
    console.log("email trovata")
}else{
    console.log("email non trovata")
}