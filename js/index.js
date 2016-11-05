// Libraries.
var $ = require('jquery');

// Custom modules.
var questionProcessing = require('./question-processing');
var domOutput = require('./dom-output');

/**
 * DOCUMENT READY
 */
$(function() {
    var questions = [
        {
            question: "What is the best cat?",
            a: "Cat in hat",
            b: "House cat",
            c: "Alley cat",
            d: "All cats",
            correct: 'd',
            description: "All cats are best."
        },
        {
            question: "Which of these is a cat breed?",
            a: "Wizard cat",
            b: "Friendly cat",
            c: "Maine Coon",
            d: "Jamaican",
            correct: 'c',
            description: "The Maine Coon is the largest domesticated breed of cat."
        },
        {
            question: "What do cats go crazy for?",
            a: "Oranges",
            b: "Catnip",
            c: "Old ladies",
            d: "Cocoa Puffs",
            correct: 'b',
            description: "Cats are exquisitely susceptible to a volatile oil found in the stems and leaves of the catnip plant."
        },
        {
            question: "What is a cat's typical body temperature (in degrees F)?",
            a: "101.5",
            b: "Pi",
            c: "32",
            d: "212",
            correct: 'a',
            description: "A cat's normal body temperature can range from 100.5 to 102.5 degrees."
        },
        {
            question: "Which U.S. president kept cats in the White House?",
            a: "Hillary Clinton",
            b: "Barack Obama",
            c: "Abraham Lincoln",
            d: "Richard Nixon",
            correct: 'c',
            description: "Abraham Lincoln kept four cats in the White House."
        },
        {
            question: "What are cat whiskers for?",
            a: "They are highly-sophisticated, multi-purpose, sensory organs.",
            b: "They help cats attract mates.",
            c: "They are used solely for brushing up on human legs.",
            d: "They are just fur that has grown too long.",
            correct: 'a',
            description: "Cat wiskers are sensitive organs used for many purposes."
        },
        {
            question: "How many toes do cats have?",
            a: "2",
            b: "4",
            c: "20",
            d: "18",
            correct: 'd',
            description: "Cats have five toes on each front paw, but only four toes on each back paw."
        },
    ];

    var state = {
        questionNum: 0,
        correct: 0,
        wrong: 0
    };

    $('#js-start-quiz').click(function(e){
        e.preventDefault();
        questionProcessing.getQuestion(state, questions);

        $('#js-start-quiz').off('click');
    });
});
