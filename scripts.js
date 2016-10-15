$(function() {
	var questions = [
		{
			question: "1 What is the best cat?",
			a: "Cat in hat",
			b: "House cat",
			c: "Alley cat",
			d: "All cats",
			correct: 'd'
		},
		{
			question: "2 What is the best cat?",
			a: "Cat in hat",
			b: "House cat",
			c: "Alley cat",
			d: "All cats",
			correct: 'd'
		},
		{
			question: "3 What is the best cat?",
			a: "Cat in hat",
			b: "House cat",
			c: "Alley cat",
			d: "All cats",
			correct: 'd'
		},
		{
			question: "4 What is the best cat?",
			a: "Cat in hat",
			b: "House cat",
			c: "Alley cat",
			d: "All cats",
			correct: 'd'
		},
		{
			question: "5 What is the best cat?",
			a: "Cat in hat",
			b: "House cat",
			c: "Alley cat",
			d: "All cats",
			correct: 'd'
		},
		{
			question: "6 What is the best cat?",
			a: "Cat in hat",
			b: "House cat",
			c: "Alley cat",
			d: "All cats",
			correct: 'd'
		},
		{
			question: "7 What is the best cat?",
			a: "Cat in hat",
			b: "House cat",
			c: "Alley cat",
			d: "All cats",
			correct: 'd'
		},
	],
	state = {
		questionNum: 0,
		correct: 0,
		wrong: 0
	};

	// Watch start quiz button.
	$('#js-start-quiz').click(function(e){
		e.preventDefault();
		getQuestion(state, questions);

		$('#js-start-quiz').off('click');
	});
});

function getQuestion(state, questions) {
	var randIndex = Math.floor(Math.random() * (questions.length)),
		question = questions[randIndex],
		$jsQuestions = $('#js-questions');

	questions.splice(randIndex, 1);
	$jsQuestions.append(renderQuestion(state, question));

	$('.js-answers:eq(' + state.questionNum + ')').on('click', '.checkbox', function(e) {
		// Turn off the listener so each question is only answered once.
		$('.js-answers').off('click');

		state.questionNum++;

		if (state.questionNum < 5) {
			getQuestion(state, questions);
		} else {
			getResults();
		}
	});
}

function getResults() {

}

function renderQuestion(state, qAndA) {
	return '<section class="question">' +
			'<div class="question-content">' +
				'<span class="question-num">Q' + (state.questionNum + 1) + '.</span>' +
				'<h2>' + qAndA.question + '</h2>' +
				'<ul class="js-answers">' +
					'<li>' +
						'<span class="checkbox"></span>' +
						'a.' + qAndA.a +
					'</li>' +
					'<li>' +
						'<span class="checkbox"></span>' +
						'b.' + qAndA.b +
					'</li>' +
					'<li>' +
						'<span class="checkbox"></span>' +
						'c.' + qAndA.c +
					'</li>' +
					'<li>' +
						'<span class="checkbox"></span>' +
						'd.' + qAndA.d +
					'</li>' +
				'</ul>' +
				'<div class="answer-section">' +
				'</div>' +
			'</div>' +
		'</section>' +
		'<hr />';
}
