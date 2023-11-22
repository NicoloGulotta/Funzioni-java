/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
let a =3;
let b=3;
function crazySum(n1,n2)  {
  return n1 + n2;
  if (n1 === n2) {
    return(n1 + n2) * 3;
  }
}

let result=crazySum(a,b);
consol.log(result);

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/
// let num = 100;
// function boundary(parametri) {
//   if (num > 20 && num <= 100) {
//     return true;
//   } else if (num === 400) {
//     return true;
//   }
// }
// let result =boundary(num)
// console.log(result)

/* ESERCIZIO 3
Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/
// let parola = 'EPICODE';
// function reverseString(stringa) {
//   let parolaDivisa = parola.split('');
//   let parolainversa = parolaDivisa.reverse();
//   let reverseparola = parolainversa.join('');
//   return reverseparola;
// }
// let re = reverseString(parola);
// console.log(re);

/* ESERCIZIO 4
/* Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/
// let parola = 'epicode';
// function upperFirst(srt) {
//   parolaIniziale = parola.substring(0, 1).toUpperCase();
//   parolaFinale = parola.substring(1, parola.length).toLowerCase();
//   parolaComlpeta = parolaIniziale + parolaFinale;
//   return parolaComlpeta
// }
// let result=upperFirst(parola);
// console.log(result);//funzioe per una sola parola


// /* ESERCIZIO 5
/* Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

// function giveMeRandom(n) {
// let min = 0;
// let max = 10;
// let n= Math.floor(Math.random() * max)  + min;
// return n
// }
// let result=giveMeRandom;
// console.log(result);

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
// let La=10;
// let Lb=20;
// function area(l1,l2){
//   let areaRettangolo= l1*l2;
//   return areaRettangolo ;
// }
// let result=area(La,Lb);
// console.log(result);

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/
// let a = -20;
// let b = 19;
// function crazyDiff(n1, n2) {
//   let sott = n1 - n2;
//   Math.abs(sott);
//   if (sott > n2) {
//     return (Math.abs(sott))* 3;
//   }
//   return Math.abs(sott);
// }
// let result = crazyDiff(b,a);
// console.log(result);



/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/
// let parola1 = "lyoko"
// let parola2 = "codelyoko";
// function codify(stringa) {
//   if (stringa.includes("code")) {
//     return stringa;
//   } else return "code" + stringa;
// }
// let result = codify(parola2);
// console.log(result);


/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/
// let n = 30;
// function check3and7(num) {
//   if ((num % 3 === 0) || (num % 7 === 0)) {
//     return true
//   }
//   return false
// }
// let result = check3and7(n);
// console.log(result)


/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

// let parola ="Epicode";
// function cutString(stringa){
//  return stringa.slice(1,-1);
//   }

// let result=cutString(parola)
// console.log(result);