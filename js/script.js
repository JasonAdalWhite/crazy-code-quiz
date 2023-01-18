// array object of all the questions and answers:
const questions = [
    {
        questionText: "What name did Uldren Sov take on after being revived as a Guardian?",
        options: [
                "1. The Crow",
                "2. The Raven",
                "3. The Griffyn", 
                "4. Savior XV"
            ],
        answer: "1. The Crow",
    },
    {
        questionText: "Zavala had a family centuries prior to the present day. His wife was named Safiya, and his son's name was: ",
        options: [
            "1. Gabriel",
            "2. Adal",
            "3. Hakim",
            "4. Nicholas",
        ],
        answer: "3. Hakim",
    },
    {
        questionText: "Who oversought the Trials of Osiris in Destiny 1",
        options: [
            "1. Saint XIV",
            "2. Brother Vance",
            "3. Pentra Venj", 
            "4. Chumblo Buggins"
        ],
        answer: "2. Brother Vance",
    },
    {
        questionText: "In the Vow of the Disciple raid, what is considered the first BOSS encounter?",
        options: [
            "1. Rhulk, The first Disciple",
            "2. The Winnower",
            "3. The Templar",
            "4. The Caretaker",
        ],
        answer: "4. The Caretaker",
    },
    {
        questionText:
            "Which Destiny character personally favored The Spicy Ramen Shop?",
        options: [
            "1. Cayde-6", 
            "2. Ikora Rey", 
            "3. Zavala", 
            "4. Oryx, the Taken King"],
        answer: "1. Cayde-6",
    },
    {
        questionText: "According to the Destiny community, who USED to be the 'most useless' character listed on the following roster:",
        options: [
            "1. Mithrax",
            "2. Shaxx",
            "3. Lord Saladin",
            "4. Ikora Rey",
        ],
        answer: "4. Ikora Rey",
    },
    {
        questionText: "This Omolon Exotic weapon plagued the crucible during Season of the Worthy due to the season's buff to Auto Rifles:",
        options: [
            "1. The Suros Regime",
            "2. Sweet Business",
            "3. Hard Light",
            "4. Lorentz Driver",
        ],
        answer: "3. Hard Light",
    },
    {
        questionText: "This exotic chest piece for the Titan class amplifies the amount of damage Thundercrash can output: ",
        options: [
            "1. Heart of Inmost Light",
            "2. Armementarium",
            "3. Peacekeepers",
            "4. Cuirass of the Falling Star",
        ],
        answer: "4. Cuirass of the Falling Star",
    },
    {
        questionText: "What is the name of Elizabeth Bray's (the Exo Stranger) fish like companion?",
        options: [
            "1. Chuckie",
            "2. Poukah",
            "3. Nemo",
            "4. Louis",
        ],
        answer: "2. Poukah",
    },
    {
        questionText: "Finish the phrase: 'Whether we wanted it or not...",
        options: [
            "1. we've stepped into a war with the Cabal on Mars.",
            "2. we've inserted ourselves right in the middle of an intergalactic onslaught.",
            "3. we're getting pineapple on the pizza.",
            "4. we've started the Sword Logic ritual for the one being we did not want to start it for."
        ],
        answer: "1. we've stepped into a war with the Cabal on Mars.",
    },
];

// select each card div by id and assign to variables
const startCard = document.querySelector("#start-card");
const questionCard = document.querySelector("#question-card");
const scoreCard = document.querySelector("#score-card");
const leaderboardCard = document.querySelector("#leaderboard-card");

// hide all cards
function hideCards() {
    startCard.setAttribute("hidden", true);
    questionCard.setAttribute("hidden", true);
    scoreCard.setAttribute("hidden", true);
    leaderboardCard.setAttribute("hidden", true);
}

const resultDiv = document.querySelector("#result-div");
const resultText = document.querySelector("#result-text");

// hide result div
function hideResultText() {
    resultDiv.style.display = "none";
}

var intervalID;
var time;
var currentQuestion;

document.querySelector("#start-button").addEventListener("click", startQuiz);

function startQuiz() {
    // hide any visible cards, show the question card
    hideCards();
    questionCard.removeAttribute("hidden");

    // assign 0 to currentQuestion when start button is clicked, then display the current question on the page
    currentQuestion = 0;
    displayQuestion();

    // set total time depending on number of questions
    time = questions.length * 10;

    // executes function "countdown" every 1000ms to update time and display on page
    intervalID = setInterval(countdown, 1000);

    displayTime();
}

// reduce time by 1 and display new value, if time runs out then end quiz
function countdown() {
    time--;
    displayTime();
    if (time < 1) {
        endQuiz();
    }
}

// display time on page
const timeDisplay = document.querySelector("#time");
function displayTime() {
    timeDisplay.textContent = time;
}

