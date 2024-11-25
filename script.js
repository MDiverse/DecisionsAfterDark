/* General Styles */
body {
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #5e4b8b, #222);
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* Game Container */
.game-container {
  max-width: 600px;
  width: 100%;
  text-align: center;
}

/* Card Styling */
.card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.card-title {
  font-size: 2em;
  color: #f4a261;
  margin-bottom: 20px;
}

.story-text {
  background: rgba(0, 0, 0, 0.3);
  color: white;
  padding: 20px;
  border-radius: 8px;
  min-height: 150px;
  white-space: pre-line;
}

/* Option Buttons */
.option-button {
  background-color: #f4a261;
  border: none;
  color: white;
  padding: 15px;
  margin: 10px;
  border-radius: 5px;
  font-size: 1.1em;
  cursor: pointer;
  width: 100%;
}

.option-button:hover {
  background-color: #e76f51;
}

/* End Dialog */
.end-dialog {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
}

.dialog-content {
  background: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 10px;
  text-align: center;
}

.dialog-content h2 {
  color: #d32f2f;
}

.dialog-content button {
  background-color: #f4a261;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}

.dialog-content button:hover {
  background-color: #e76f51;
}
