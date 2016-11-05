var $ = require('jquery');
var domOutput = require('./dom-output');

var questionProcessing = {
    getQuestion: function(state, questions) {
        var randIndex = Math.floor(Math.random() * (questions.length)),
            question = questions[randIndex],
            $jsQuestions = $('#js-questions'),
            answer = questions[randIndex].correct,
            context = this;

        questions.splice(randIndex, 1);
        $jsQuestions.append(domOutput.renderQuestion(state, question));

        $('.js-answers:eq(' + state.questionNum + ')').on('click', '.checkbox', function(e) {
            var $this = $(this),
                answerSection = $this.parents('.js-answers').siblings('.answer-section');

            // Turn off the listener so each question is only answered once.
            $('.js-answers').off('click');

            $this.addClass('checked');

            if ($this.data('question') === answer) {
                state.correct++;
                $(answerSection).addClass('correct');
                $(answerSection).append('Correct: ' + question.description);
            } else {
                state.wrong++;
                $(answerSection).addClass('wrong');
                $(answerSection).append('Wrong: ' + question.description);
            }

            context.updateScore(state);

            state.questionNum++;

            if (state.questionNum < 5) {
                context.getQuestion(state, questions);
            } else {
                context.getResults(state, questions);
            }
        });
    },
    updateScore: function(state) {
        $('.js-correct-num').text(state.correct);
        $('.js-wrong-num').text(state.wrong);
    },
    getResults: function(state, questions) {
        $('.js-content').append(domOutput.renderResults(state));
        $('.js-replay').click(function(e) {
            e.preventDefault();
            location.reload();
        });
    }
};

module.exports = questionProcessing;
