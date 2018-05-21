function checkAnswers(){
	var totalQuiz = 5;
	var score = 0;

	//Answers selection
	var q1 = document.forms["ourForm"]["q1"].value;
	var q2 = document.forms["ourForm"]["q2"].value;
	var q3 = document.forms["ourForm"]["q3"].value;
	var q4 = document.forms["ourForm"]["q4"].value;
	var q5 = document.forms["ourForm"]["q5"].value;
	//alert(q2); alerts selected option in question2

	//Validate selection
	for(i = 1;i <= totalQuiz;i++){

		if(eval("q"+i) == null || eval("q"+i) == ''){
			alert("Can't ignore question "+i);
			return false;
		}

	}
	//correct answers
	var answers=["c","b","d","b","c"];
	for (i = 1; i <= totalQuiz;i++){
		if (eval("q"+i) ==answers[i-1]) {
			score++;

		}
	}
	alert("Your total score is "+score+" out of "+totalQuiz);

	//show results on screen
	var scoreline = document.getElementById('scoreline');
	scoreline.innerHTML ='<h3>You score <span> '+score+' </span> out of <span> '+totalQuiz+' </span></h3>';
	return false;
	

}