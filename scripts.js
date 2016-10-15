$(function() {
	var questions = [
		{
			question: "1 What is the best cat?",
			a: "Cat in hat",
			b: "House cat",
			c: "Alley cat",
			d: "All cats"
		},
		{
			question: "2 What is the best cat?",
			a: "Cat in hat",
			b: "House cat",
			c: "Alley cat",
			d: "All cats"
		},
		{
			question: "3 What is the best cat?",
			a: "Cat in hat",
			b: "House cat",
			c: "Alley cat",
			d: "All cats"
		},
		{
			question: "4 What is the best cat?",
			a: "Cat in hat",
			b: "House cat",
			c: "Alley cat",
			d: "All cats"
		},
		{
			question: "5 What is the best cat?",
			a: "Cat in hat",
			b: "House cat",
			c: "Alley cat",
			d: "All cats"
		},
		{
			question: "6 What is the best cat?",
			a: "Cat in hat",
			b: "House cat",
			c: "Alley cat",
			d: "All cats"
		},
		{
			question: "7 What is the best cat?",
			a: "Cat in hat",
			b: "House cat",
			c: "Alley cat",
			d: "All cats"
		},
	],
	state = {
	},
	started: false;

	$('#js-start-quiz').click(function(e){
		e.preventDefault();

		if (started) {
			return;
		} else {
			
			started = true;
		}
	});
});

function renderQuestion(qAndA) {
	return '<section class="question">' +
			'<div class="question-content">' +
				'<span class="question-num">Q1.</span>' +
				'<h2>' + qAndA.question + '</h2>' +
				'<ul>' +
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
		'</section>';
}