// display the question and answer options for the current question
function displayQuestion() {
    let question = questions[currentQuestion];
    let options = question.options;

    let h2QuestionElement = document.querySelector("#question-text");
    h2QuestionElement.textContent = question.questionText;

    for (let i = 0; i < options.length; i++) {
        let option = options[i];
        let optionButton = document.querySelector("#option" + i);
        optionButton.textContent = option;
    }
}

document.querySelector("#quiz-options").addEventListener("click", checkAnswer);

// compare the text content of the option button with the answer to the current question
function optionIsCorrect(optionButton) {
    return optionButton.textContent === questions[currentQuestion].answer;
}

// if answer is incorrect, penalise time
function checkAnswer(eventObject) {
    let optionButton = eventObject.target;
    resultDiv.style.display = "block";
    if (optionIsCorrect(optionButton)) {
        resultText.textContent = "Correct!";
        setTimeout(hideResultText, 1000);
    } else {
        resultText.textContent = "Incorrect!";
        setTimeout(hideResultText, 1000);
        if (time >= 10) {
            time = time - 10;
            displayTime();
        } else {
            // if time is less than 10, display time as 0 and end quiz
            // time is set to zero in this case to avoid displaying a negative number in cases where a wrong answer is submitted with < 10 seconds left on the timer
            time = 0;
            displayTime();
            endQuiz();
        }
    }

    // increment current question by 1
    currentQuestion++;
    // if we have not run out of questions then display next question, else end quiz
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

// display scorecard and hide other divs
const score = document.querySelector("#score");

// at end of quiz, clear the timer, hide any visible cards and display the scorecard and display the score as the remaining time
function endQuiz() {
    clearInterval(intervalID);
    hideCards();
    scoreCard.removeAttribute("hidden");
    score.textContent = time;
}

const submitButton = document.querySelector("#submit-button");
const inputElement = document.querySelector("#initials");

// store user initials and score when submit button is clicked
submitButton.addEventListener("click", storeScore);

function storeScore(event) {
    // prevent default behaviour of form submission
    event.preventDefault();

    // check for input
    if (!inputElement.value) {
        alert("Please enter your initials before pressing submit!");
        return;
    }

    // store score and initials in an object
    let leaderboardItem = {
        initials: inputElement.value,
        score: time,
    };

    updateStoredLeaderboard(leaderboardItem);

    // hide the question card, display the leaderboardcard
    hideCards();
    leaderboardCard.removeAttribute("hidden");

    renderLeaderboard();
}

// updates the leaderboard stored in local storage
function updateStoredLeaderboard(leaderboardItem) {
    let leaderboardArray = getLeaderboard();
    // append new leaderboard item to leaderboard array
    leaderboardArray.push(leaderboardItem);
    localStorage.setItem("leaderboardArray", JSON.stringify(leaderboardArray));
}

// get "leaderboardArray" from local storage (if it exists) and parse it into a javascript object using JSON.parse
function getLeaderboard() {
    let storedLeaderboard = localStorage.getItem("leaderboardArray");
    if (storedLeaderboard !== null) {
        let leaderboardArray = JSON.parse(storedLeaderboard);
        return leaderboardArray;
    } else {
        leaderboardArray = [];
    }
    return leaderboardArray;
}

// display leaderboard on leaderboard card
function renderLeaderboard() {
    let sortedLeaderboardArray = sortLeaderboard();
    const highscoreList = document.querySelector("#highscore-list");
    highscoreList.innerHTML = "";
    for (let i = 0; i < sortedLeaderboardArray.length; i++) {
        let leaderboardEntry = sortedLeaderboardArray[i];
        let newListItem = document.createElement("li");
        newListItem.textContent =
            leaderboardEntry.initials + " - " + leaderboardEntry.score;
        highscoreList.append(newListItem);
    }
}

// sort leaderboard array from highest to lowest
function sortLeaderboard() {
    let leaderboardArray = getLeaderboard();
    if (!leaderboardArray) {
        return;
    }

    leaderboardArray.sort(function (a, b) {
        return b.score - a.score;
    });
    return leaderboardArray;
}

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", clearHighscores);

// clear local storage and display empty leaderboard
function clearHighscores() {
    localStorage.clear();
    renderLeaderboard();
}

const backButton = document.querySelector("#back-button");
backButton.addEventListener("click", returnToStart);

// hide leaderboard card show start card
function returnToStart() {
    hideCards();
    startCard.removeAttribute("hidden");
}

// use link to view highscores from any point on the page
const leaderboardLink = document.querySelector("#leaderboard-link");
leaderboardLink.addEventListener("click", showLeaderboard);

function showLeaderboard() {
    hideCards();
    leaderboardCard.removeAttribute("hidden");

    // stop countdown
    clearInterval(intervalID);

    // assign undefined to time and display that, so that time does not appear on page
    time = undefined;
    displayTime();

    // display leaderboard on leaderboard card
    renderLeaderboard();
}