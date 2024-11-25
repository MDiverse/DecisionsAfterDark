// Initialize the game state
let story = {
  text: "Welcome to 'Decisions After Dark'!\n\nYou're at a party, and your friend hands you a drink.\nWhat will you do?",
  options: [
    { text: "Accept the drink", action: "accept" },
    { text: "Politely decline", action: "decline" },
    { text: "Ask what's in it", action: "ask" }
  ]
};

let endMessage = "";
let showEndDialog = false;

// Function to handle choice selection
function handleChoice(action) {
  switch (action) {
    case "accept":
      story.text = "You start drinking and quickly lose track of how many you've had.\nYou decide to drive home anyway. On the way, you're pulled over by the police for swerving...\n\nGame Over: You're arrested for DUI.";
      endMessage = "Never drink and drive. One bad decision can change your life forever.";
      showEndDialog = true;
      break;

    case "decline":
      story.text = "Your friend respects your decision, and you stay sober for the night.\nYou drive home safely and wake up refreshed the next day.\n\nCongratulations! You made a responsible choice.";
      endMessage = "Great job making a responsible choice! Your safety comes first.";
      showEndDialog = true;
      break;

    case "ask":
      story.text = "Your friend tells you it's a strong cocktail.\nWhat do you do next?";
      story.options = [
        { text: "Accept it anyway", action: "accept_cocktail" },
        { text: "Decline the drink", action: "decline" }
      ];
      break;

    case "accept_cocktail":
      story.text = "The drink hits you harder than expected. You feel unwell.\nA friend calls a cab for you, and you get home safely but regret drinking.";
      endMessage = "While you made it home safely thanks to your friend, it's important to be cautious about accepting drinks without knowing their strength.";
      showEndDialog = true;
      break;

    default:
      break;
  }

  // Update the game UI with the new state
  updateUI();
}

// Update the UI with the new story and options
function updateUI() {
  document.getElementById("story-text").innerText = story.text;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = '';

  story.options.forEach(option => {
    const button = document.createElement('button');
    button.classList.add('option-button');
    button.innerText = option.text;
    button.onclick = () => handleChoice(option.action);
    optionsDiv.appendChild(button);
  });

  // If it's the end of the game, show the dialog
  if (showEndDialog) {
    document.getElementById("end-message").innerText = endMessage;
    document.getElementById("end-dialog").style.display = 'flex';
  }
}

// Function to restart the game
function restartGame() {
  story = {
    text: "Welcome to 'Decisions After Dark'!\n\nYou're at a party, and your friend hands you a drink.\nWhat will you do?",
    options: [
      { text: "Accept the drink", action: "accept" },
      { text: "Politely decline", action: "decline" },
      { text: "Ask what's in it", action: "ask" }
    ]
  };
  showEndDialog = false;
  updateUI();
  document.getElementById("end-dialog").style.display = 'none';
}

// Initial UI setup
updateUI();
