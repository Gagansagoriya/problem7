// Import the necessary modules here
const fs = require('fs');

const Solution = () => {
  // Creating a file system and writing to it
  try {
    fs.writeFileSync("notes.txt", "The world has enough coders ");
  } catch (error) {
    console.log(error);
  }

  // Reading and displaying the contents of the file
  try {
    const fileBeforeAppend = fs.readFileSync("notes.txt", "utf-8");
    console.log(fileBeforeAppend);
  } catch (error) {
    console.log(error);
  }

  // Appending to the file
  try {
    fs.appendFileSync("notes.txt", "BE A CODING NINJA!");   
  } catch (error) {
    console.log(error);
  }

  // Reading and displaying the updated contents of the file
  try {
    const fileAfterAppend = fs.readFileSync("notes.txt", "utf-8");
    console.log(fileAfterAppend);
  } catch (error) {
    console.log(error);
  }
};

Solution();
module.exports = Solution;
