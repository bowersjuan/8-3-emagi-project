// Make API Requests to the following endpoint: https://emagi-server-8-3.herokuapp.com/api/emojis

// Set up API Call Components
const BASE_URL = "https://emagi-server-8-3.herokuapp.com/api/emojis";

fetch(BASE_URL)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((e) => console.log(e));

// Helper Functions
/**
 * Enconder Function takes in a string of characters and converts them to corresponding emoji icons by referring to the letter property of each emoji object in the response array
 * @param {array} response
 * @param {string} str
 * @returns converted string that replaces letters with their corresponding emoji icons
 */
function convertLettersToEmoji(response, str) {
  let res = str.split("");

  res = res.map((character) => {
    let emoji = response.find((element) => {
      return element.letter === character;
    });

    if (!emoji) {
      return character;
    } else {
      return emoji.symbol;
    }
  });

  res = res.join("");

  const placeholderConvertText =
    document.querySelectorAll("article aside p")[0];
  placeholderConvertText.innerText = `${res}`;
}

/**
 * Searcher Function takes in a string and searches through the response array for any elements that have a name property that includes the inputted string. It then outputs the emoji icons for each matching emoji object
 * @param {array} response
 * @param {string} str
 * @returns String of emojis that have the str string included in their names
 */
function emojiSearcher(response, str) {
  let formattedStr = str.toLowerCase();
  let res = "";

  response.forEach((element) => {
    if (element.name.includes(formattedStr)) {
      res += element.symbol;
    }
  });

  if (!res) {
    res = `Emoji with name "${str}" could not be found`;
  }

  const placeholderSearchText = document.querySelectorAll("article aside p")[1];
  placeholderSearchText.innerText = `${res}`;
}

// Click Events
// Click Event for Encoder
const encoderForm = document.querySelectorAll("form")[0];
encoderForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const BASE_URL = "https://emagi-server-8-3.herokuapp.com/api/emojis";

  const strToDecode = event.target.encode.value;

  fetch(BASE_URL)
    .then((response) => response.json())
    .then((response) => {
      convertLettersToEmoji(response, strToDecode);
    })
    .catch((e) => console.log(e));

  event.target.encode.value = "";
  // Resets search text input field to blank after submission
});

// Click Event for Emoji Searcher
const searcherForm = document.querySelectorAll("form")[1];
searcherForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const BASE_URL = "https://emagi-server-8-3.herokuapp.com/api/emojis";

  const strToSearch = event.target.search.value;
  if (!strToSearch) {
    alert("Search input cannot be empty");
    return;
  }

  fetch(BASE_URL)
    .then((response) => response.json())
    .then((response) => {
      emojiSearcher(response, strToSearch);
    })
    .catch((e) => console.log(e));

  event.target.search.value = "";
  // Resets search text input field to blank after submission
});
