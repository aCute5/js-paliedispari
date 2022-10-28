// Creo una constante dove chiedo all'utente la sua parola. 
// Creo una costante che corrisponde alla parola data divisa in stringhe
// Prendo le stringhe della parole e le inverto. 
// riunisco le stringhe e le paragono tra loro. 


// SOLUZIONE 1 CON SEMPLICE ASSEGNAZIONE

// const userWord = prompt("Qual è la tua parola?");
// const userLetters = userWord.split("")
// const lettersReverse = userLetters.reverse("")
// const wordReverse = lettersReverse.join("")

// Uso una condizione per cui se la parola digitata dall'utente e la stessa parola invertita sono uguali altrimenti non sono palindrome. 

// if (wordReverse === userWord) {
//     alert("La parola è palindroma");
// }else{
//     alert("La parola non è palindroma");
// }

// SOLUZIONE 2 USANDO UNA FUNZIONE che checki in automatico se la parola è palindroma

const userWord = prompt("Qual è la tua parola?");
let invertedWord = checkPalindrome(userWord)

if (userWord == invertedWord) {
    alert("La parola è palindroma");
}else{
   alert("La parola non è palindroma");
}
function checkPalindrome(wordcheck){
        let userLetters = wordcheck.split("")
        let lettersReverse = userLetters.reverse()
        let wordReverse = lettersReverse.join("")
        return wordReverse            
}


// Chiedo all'utente se vuole pari o dispari.
// Genero un numero random per il mio utente.
// Genero un numero random per il pc. 
// Sommo i due numeri.
// Se l'utente e scelto pari && la somma dei numeri è % 2 = 0 allora ha vinto l'utente
// Se l'utente ha scelto dispari && la somma dei numero %2 != 0 allora ha vinto l'utente
// ALTRIMENTI HA VINTO IL PC 

const userChoice = prompt("PARI O DISPARI?")
const userNumber = prompt (" Dimmi un numero da 1 a 5")
const userpcNumber = Math.floor(Math.random() * 5) + 1;
const finalScore = userNumber + userpcNumber
if (finalScore % 2 == 0  && userChoice == ("Pari")){
    alert("Hai Vinto")
}if (finalScore % 2 != 0 && userChoice == ("Dispari")) {
    alert ("Hai Vinto")
} else {
    alert ("Hai perso")
}
    
