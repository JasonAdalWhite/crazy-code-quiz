// Create a start button with Html

// create an event listener that starts the time when the button is clicked
document.getElementById('btn1').addEventListener('click', askQuestion);
// Create a function that runs a timer
var startTimer = function() {
    setInterval(startTimer, 120000)
    


};
// Create a function that renders a question
const askQuestion = function() {
    document.getElementById()
}
// Create an object that stores the questions and whether the answers are true or not
const questions = [{
    id: 0,
    question: "What name did Uldren Sov take on after being revived by a Ghost?",
    answer: [{text: "The Crow", isCorrect: true},
                {text: "The Raven", isCorrect: false},
                {text: "The Ronin", isCorrect: false},
                {text: "The Monkey", isCorrect: false}
            ]
        },
        {
        id: 1,
        question: "Zavala had a family centuries prior to the present day, his wife was named Safiya, and his son's name was:",
        answer: [{text: "Gabriel", isCorrect: false},
                    {text: "Adal", isCorrect: false},
                    {text: "Hakim", isCorrect: true},
                    {text: "Nicholas", isCorrect: false}
                ]
            },
            {
                id: 2,
                question: "Who oversought the Trials of Osiris in Destiny 1?",
                answer: [{text: "Saint-14", isCorrect: false},
                            {text: "Brother Vance", isCorrect: true},
                            {text: "Petra Venj", isCorrect: false},
                            {text: "Chumblo Buggins", isCorrect: false}
                        ]
                    },
                {
                    id: 3, 
                    question: "In the Vow of the Disciple raid, what is considered the first boss encounter?",
                    answer: [{text: "The Caretaker", isCorrect: true},
                                {text: "Rhulk, the First Disciple", isCorrect: false},
                                {text: "The Winnower", isCorrect: false},
                                {text: "The Crunchwrap Supreme", isCorrect: false}]
                },
            
                
                
                "Which Destiny character personally favorited the Spicy Ramen Shop?",
                "Who is the most useless character listed in the roster?",
                "This Omolon Exotic weapon plagued the crucible during Season of the Worthy due to the season's buff to Auto Rifles:",
                "This Exotic Chest piece for the Titan Class amplifies the amount of damage Thundercrash can output: ",
                "What is the name of Elsie Bray's (The Exo Stranger) fish like companion?",
                "Finish the phrase: Whether we wanted it or not... "
                ];

// When rendering question, it should also render answers in buttons

// The buttons should hold a data-attribute if the answer is correct or not

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