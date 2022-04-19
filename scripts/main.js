// Make API Requests to the following endpoint: https://emagi-server-8-3.herokuapp.com/api/emojis

// Set up API Call Components

const BASE_URL = "https://emagi-server-8-3.herokuapp.com/api/emojis";

fetch(BASE_URL)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((e) => console.log(e));

// Helper Functions

/**
 *
 * @param {array} response
 * @param {string} str
 * @returns converted string that replaces letters with their corresponding emoji icons
 */
function convertLettersStrToEmojiStr(response, str) {
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

  const emojiConverterResult = document.querySelectorAll("h3")[0];
  emojiConverterResult.innerText = `${res}`;

  const placeholderText = document.querySelector("article aside p");
  placeholderText.remove();
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
      convertLettersStrToEmojiStr(response, strToDecode);
    })
    .catch((e) => console.log(e));
});
