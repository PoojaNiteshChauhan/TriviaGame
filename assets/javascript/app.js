var qCount = 0;
var win = 0;
var loose = 0;
var question = [

    {
        Question: "Capital of UAE?",
        A1: "Abu Dabi",
        A2: "Hongkong",
        A3: "Delhi",
        A4: "New York",
        CA: "Abu Dabi",
        Image: "../assets/image/Abud.gif"
    },

    {
        Question: "Capital of India?",
        A1: "Dhaka",
        A2: "Hongkong",
        A3: "Delhi",
        A4: "Doha",
        CA: "Delhi"
    },

    {
        Question: "Capital of  Greece?",
        A1: "Dhaka",
        A2: "Athens",
        A3: "Bamako",
        A4: "Apia",
        CA: "Athens",
        Image: "../assets/image/Athens.gif"
    },


    {
        Question: "Capital of  China?",
        A1: "Freetown",
        A2: "George Town",
        A3: "Brasília",
        A4: "Beijing",
        CA: "Beijing"
    },

    {
        Question: "Capital of Nepal?",
        A1: "Kingston",
        A2: "Kathmandu",
        A3: "Kampala",
        A4: "Juba",
        CA: "Kathmandu",
    }
];
var timeleft = 30;
var intervalId = 0;
function showQuestion() {

    if (qCount === question.length) {
        stopGame()
    }
    else {
        $(".inner-container").css({ "list-style-type": "none" }).html("<li id = \"Q\" > <h1>" + question[qCount].Question + "</h1></li>")
        $(".inner-container").append("<li id = \"A1\" > <h2>" + question[qCount].A1 + "</h2> </li>")
        $(".inner-container").append("<li id = \"A2\"> <h2>" + question[qCount].A2 + "</h2> </li>")
        $(".inner-container").append("<li id = \"A3\"> <h2>" + question[qCount].A3 + "</h2> </li>")
        $(".inner-container").append("<li id = \"A4\"> <h2>" + question[qCount].A4 + "</h2> </li>")


        $("#A1").click(function () {

            if (question[qCount].A1 === question[qCount].CA) {
                alert("correct answer");
                qCount++;
                win++;
                showQuestion();
                restTimer();


            } else {
                alert("wrong answer")
                qCount++;
                loose++;
                showQuestion();
                restTimer();


            }
        });

        $("#A2").click(function () {

            if (question[qCount].A2 === question[qCount].CA) {
                alert("correct answer");
                qCount++;
                win++;
                showQuestion();
                restTimer();

            } else {
                alert("wrong answer")
                qCount++;
                loose++
                showQuestion();
                restTimer();

            }

        });


        $("#A3").click(function () {

            if (question[qCount].A3 === question[qCount].CA) {
                alert("correct answer");
                qCount++;
                win++;
                showQuestion();
                restTimer();

            } else {
                alert("wrong answer")
                qCount++;
                loose++;
                showQuestion();
                restTimer();

            }
        });


        $("#A4").click(function () {

            if (question[qCount].A4 === question[qCount].CA) {
                alert("correct answer");
                qCount++;
                win++;
                showQuestion()
                restTimer();

            } else {
                alert("wrong answer")
                qCount++;
                loose++;
                showQuestion();
                restTimer();

            }
        });

    }
}

$(document).ready(function () {

    $("#startGame").on("click", function () {
        $("#startGame").hide();

        showQuestion();
        showTimer();
        run();
    });







});



function showTimer() {
    $(".time").html("<h3>" + " Time remaninig is " + timeleft + "</h3>")
}



function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

//  The decrement function.
function decrement() {
    timeleft--;
    showTimer();
    if (timeleft === 0) {
        alert("Time Up!");
        clearInterval(intervalId);
    }
}
function restTimer() {
    timeleft = 30;
    clearInterval(intervalId);
    showTimer()
    run();


}

function stopGame() {
    $("#Q").hide();
    $("#A1").hide();
    $("#A2").hide();
    $("#A3").hide();
    $("#A4").hide();
    clearInterval(intervalId);

    //$(".inner-container").css({ "font : family " }).html("<li id = \"Q\" > <h1>" + question[qCount].Question + "</h1></li>")
    $(".inner-container").append("<h3>Correct Answer: " + win + "</h3>");
    $(".inner-container").append("<h3>Incorrect Anaswer:" + loose + "</h3>");




}

