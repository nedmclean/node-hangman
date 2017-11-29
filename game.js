var inquirer = require("inquirer");
var word = require("./word");

//will need functions within the constructor to start the game, 
//to pick a random word from the word array, 
//to display blank spaces,
//to check guessed letters/store input from the user,
//if the guessed letter is right, we need to alert and update the word,
//if the word is guessed, return that they've won!
//restart the game

//starter constructor
function Play(){

this.game = function(){
	this.guesses = 12;
	this.word();
};
//gives a word
this.newWord = function() {
	var randWord = word[Math.floor(Math.random() * word.length)];

}

}