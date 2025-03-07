# Emagi Project

Emojis + magic = Emagi! ⭐️

In this project, you'll build an interactive application that will make use of all kinds of emojis.

![Image of the first part of the Emagi project working.](./assets/example.gif)

## Getting started

### Installation

1. Fork and clone this repository.

1. Run `npm install`.

1. Open the `index.html` file or run a server that will automatically reload whenever you make changes by running `npm start`.

## API

You will make use of an API in this project that will return a list of emojis as well as detailed information about them. An example response is below.

`GET` https://emagi-server-8-3.herokuapp.com/api/emojis

```js
{
  emojis: [
    {
      symbol: "👽",
      letter: "a",
      name: "alien",
      categories: ["face"],
    },
    {
      symbol: "👶",
      letter: "b",
      name: "baby",
      categories: ["face"],
    },
    // ...
  ];
}
```

Each emoji in list has a variety of properties, detailed below.

- `symbol`: The emoji's symbol.
- `letter` (optional): A letter that represents the emoji.
- `name`: A human-readable name for the emoji.
- `categories`: An array of categories for the emoji. Can be empty.

Your instructor will give you additional details on the server.

## Features

You will complete as many of the four sections listed below as possible. Each section has a series of features.

### Encode phrase

The Encode section should take whatever the user input is and convert it into emojis. It should be case insensitive and skip over non-letters.

For example, the phrase "HTML, CSS, JS" would become:

```
💜👅🍄🐞, 🌵💀💀, 🤹💀
```

Commas and spaces are kept intact.

#### Feature list

- [ ] Complete the main encoding functionality so that text inserted into the text field is translated to emojis. The result should be displayed in the paragraph inside of the `.result` element.

- [ ] After submitting, if the encoding was successful, clear out the text field.

- [ ] After submitting, if the encoding was successful, add a class of `.success` to the `.result` element.

- [ ] After submitting, if the text field is empty, include an error message in the `.result` element.

- [ ] After submitting, if the text field is empty, add a class of `.error` to the `.result` element.

### Search for emoji

The Search section should take whatever the user input is and search through all of the emojis by name. If the text matches part or all of the name, return that emoji or emojis.

For example, if you searched "heart" it should display the following:

```
💜💔
```

#### Feature list

- [ ] Complete the main search functionality so that text inserted into the text field is translated to one or more emoji. The result should be displayed in the paragraph inside of the `.result` element.

- [ ] After submitting, if the search was successful, clear out the text field.

- [ ] After submitting, if the search was successful, add a class of `.success` to the `.result` element.

- [ ] After submitting, if the text field is empty, include an error message in the `.result` element.

- [ ] After submitting, if the text field is empty, add a class of `.error` to the `.result` element.

### Random emoji by category

The Random section includes a dropdown. That dropdown should be populated with all of the possible categories from the list of emojis.

Then, when a category is selected, a random emoji should be chosen from that category and displayed. For example, if the category is "Plant", either the "🌵" or "🎄" emoji might be shown.

#### Feature list

- [ ] On page load, additional categories should be added to the `select` element.

- [ ] On page load, each category should be properly capitalized. (e.g. "Entertainment" instead of "entertainment".)

- [ ] Complete the main randomization functionality so that after clicking the submitting button, a random emoji from that category is shown. The result should be displayed in the paragraph inside of the `.result` element.

- [ ] After submitting, if the randomization was successful, reset the `select` element so that it shows the default option again.

- [ ] After submitting, if the randomization was successful, add a class of `.success` to the `.result` element.

- [ ] After submitting, if the default option is still selected, include an error message in the `.result` element.

- [ ] After submitting, if the default option is still selected, add a class of `.error` to the `.result` element.

### Replace text

The Replace section includes a text area. Each word inputted into that area should be replaced by an emoji, if possible. You will know if you can replace an emoji if the name matches the word. Otherwise, leave the text that remains.

For example, if the text inputted is "If there is rain I will read a book", it should display the following:

```
If there is 🌧 I will read a 📖
```

#### Feature list

- [ ] Complete the main replacement functionality so that text inserted into the text area is replaced with emojis, where it makes sense. The result should be displayed in the paragraph inside of the `.result` element.

- [ ] After submitting, if the replacement was successful, clear out the text area.

- [ ] After submitting, if the replacement was successful, add a class of `.success` to the `.result` element.

- [ ] After submitting, if the text area is empty, include an error message in the `.result` element.

- [ ] After submitting, if the text area is empty, add a class of `.error` to the `.result` element.

- [ ] After submitting, if the replacement caused nothing to be replaced, include an error message in the `.result` element.

- [ ] After submitting, if the replacement caused nothing to be replaced, add a class of `.error` to the `.result` element.

- [ ] When replacing, replace words that have punctuation directly next to them. For example, "rain," should be translated to "🌧,".

- [ ] When replacing, replace partial words with emojis. For example, "raining" should be translated to "🌧ing".
