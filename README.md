# jQuery Guess Who

[x] Add names and usernames to data.js
[x] Get urls for each image and append to data.js
[x] Link jQuery to project 
[x] Create div container with unique id
[x] Create readyNow function to append divs to html
[x] Add photos to DOM
[x] Add image information 

Add to SERVER
[x] Organize files
[x] Add a `.git ignore` file
[x] `npm init --yes` and `npm install express`
[x] Add start script to 'pakage.json'
[x] Create an express server that listens on a port
[x] Add HTML to index.HTML and make sure it displays on localhost:PORT
[x] TEST-npm start

You will be creating a pick-the-person game with HTML, CSS, and jQuery!

## Update Your GitHub Profile Picture
Before you get started writing code, please update your GitHub profile to include a picture of yourself. Feel free to add you and your group members to the `data.js` file -- follow the format!

## Display Profile Pictures
On document load, append divs for each person in the people array (it comes from `data.js` file) to the DOM with jQuery (not hardcoded), each containing an image from each GitHub profile (see the provided data.js file). As an example, the below HTML would produce Chris's GitHub profile picture where `christopher-black` is Chris's GitHub username and `250` is the size of the picture requested.

```HTML
<img src="https://github.com/christopher-black.png?size=250" alt="Profile image of Chris">
```
You'll need to access the property of each persons `githubUsername` property.


## Start the Game

Prompt the player to pick one of the people by displaying a randomly selected name.

Here is a handy function to generate a random number given a minimum and maximum.

```JavaScript
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
```

[x] display a name that is randomly selected

## Game Logic

[x] create a click hamdler for on click on page $(body).on('click', .profilePicture, checkMatch)
[x] create a checkMatch function to see if the click and pictures match
[x] create an alert to tell the user that they clicked the correct person
[x] create an alert to tell the user they clicked the wrong person

- If the player clicks on the correct person
    - give them a success message.
    - Prompt the player to pic
    k another person randomly and let them keep playing.
- If they pick the wrong person
    - give them an error message.
    - allow them to try again.

![example.gif](example.gif)

## Stretch Goals

- When the player clicks on the correct person, add a visual cue that indicates that they picked the correct person. Then change it back after 2 seconds and resume the game. You'll need to use the [built in `setTimeout()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout) function for the timing. This function waits a given amount of time and then calls a function you specify.
- Add some jQuery effects, animations and styling to your game! There are quite a few built in. [See the Docs!](https://api.jquery.com/category/effects/)
- Randomize the array of images before displaying them on the page to make the game more challenging.
