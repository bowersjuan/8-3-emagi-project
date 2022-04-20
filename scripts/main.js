// Make API Requests to the following endpoint: https://emagi-server-8-3.herokuapp.com/api/emojis

// Set up API Call Components
const BASE_URL = "https://emagi-server-8-3.herokuapp.com/api/emojis";

// Set up Global Variables

fetch(BASE_URL)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    fillCategoriesDropdownMenu(response);
  })
  .catch((e) => console.log(e));

// Helper Functions

/**
 * Enconder Function takes in a string of characters and converts them to corresponding emoji icons by referring to the letter property of each emoji object in the response array
 * @param {array} response
 * @param {string} str
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
  const resultElement = document.querySelectorAll("main article aside")[0];
  resultElement.classList.add("success");
  resultElement.classList.remove("error");

  if (!str) {
    resultElement.classList.toggle("error");
    placeholderConvertText.innerText = "Text field cannot be empty";
  }
}

/**
 * Searcher Function takes in a string and searches through the response array for any elements that have a name property that includes the inputted string. It then outputs the emoji icons for each matching emoji object
 * @param {array} response
 * @param {string} str
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

/**
 * Fill Categories Dropdown Function takes all the possible catgeries of emojis and appends them in a dropdown menu at the start of the page launch
 * @param {array} response
 */
function fillCategoriesDropdownMenu(response) {
  let emojiCategories = [];
  response.forEach((element) => {
    emojiCategories = emojiCategories.concat(element.categories);
  });

  let uniqueCategories = [...new Set(emojiCategories)];

  const categoriesDropdown = document.getElementById("category");

  uniqueCategories
    .map((category) => {
      return category[0].toUpperCase() + category.slice(1);
    })
    .forEach((category) => {
      const categoryElement = document.createElement("option");
      categoryElement.innerText = category;
      categoriesDropdown.append(categoryElement);
    });
}

/**
 * Randomizer function allows the user to choose a category of emoji from a dropdown menu and then get a random emoji symbol from the response object that corresponds to the selected category
 * @param {*} response
 * @param {*} category
 */
function randomizeEmojiFromCategory(response, category) {
  let res = [];

  response.forEach((element) => {
    if (element.categories.includes(category.toLowerCase())) {
      res.push(element.symbol);
    }
  });

  let randomIndex = Math.floor(Math.random() * res.length);

  const placeholderRandomizerText =
    document.querySelectorAll("article aside p")[2];
  placeholderRandomizerText.innerText = `${res[randomIndex]}`;
}

function replaceTextWithEmoji(response, str) {
  let arrayWithEmojis = [];
  let formattedStrArray = str.toLowerCase().split(" ");

  for (let element of response) {
    let res = "";
    formattedStrArray.forEach((word) => {
      res = word;
      if (word.includes(element.name)) {
        res = element.symbol;
        arrayWithEmojis.push(res);
      }
    });
  }
  console.log(arrayWithEmojis);
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
});

// Click Event for Randomizer
const randomizerForm = document.querySelectorAll("form")[2];
randomizerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const BASE_URL = "https://emagi-server-8-3.herokuapp.com/api/emojis";

  const category = event.target.category.value;
  if (category === "-- Choose a Category --") {
    alert("Category must be selected");
    return;
  }

  fetch(BASE_URL)
    .then((response) => response.json())
    .then((response) => {
      randomizeEmojiFromCategory(response, category);
    })
    .catch((e) => console.log(e));

  event.target.category.value = "-- Choose a Category --";
});

// Click Event for Text Replacer
const replacerForm = document.querySelectorAll("form")[3];
replacerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const BASE_URL = "https://emagi-server-8-3.herokuapp.com/api/emojis";

  const textStr = event.target.replace.value;
  if (textStr === "") {
    alert("Text must be entered");
    return;
  }

  fetch(BASE_URL)
    .then((response) => response.json())
    .then((response) => {
      replaceTextWithEmoji(response, textStr);
    })
    .catch((e) => console.log(e));

  event.target.replace.value = "";
});
