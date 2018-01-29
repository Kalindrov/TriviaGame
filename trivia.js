            var question0 = {
                question: "When did the ABA get merged with the NBA?",
                first: "1976",
                second: '1982',
                third: '1956',
                fourth: '1967',
                correctAnswer: '1976'
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
                first: '1972',
                second: '1960',
                third: '1957',
                fourth: '1946',
                correctAnswer: '1946'
            };


            var question3 = {
                question: "When did the Boston Celtics win their first championship?",
                first: '1961',
                second: '1957',
                third: '1963',
                fourth: '1967',
                correctAnswer: '1957'
            };

            var question4 = {
                question: "Prior to moving to Memphis, what city was home to the Grizzlies?",
                first: 'Washington D.C.',
                second: 'Minnesota',
                third: 'Chicago',
                fourth: 'Vancouver',
                correctAnswer: 'Vancouver'
            };

            var question5 = {
                question: "Which player has the most NBA championship rings?",
                first: 'Robert Horry',
                second: 'Bill Russell',
                third: 'Michael Jordan',
                fourth: 'Bob Cousey',
                correctAnswer: 'Bill Russell'
            };

            var question6 = {
                question: "What was the highest single game point total scored by a single player?",
                first: '79',
                second: '100',
                third: '97',
                fourth: '82',
                correctAnswer: '100'
            };

            var question7 = {
                question: "Who was the first head coach of the USA Dream Team?",
                first: 'Lenny Wilkens',
                second: 'P.J. Carlesimo',
                third: 'Mike Krzyzewski',
                fourth: 'Chuck Daly',
                correctAnswer: 'Chuck Daly'
            };

            var question8 = {
                question: "Who is the tallest player to ever play in the NBA?",
                first: "Shaquille O'Neal",
                second: 'Shawn Bradley',
                third: 'Manute Bol',
                fourth: 'Yao Ming',
                correctAnswer: 'Manute Bol'
            };

            var question9 = {
                question: "Who is the shortest player to ever play in the NBA?",
                first: 'James Jones',
                second: 'Brandon Roy',
                third: 'Isiah Thomas',
                fourth: 'Muggsy Bogues',
                correctAnswer: 'Muggsy Bogues'
            };


            var list = [question0, question1, question2, question3, question4, question5, question6, question7, question8, question9];
            var numCorrect = 0;
            var numWrong = 0;
            var currentQuestion = 0;
            var seconds = 60;
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
                    seconds = 60;
                    showQuestion(currentQuestion);
                    clearInterval(timer);
                    $('#clock').text(seconds);
                    timer = setInterval(gameTimer, 1000);
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
                clearInterval(timer);
                $('#clock').text(seconds);
                timer = setInterval(gameTimer, 1000);

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