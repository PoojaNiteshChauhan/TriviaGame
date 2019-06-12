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
        Image: "../TriviaGame/assets/image/Abudabi.gif"
    },

    {
        Question: "Capital of India?",
        A1: "Dhaka",
        A2: "Hongkong",
        A3: "Delhi",
        A4: "Doha",
        CA: "Delhi",
        Image: "../TriviaGame/assets/image/Delhi.gif"
    },

    {
        Question: "Capital of  Greece?",
        A1: "Dhaka",
        A2: "Athens",
        A3: "Bamako",
        A4: "Apia",
        CA: "Athens",
        Image: "../TriviaGame/assets/image/Athens.gif"
    },


    {
        Question: "Capital of  China?",
        A1: "Freetown",
        A2: "George Town",
        A3: "Brasília",
        A4: "Beijing",
        CA: "Beijing",
        Image: "../TriviaGame/assets/image/Beijing.gif"

    },

    {
        Question: "Capital of Nepal?",
        A1: "Kingston",
        A2: "Kathmandu",
        A3: "Kampala",
        A4: "Juba",
        CA: "Kathmandu",
        Image: "../TriviaGame/assets/image/Kathmandu.gif"
    }
];
var timeleft = 30;
var intervalId = 0;
function showQuestion() {

    if (qCount < question.length) {
        restTimer();
        $("#Q").show(); $("#Q").text(question[qCount].Question);
        $("#A1").show(); $("#A1").text(question[qCount].A1);
        $("#A2").show(); $("#A2").text(question[qCount].A2);
        $("#A3").show(); $("#A3").text(question[qCount].A3);
        $("#A4").show(); $("#A4").text(question[qCount].A4);
    }
}


$("#startGame").on("click", function () {
    $("#startGame").hide();
    $("#Country").hide();

    if (qCount < question.length)
    {
        showQuestion();
        showTimer();
    }else 
    {
        stopGame();
    }

});

$("#restartgame").click(function(){
    $("#restartgame").hide()
    $("#wins").hide()
    $("#losses").hide();
    $("#startGame").text("Start Game");
    $("#startGame").show();
    $(".time").hide();
    qCount = 0;

})

$("#A1").click(function () {

    if (question[qCount].A1 === question[qCount].CA) {
        alert("correct answer");
        clearInterval(intervalId);
        win++;
    } else {
        alert("wrong answer");
        clearInterval(intervalId);
        loose++;
    }
    showImage();
    qCount++;


});

$("#A2").click(function () {

    if (question[qCount].A2 === question[qCount].CA) {
        alert("correct answer");
        clearInterval(intervalId);
        win++;


    } else {
        alert("wrong answer");
        clearInterval(intervalId);
        loose++;

    }
    showImage();
    qCount++;

});


$("#A3").click(function () {

    if (question[qCount].A3 === question[qCount].CA) {
        alert("correct answer");
        clearInterval(intervalId);
        win++;
    } else {
        alert("wrong answer");
        clearInterval(intervalId);
        loose++;
    }
    showImage();
    qCount++;
});


$("#A4").click(function () {

    if (question[qCount].A4 === question[qCount].CA) {
        alert("correct answer");
        clearInterval(intervalId);
        win++;
    }
    else {
        alert("wrong answer");
        clearInterval(intervalId);
        loose++;
    }
    showImage();
    qCount++;


});



function showTimer() {
    
    $(".time").html("<h3>" + " Time remaninig is " + timeleft + "</h3>")
    $(".time").show();
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
        loose++;
        clearInterval(intervalId);
        showImage();
        qCount++;
    }
}
function restTimer() {
    timeleft = 30;
    clearInterval(intervalId);
    showTimer()
    run();


}
function showImage() {
    $("#Q").hide();
    $("#A1").hide();
    $("#A2").hide();
    $("#A3").hide();
    $("#A4").hide();
    $("#Country").show();
    $("#Country").attr('src', question[qCount].Image);
    $("#startGame").text("Click to Continue");
    $("#startGame").show();
    $("#correctAnswer").show();
    $("#correctAnswer").text( question[qCount].CA);

    $("#startGame").click(function () {
        $("#startGame").hide();
        $("#Country").hide();
        $("#correctAnswer").hide();

        showQuestion();
        showTimer();

    });
}


function stopGame() {
    $("#Q").hide();
    $("#A1").hide();
    $("#A2").hide();
    $("#A3").hide();
    $("#A4").hide();
    clearInterval(intervalId);
    $(".time").hide();
    
    $("#wins").text("Correct Answer: " + win  );
    $("#losses").text("Incorrect Anaswer:" + loose );
    $("#wins").show()
    $("#losses").show();
    $("#restartgame").text("Restart Game");
    $("#restartgame").show();
}

