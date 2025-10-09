/*-----------------------------------
     06 - Dice Rolling Championship
 -----------------------------------

Scenario: Two players compete in a dice rolling championship! Each player takes turns rolling a dice, and after 10 rounds, the player with the highest total score wins.

 */


const firstPlayer = prompt("Player 1.");
const secondPlayer = prompt("Player 2.");

console.log(`Player 1. ${firstPlayer}`);
console.log(`Player 2. ${secondPlayer}`);

let scoreFirstPlayer = 0;
let scoreSecondPlayer = 0;

function playerDiceRolling (name){
    let randomDiceNumber = Math.floor(Math.random() * 6) + 1; // kildehenvisning: https://chatgpt.com/c/68e78940-b2e4-8331-9af5-a04f3366dafb

    prompt("Press Enter to roll")
    console.log(`${name} presses Enter to roll...`)
    console.log(`${name} rolled: ${randomDiceNumber}`)
    return randomDiceNumber;
}

playerDiceRolling(firstPlayer)
playerDiceRolling(secondPlayer)

const roundsTotal = 10;

for(let i = 0; i <= roundsTotal; i++){
    console.log(`Round: ${i} `)

    const roundFirst = playerDiceRolling(firstPlayer)
    const roundSecond = playerDiceRolling(secondPlayer)




}