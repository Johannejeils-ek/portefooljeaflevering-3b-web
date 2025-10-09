/*-----------------------------------
     03 - Treasure Hunter
 -----------------------------------

Instructions:
    Island Setup:
        The island is represented by a 1D array of 5 elements.
        One of these elements is the hidden treasure (T), and the rest are empty (-).
*/

// Log out how many moves there are in the island - level 1
/*  For each move log the following out - level 2
    If there is a treasure log out: Treasure found at move 3 :)
    If there is not a treasure log out: No treasure found :(
    // Log out how many treasures there are in the island - level 3
 */

function treasureHunter (island){
    console.log(`There are ${island.length} moves in the island`)
    let treasureFound = 0

    island.forEach((move, index)=>{
        if(move === "T"){
            console.log(`Treasure found at move ${index + 1} :)`)
            treasureFound = treasureFound + 1
        } else {
            console.log(`No treasure found :(`)
        }
        }
    )

    console.log(`There were ${treasureFound} treasures in the island`)
}

treasureHunter(['T', '-', 'T', '-', '-'])





// Callback function = det er en funciton der tager en function som en parameter
/*
[].forEach(()=>{})

    [].forEach(function (){} )
 */