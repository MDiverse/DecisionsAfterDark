
// script.js

let score = 0;

function updateStory(newStory, points) {
    const storyElement = document.getElementById("story");
    const scoreElement = document.getElementById("score");

    // Update story text with fade-in effect
    storyElement.style.opacity = 0;
    setTimeout(() => {
        storyElement.textContent = newStory;
        storyElement.style.opacity = 1;
    }, 300);

    // Update score
    if (points !== undefined) {
        score += points;
        scoreElement.textContent = `Score: ${score}`;
        scoreElement.style.animation = "bounce 1s ease-in-out";
        setTimeout(() => {
            scoreElement.style.animation = ""; // Reset animation
        }, 1000);
    }

    // End game if the scenario is over
    if (newStory.includes("Game Over") || newStory.includes("Congratulations")) {
        document.getElementById("choices").innerHTML = `<button onclick="restartGame()">Restart</button>`;
    }
}

function makeChoice(choice) {
    if (choice === 1) {
        updateStory("You start drinking and quickly lose track of how many you’ve had. You decide to drive home anyway. On the way, you’re pulled over by the police for swerving...

Game Over: You’re arrested for DUI.", -10);
    } else if (choice === 2) {
        updateStory("Your friend respects your decision, and you stay sober for the night. You drive home safely and wake up refreshed the next day.

Congratulations! You made a responsible choice.", 10);
    } else if (choice === 3) {
        updateStory("Your friend tells you it’s a strong cocktail. What do you do next?");
        document.getElementById("choices").innerHTML = `
            <button onclick="makeChoice(4)">Accept it anyway</button>
            <button onclick="makeChoice(5)">Decline the drink</button>
        `;
    } else if (choice === 4) {
        updateStory("The drink hits you harder than expected. You feel unwell. A friend calls a cab for you, and you get home safely but regret drinking.", 0);
    } else if (choice === 5) {
        updateStory("You avoid drinking and enjoy the party responsibly.

Good job avoiding unnecessary risks!", 10);
    }
}

function restartGame() {
    score = 0;
    document.getElementById("story").textContent = "You're at a party, and your friend hands you a drink. What will you do?";
    document.getElementById("score").textContent = `Score: ${score}`;
    document.getElementById("choices").innerHTML = `
        <button onclick="makeChoice(1)">Accept the drink</button>
        <button onclick="makeChoice(2)">Politely decline</button>
        <button onclick="makeChoice(3)">Ask what's in it</button>
    `;
}
