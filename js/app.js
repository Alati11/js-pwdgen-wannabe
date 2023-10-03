// ####  Password generator

// - Chiedi all’utente il suo nome
//    - dichiara una variabile
let userName;
//    - assegnare alla variabile il valore restituito da un prompt
userName = prompt ('Ciao, qual è il tuo nome?');
console.log(userName);
// - Chiedi all’utente il suo cognome
//    - dichiara una variabile
let userSurname;
//    - assegnare alla variabile il valore restituito da un prompt
userSurname = prompt('Qual è il tuo cognome?');
console.log(userSurname);
// - Chiedi il colore preferito
//    - dichiara una variabile
let userColor;
//    - assegnare alla variabile il valore restituito da un prompt
userColor = prompt ('Qual è il tuo colore preferito ?');
console.log(userColor);
// - Creare un numero da associare //
let userNumber
// assegna valore //
userNumber = ('20');
userNumber = (20 + 1);
console.log(userNumber);

// - Concatenare nome, cognome, colore e numero //
let userPassword = userName + userSurname + userColor + userNumber;
console.log(userPassword);

//   - recuperare con js l'elementi del dom con id = 'password'
const messageDomElement = document.getElementById('userPassword');
console.dir(messageDomElement);

// - Modificare l'innerHTML del h1 con il valore della variabile password //
messageDomElement.innerHTML = userPassword;


