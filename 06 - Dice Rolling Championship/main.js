/*-----------------------------------
     06 - Dice Rolling Championship
 -----------------------------------

Scenario: Two players compete in a dice rolling championship! Each player takes turns rolling a dice, and after 10 rounds, the player with the highest total score wins.

 */

console.log("🏆Welcome to the Dice Rolling Championship!🏆")

const firstPlayer = prompt("Player 1.");
const secondPlayer = prompt("Player 2.");

console.log(`Player 1. ${firstPlayer}`);
console.log(`Player 2. ${secondPlayer}`);

function playerDiceRolling (name){
    let randomDiceNumber = Math.floor(Math.random() * 6) + 1; // kildehenvisning: https://chatgpt.com/c/68e78940-b2e4-8331-9af5-a04f3366dafb
    prompt("Press Enter to roll");
    console.log(`${name} presses Enter to roll...`);
    console.log(`${name} rolled: ${randomDiceNumber}`);
    return randomDiceNumber;
}

let scoreFirstPlayer = 0;
let scoreSecondPlayer = 0;
const roundsTotal = 2;

for(let i = 1; i <= roundsTotal; i++){
    console.log("\n")
    console.log(`Round: ${i} `)

    const roundFirst = playerDiceRolling(firstPlayer);
    const roundSecond = playerDiceRolling(secondPlayer);

    scoreFirstPlayer += roundFirst;
    scoreSecondPlayer += roundSecond;

    console.log("\n")

    console.log(`Totalscore for Round: ${i}`)
    console.log(`${firstPlayer} Total ${scoreFirstPlayer}`);
    console.log(`${secondPlayer} Total ${scoreSecondPlayer}`);
}

console.log("\n")
console.log("🎉 Game Over! 🎉");
console.log("Final Scores:")
console.log(`${firstPlayer}: ${scoreFirstPlayer}`)
console.log(`${secondPlayer}: ${scoreSecondPlayer}`)

console.log("\n")
if (scoreFirstPlayer > scoreSecondPlayer){
    console.log(`🏆${firstPlayer} wins the championship!🏆`)
} else {
    console.log(`🏆${secondPlayer} wins the championship! 🏆`)
}

/*
🏆Welcome to the Dice Rolling Championship!🏆
Player 1. Johanne
Player 2. Emil

Round: 1
Johanne presses Enter to roll...
Johanne rolled: 5
Emil presses Enter to roll...
Emil rolled: 1

Totalscore for Round: 1
Johanne Total 5
Emil Total 1

Round: 2
Johanne presses Enter to roll...
Johanne rolled: 5
Emil presses Enter to roll...
Emil rolled: 6

Totalscore for Round: 2
Johanne Total 10
Emil Total 7

...

🎉 Game Over! 🎉
Final Scores:
Johanne: 10
Emil: 7

🏆Johanne wins the championship!🏆
*/