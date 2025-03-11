function generatePoetry() {
    const userInput = document.getElementById('userInput').value;
    const mood = document.getElementById('moodSelect').value;
    const poetryOutput = document.getElementById('poetryOutput');

    if (!userInput.trim()) {
        poetryOutput.innerHTML = '<p>Please enter some text...</p>';
        return;
    }

    let poetryLines;

    switch (mood) {
        case 'happy':
            poetryLines = [                 
                `In the glow of your joyful ${userInput},`,
                `Where the sun always shines bright,`,
                `The world dances with your laughter,`,
                `And the heart takes flight.`,
                ``,
                `Your words, a melody of cheer,`,
                `In every sentence, happiness is clear,`,
                `With ${userInput} in the air,`,
                `Life’s colors become so rare.`
            ];
            break;
        case 'sad':
            poetryLines = [
                `In the shadow of your ${userInput},`,
                `Where tears blend with the rain,`,
                `The echoes of your sorrow linger,`,
                `In a bittersweet refrain.`,
                ``,
                `The words you share, a mournful sigh,`,
                `Beneath the weeping sky,`,
                `With ${userInput} wrapped in pain,`,
                `A haunting, gentle strain.`
            ];
            break;
        case 'angry':
            poetryLines = [
                `In the fire of your ${userInput},`,
                `Where fury finds its place,`,
                ` The tempest roars with passion,`,
                `And the storm has found its face.`,
                ``,
                `The words you hurl, a fierce display,`,
                `In anger’s fierce array,`,
                `With ${userInput} igniting the blaze,`,
                `In a wild and tempestuous daze.`
            ];
            break;
        default:
            poetryLines = [
                `In the realm of your ${userInput},`,
                `A world of thoughts unfolds,`,
                ` Each word a thread in the tapestry,`,
                `A story yet untold.`,
                ``,
                `The essence of what you speak,`,
                `In every sentence and every line,`,
                `Weaves a unique poetic fabric,`,
                `A creation truly divine.`
            ];
    }

    poetryOutput.innerHTML = poetryLines.join('<br>');
}
