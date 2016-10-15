$(function() {
	var questions = [
		{
			question: "1 What is the best cat?",
			a: "Cat in hat",
			b: "House cat",
			c: "Alley cat",
			d: "All cats",
			correct: 'd',
			description: "All cats are best."
		},
		{
			question: "2 What is the best cat?",
			a: "Cat in hat",
			b: "House cat",
			c: "Alley cat",
			d: "All cats",
			correct: 'd',
			description: "All cats are best."
		},
		{
			question: "3 What is the best cat?",
			a: "Cat in hat",
			b: "House cat",
			c: "Alley cat",
			d: "All cats",
			correct: 'd',
			description: "All cats are best."
		},
		{
			question: "4 What is the best cat?",
			a: "Cat in hat",
			b: "House cat",
			c: "Alley cat",
			d: "All cats",
			correct: 'd',
			description: "All cats are best."
		},
		{
			question: "5 What is the best cat?",
			a: "Cat in hat",
			b: "House cat",
			c: "Alley cat",
			d: "All cats",
			correct: 'd',
			description: "All cats are best."
		},
		{
			question: "6 What is the best cat?",
			a: "Cat in hat",
			b: "House cat",
			c: "Alley cat",
			d: "All cats",
			correct: 'd',
			description: "All cats are best."
		},
		{
			question: "7 What is the best cat?",
			a: "Cat in hat",
			b: "House cat",
			c: "Alley cat",
			d: "All cats",
			correct: 'd',
			description: "All cats are best."
		},
	]
	state = {
		questionNum: 0,
		correct: 0,
		wrong: 0
	};

	$('#js-start-quiz').click(function(e){
		e.preventDefault();
		getQuestion(state, questions);

		$('#js-start-quiz').off('click');
	});
});

function getQuestion(state, questions) {
	var randIndex = Math.floor(Math.random() * (questions.length)),
		question = questions[randIndex],
		$jsQuestions = $('#js-questions'),
		answer = questions[randIndex].correct;

	questions.splice(randIndex, 1);
	$jsQuestions.append(renderQuestion(state, question));

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

		updateScore(state);

		state.questionNum++;

		if (state.questionNum < 5) {
			getQuestion(state, questions);
		} else {
			getResults(state, questions);
		}
	});
}

function updateScore(state) {
	$('.js-correct-num').text(state.correct);
	$('.js-wrong-num').text(state.wrong);
}

function getResults(state, questions) {
	$('.js-content').append(renderResults(state));
	$('.js-replay').click(function(e) {
		e.preventDefault();
		location.reload();
	});
}

function closingStatement(state) {
	if (state.correct === 5) {
		return 'You love cats!';
	} else if (state.correct === 4) {
		return 'You like cats.'
	} else if (state.correct === 3) {
		return 'You\'re alright with cats.';
	} else {
		return 'You might be a dog person.'
	}
}

function renderQuestion(state, qAndA) {
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
}

function renderResults(state) {
	return '<section class="results">' +
			'<h2>You finished the quiz!</h2>' +
			'<p class="result-stats">' +
				'You Got <strong><span class="js-correct-num">' + state.correct + '</span>/5 Correct</strong>' +
			'</p>' +
			'<p class="closing-statement">' + closingStatement(state) + '</p>' +
			'<a href="#" class="replay js-replay">PLAY AGAIN</a>' +
		'</section>';
}
