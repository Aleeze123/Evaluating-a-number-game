// Evaluating a number game

import inquirer from "inquirer";
// Define the dynamic number value
const dynamicNumber: number = 27;

// Function to start the game
async function Game() {
    // Prompt the user to enter a number
    const userInputResponse = await inquirer.prompt({
        type: "input",
        name: "userInput",
        message: "Enter a Number",
        validate: (input: string) => {
            
            const parsedInput = parseFloat(input);
            if (isNaN(parsedInput)) {
                return 'Please enter a valid number.';
            }
            return true;
        }
    });

    const userInput: number = parseFloat(userInputResponse.userInput);

    // Compare the entered number with the dynamic number value
    if (userInput > dynamicNumber) {
        console.log(`${userInput} is greater than ${dynamicNumber}.`);
    } else if (userInput < dynamicNumber) {
        console.log(`${userInput} is less than ${dynamicNumber}.`);
    } else {
        console.log(`${userInput} is equal to ${dynamicNumber}.`);
    }
}

// Call the startGame function to begin the game
Game();