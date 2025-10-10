/*-----------------------------------
     02 - Startup name generator
 -----------------------------------

Inside the function there should be two arrays with startup words
Use the two arrays to get a random word from each array and return the new startup name with the two words
*/

function getStartupName(){
    const firstWords = ["Neo", "Inno", "Smart", "Blue", "Next", "Bright", "Quantum", "Rapid", "Future", "Digital", "Alpha", "Nova", "Core", "Edge", "Logic", "Pixel", "Cloud", "Data", "Vision",
        "Hyper", "Matrix", "Cyber", "Sync", "Flow", "Lumen", "Wave", "Prime", "Axis", "Spark",];
    const secondWords = ["Vision", "Solutions", "Systems", "Works", "Dynamics", "Hub", "Network", "Innovations", "Labs", "Path",  "Volt", "Fusion", "NeoTech", "Mind", "Opti", "Stream", "Shift", "Pulse", "Sphere", "Nexa",
        "Aero", "Zen", "Boost", "Path", "Leap", "Vibe", "Echo", "Circuit", "Byte", "Orbit",];
// Chatgpt har hjulpet med at generere flere startup ord

    let randomFirstIndex = Math.floor(Math.random() * firstWords.length)
    let randomSecondIndex = Math.floor(Math.random() * secondWords.length)
// kildehenvisning: Chatgpt - how to get a random number

    let randomFirstWord = firstWords[randomFirstIndex]
    let randomSecondWord = secondWords[randomSecondIndex]

    return `${randomFirstWord} ${randomSecondWord}`
}

console.log(`Your startup name could be: ${getStartupName()}`)


/*
Your startup name could be: Prime Orbit

Your startup name could be: Nova Zen

 */