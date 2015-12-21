

/*
This is the initial state of the Redux Store. I store it in a separate file because I also use
it in the reducers when we do the Reset action.
It returns a function instead of an object to make sure no one can change the initial state.
*/

var C = require("./constants");

module.exports = function(){
	
	
    return {
        quiz: {
            currentValue: "",
			Points: 0,
			question: "",
				CountQuestions: 0,
				CountChoices: 0,
				Choice1: "",
				Choice2: "",
				Choice3: "",
				CountAnswers: 0,
				pos: 0,
				HighScore: 0,
				highscoremsg: "",
				Inprogress: false,
				quiznumber:0,
				HighScoreNhl: 0,
				hsmsgnhl: ""
		}	
    }
};