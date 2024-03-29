// Initialize variables
let myScore = 0;
let myLives = 3;
let myColors;
let myCorrectColorIndex;
let myCorrectColor;

initializeGame();

// Function to initialize the game
function initializeGame() {
    myColors = generateRandomColors(3);
    myCorrectColorIndex = Math.floor(Math.random() * 3);
    myCorrectColor = myColors[myCorrectColorIndex];

    const myRgbDisplay = document.getElementById('rgbValue');
    myRgbDisplay.textContent = myCorrectColor;

    const myColorOptionsContainer = document.getElementById('colorOptions');
    myColorOptionsContainer.innerHTML = '';

    for (let i = 0; i < myColors.length; i++) {
        const myColorOption = document.createElement('div');
        myColorOption.classList.add('colorOption');
        myColorOption.style.backgroundColor = myColors[i];
        myColorOption.onclick = () => checkColor(myColors[i]);
        myColorOptionsContainer.appendChild(myColorOption);
    }
}

// Function to check if the player selected the correct color
function checkColor(color) {
    if (color === myCorrectColor) {
        myScore++;
        document.getElementById('message').textContent = 'Correct!';
        if (myScore < 5) {
            setTimeout(() => {
                initializeGame();
                document.getElementById('message').textContent = '';
            }, 1000);
        } else {
            document.getElementById('message').textContent = 'You win!';
            document.getElementById('restartButton').style.display = 'block';
        }
    } else {
        myLives--;
        document.getElementById('message').textContent = 'Incorrect!';
        if (myLives === 0) {
            gameOver();
        }
    }
    document.getElementById('scoreValue').textContent = myScore;
}

// Function to handle game over state
function gameOver() {
    document.getElementById('message').textContent = 'Game Over!';
    document.getElementById('restartButton').style.display = 'block';
}

// Function to restart the game
function restartGame() {
    myScore = 0;
    myLives = 3;
    document.getElementById('scoreValue').textContent = myScore;
    document.getElementById('message').textContent = '';
    document.getElementById('restartButton').style.display = 'none';
    initializeGame();
}

// Function to generate random RGB colors
function generateRandomColors(numColors) {
    const colors = [];
    for (let i = 0; i < numColors; i++) {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        colors.push(`rgb(${red}, ${green}, ${blue})`);
    }
    return colors;
}
