import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});



let dag = parseFloat(await userInput.question('hoeveel dagen? '));
let uren = parseFloat(await userInput.question('hoeveel uren? '));
let minuten = parseFloat(await userInput.question('hoeveel minuten?'));
let seconden = parseFloat(await userInput.question('hoeveel seconden?'));

let totalseconden

let secdagen = (dag * 24 * 60 * 60)
let securen = (uren * 60 * 60)
let secminuten =  (minuten * 60)
totalseconden = secdagen + secminuten + securen + seconden



console.log('er zijn '+ totalseconden + "seconden");

process.exit()
