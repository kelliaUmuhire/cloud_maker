/**
 * -1: Variables definition
 * 0. First have an array of all words
 * 1. Count the occurrence for every word in the paragraph
 * 2. Keep the count in an object
 * 3. Sort them from biggest to the smallest occurence
 * 4. Selecting the first 12
 * 5. Loop over the words:
 * 5.1 Create a paragraph
 * 5.2 It's text will be the current word
 * 5.3 Font-size: logic
 * 5.4 Append to div
 * */

//-1: Define variables
const textElement = document.getElementById("myParagraph");
const divElement = document.getElementById("myWordCloud");

function cloudMaker() {
  //0
  const words = textElement.innerText.toLowerCase().split(/[.:,;\s]+/);

  //1 & 2
  let occurrences = {};
  for (let i = 0; i < words.length; i++) {
    if (occurrences[words[i]]) {
      occurrences[words[i]]++;
    } else {
      occurrences[words[i]] = 1;
    }
  }

  //3 & 4
  let sortedOccurrences = Object.entries(occurrences)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12);

  //5
  let currentSize = 64;
  for (let i = 0; i < sortedOccurrences.length; i++) {
    let p = document.createElement("p");
    p.textContent = sortedOccurrences[i][0];
    p.style.fontSize = currentSize + "px";
    p.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    if ((i + 1) % 3 === 0) {
      p.style.transform = "rotate(-90deg)";
    }
    currentSize -= 4;
    divElement.appendChild(p);
  }
}

cloudMaker();

// create a object with 12 keys, each key the number of occurences and its value the array of the words with that occurence
