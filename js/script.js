// create an event listener that starts the time when the button is clicked
document.getElementById('startbtn').addEventListener('click', askQuestion);
// Create a function that runs a timer
var startTimer = function() {
    setInterval(startTimer, 120000)
};
// Create a function that renders a question
const askQuestion = function() {
    document.getElementById("click", "startbtn")
}
// Create an object that stores the questions and whether the answers are true or not
// The buttons should hold a data-attribute if the answer is correct or not
const questions = [{
    q: 0,
    question: "What name did Uldren Sov take on after being revived by a Ghost?",
    answer: [{text: "The Crow", isCorrect: true},
                {text: "The Raven", isCorrect: false},
                {text: "The Ronin", isCorrect: false},
                {text: "The Monkey", isCorrect: false}
            ]
        },
        {
            q: 1,
        question: "Zavala had a family centuries prior to the present day, his wife was named Safiya, and his son's name was:",
        answer: [{text: "Gabriel", isCorrect: false},
                    {text: "Adal", isCorrect: false},
                    {text: "Hakim", isCorrect: true},
                    {text: "Nicholas", isCorrect: false}
                ]
            },
            {
                q: 2,
                question: "Who oversought the Trials of Osiris in Destiny 1?",
                answer: [{text: "Saint-14", isCorrect: false},
                            {text: "Brother Vance", isCorrect: true},
                            {text: "Petra Venj", isCorrect: false},
                            {text: "Chumblo Buggins", isCorrect: false}
                        ]
                    },
                {
                    q: 3, 
                    question: "In the Vow of the Disciple raid, what is considered the first boss encounter?",
                    answer: [{text: "The Caretaker", isCorrect: true},
                                {text: "Rhulk, the First Disciple", isCorrect: false},
                                {text: "The Winnower", isCorrect: false},
                                {text: "The Crunchwrap Supreme", isCorrect: false}]
                },
                {
                    q: 4, 
                    question: "Which Destiny character personally favorited the Spicy Ramen Shop?",
                    answer: [{text: "Zavala", isCorrect: false},
                                {text: "Ikora Rey", isCorrect: false},
                                {text: "Oryx, The Taken King", isCorrect: false},
                                {text: "Cayde-6", isCorrect: true}]
                },
                {
                    q: 5, 
                    question: "According to the Destiny community, who USED TO BE the most useless character listed in the roster?",
                    answer: [{text: "Ikora Rey", isCorrect: true},
                                {text: "Cayde-6", isCorrect: false},
                                {text: "Mithrax", isCorrect: false},
                                {text: "The Exo Stranger", isCorrect: false}]
                },
                {
                    q: 6, 
                    question: "According to the Destiny community, who USED TO BE the most useless character listed in the roster?",
                    answer: [{text: "Ikora Rey", isCorrect: true},
                                {text: "Cayde-6", isCorrect: false},
                                {text: "Mithrax", isCorrect: false},
                                {text: "The Exo Stranger", isCorrect: false}]
                },
                {
                    q: 7, 
                    question: "This Omolon Exotic weapon plagued the crucible during Season of the Worthy due to the season's buff to Auto Rifles:",
                    answer: [{text: "The Suros Regime", isCorrect: false},
                                {text: "Sweet Business", isCorrect: false},
                                {text: "Lorentz Driver", isCorrect: false},
                                {text: "Hard Light", isCorrect: true}]
                },
                {
                    q: 8, 
                    question: "This exotic chest piece for the Titan Class amplifies the amount of damage Thundercrash can output: ",
                    answer: [{text: "Heart of Inmost Light", isCorrect: false},
                                {text: "Armementarium", isCorrect: false},
                                {text: "Peacekeepers", isCorrect: false},
                                {text: "Cuirass of the Falling Star", isCorrect: true}]
                },
                {
                    q: 9, 
                    question: "What is the name of Elsie Bray's (The Exo Stranger) fish like companion?",
                    answer: [{text: "Chuckie", isCorrect: false},
                                {text: "Pookah", isCorrect: true},
                                {text: "Nemo", isCorrect: false},
                                {text: "Louis", isCorrect: false}]
                },
                {
                    q: 10, 
                    question: "Finish the phrase: Whether we wanted it or not... ",
                    answer: [{text: "we've stepped into a war with the Cabal on Mars.", isCorrect: true},
                                {text: "we've inserted ourselves right into the middle of an intergalactic onslaught.", isCorrect: false},
                                {text: "we're getting pineapple on the pizza.", isCorrect: false},
                                {text: "we've started the Sword Logic ritual for the one person we did not want to start it for.", isCorrect: false}]
                },
            ];

// Answers should be rendered in button form

// Choosing right answer displays correct, choosing wrong answer displays wrong

// Also subtracts from timer

// When an answer is chosen, go to the next question and do it again

// Create a function that hadnles what happens when an answer is chosen

// If all questions are answered or timer reaches 0, display game over

// Create a function that will handle the game over based on those conditions





// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score