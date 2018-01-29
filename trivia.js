            var question0 = {
                question: "When did the ABA get merged with the NBA?",
                first: "1975",
                second: '1982',
                third: '1956',
                fourth: '1967',
                correctAnswer: '1975'
            };

            var question1 = {
                question: "Which team did Dr. J play for?",
                first: '76ers',
                second: 'Bobcats',
                third: 'Magic',
                fourth: 'Lakers',
                correctAnswer: '76ers'
            };

            var question2 = {
                question: "When did the NBA get formed?",
                first: '1975',
                second: '1982',
                third: '1956',
                fourth: '1967',
                correctAnswer: '1956'
            };


            var question3 = {
                question: "When did the Boston Celtics win their first championship?",
                first: '1975',
                second: '1982',
                third: '1956',
                fourth: '1967',
                correctAnswer: '1982'
            };

            var question4 = {
                question: "Who was the first coach of the USA Dream Team?",
                first: '1975',
                second: '1982',
                third: '1956',
                fourth: '1967',
                correctAnswer: '1956'
            };


            var list = [question0, question1, question2, question3, question4];
            var numCorrect = 0;
            var numWrong = 0;
            var currentQuestion = 0;
            var seconds = 10;
            var timer = null;
            var pause = 2000;

            function advanceQuestion () {
            $('#contents').show();
            $('#correct').hide();
            $('#wrong').hide();
            currentQuestion++;
            if (currentQuestion >= list.length) {
            showResults();
                } else {
                    seconds = 10;
                    showQuestion(currentQuestion);
                }
            }

            function restartGame () {
                $('#correct').hide();
                $('#wrong').hide();
                $('#contents').show();
                $('#answers').show();
                $('#results').hide();
                seconds = 60;
                currentQuestion = 0;
                numCorrect = 0;
                numWrong = 0;
                timer = null;
                showQuestion(currentQuestion);
            }

            function showResults () {
                $('#correct').hide();
                $('#wrong').hide();
                $('#contents').hide();
                $('#answers').hide();
                $('#results').show();
                $('#count-correct').text("Number Correct is " + numCorrect);
                $('#count-wrong').text("Number Wrong is " + numWrong);
            }

            function showCorrectAnswer () {
                clearInterval(timer);
                $('#contents').hide();
                $('#correct').show();
                console.log("Congrats you got the correct answer!");
                numCorrect++;
                setTimeout(advanceQuestion, pause);
                
             }

             function showWrongAnswer () {
                clearInterval(timer);
                $('#contents').hide();
                $('#wrong').show();
                $('#correct-answer').text(list[currentQuestion].correctAnswer);
                console.log("You got it wrong!");
                numWrong++;
                setTimeout(advanceQuestion, pause);
             }

             function timeOut () {
                clearInterval(timer);
                $('#contents').hide();
                $('#timeout').show();
                $('#correct-answer2').text(list[currentQuestion].correctAnswer);
                console.log("You got it wrong!");
                numWrong++;
                setTimeout(advanceQuestion, pause);
             }

             function buttonSubmit () {
                 var submit = $(this).text();
                 console.log(submit);
                 if (submit === list[currentQuestion].correctAnswer) {
                    showCorrectAnswer();
                 } else {
                    showWrongAnswer();
                 }
            }

            function showQuestion(index) {
                if (index >= 0 && index < list.length){

                // $("#question").html(list[index].question);
                document.getElementById("question").innerHTML = list[index].question;
                document.getElementById("first").innerHTML = list[index].first;
                document.getElementById("second").innerHTML = list[index].second;
                document.getElementById("third").innerHTML = list[index].third;
                document.getElementById("fourth").innerHTML = list[index].fourth;
                }
            };

            function gameTimer() {
                seconds--;
                if (seconds <= 0) {
                clearInterval(timer);
                timeOut();
                } 
                $('#clock').text(seconds);
            }

            function startGame() {
                $('#start-block').hide();
                $('#question-block').show();
                timer = setInterval(gameTimer, 1000);
            }

            $(document).ready(function() {
                $('#start').click(startGame);
                $('#restart').click(restartGame);
                $('#first').click(buttonSubmit);
                $('#second').click(buttonSubmit);
                $('#third').click(buttonSubmit);
                $('#fourth').click(buttonSubmit);
           
                showQuestion(currentQuestion);  
            });