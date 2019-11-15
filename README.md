
# Clickery

A memory game where each time a card is clicked, the images are shuffled. If a card more than once or the game is over. The game automatically rests, and the user can click a card to start a new game. 

### Deployed Site
[https://gmocore.github.io/clickery/](https://gmocore.github.io/clickery/)


## Built With

### Languages
HTML, CSS, JavaScript

### Libraries/Packages
React

## Code Overview
React app created `create-react-app`. components are rendered using using class components. the [Fisher-Yates shuffle algorithm](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle) is used to handle shuffling of images. Characters, score, highscore, whether an image is clicked, and message to display, are all stored in state, and modified based on whether the user clicked a correct selection.  The `Photo` component maps through each character stored in `characters.json` and displays an image card for each character in the json array.  props are used to render each card with the appropriate attributes. 
`cardClicked` acts as a master function and pulls in the various other methods to track everything stored in state and check for wins or losses.




## Author

* **Gerritt Black** - *all of it* - [gmocore](https://github.com/gmocore)



