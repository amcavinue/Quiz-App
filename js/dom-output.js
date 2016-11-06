var $ = require('jquery');

/**
* Functions used for outputting html info to the DOM.
*/
var domOutput = {
    closingStatement(state) {
        if (state.correct === 5) {
            return 'You love cats!';
        } else if (state.correct === 4) {
            return 'You like cats.';
        } else if (state.correct === 3) {
            return 'You\'re alright with cats.';
        } else {
            return 'You might be a dog person.';
        }
    },
    renderQuestion(state, qAndA) {
        return '<section class="question">' +
        '<div class="question-content">' +
        '<span class="question-num">Q' + (state.questionNum + 1) + '.</span>' +
        '<h2>' + qAndA.question + '</h2>' +
        '<ul class="js-answers">' +
        '<li>' +
        '<span class="checkbox" data-question="a"></span>' +
        'a. ' + qAndA.a +
        '</li>' +
        '<li>' +
        '<span class="checkbox" data-question="b"></span>' +
        'b. ' + qAndA.b +
        '</li>' +
        '<li>' +
        '<span class="checkbox" data-question="c"></span>' +
        'c. ' + qAndA.c +
        '</li>' +
        '<li>' +
        '<span class="checkbox" data-question="d"></span>' +
        'd. ' + qAndA.d +
        '</li>' +
        '</ul>' +
        '<div class="answer-section">' +
        '</div>' +
        '</div>' +
        '</section>' +
        '<hr />';
    },
    renderResults(state) {
        return '<section class="results">' +
            '<h2>You finished the quiz!</h2>' +
            '<p class="result-stats">' +
            'You Got <strong><span class="js-correct-num">' + state.correct + '</span>/5 Correct</strong>' +
            '</p>' +
            '<p class="closing-statement">' + this.closingStatement(state) + '</p>' +
            '<a href="#" class="replay js-replay">PLAY AGAIN</a>' +
            '</section>';
    }
};

module.exports = domOutput;
