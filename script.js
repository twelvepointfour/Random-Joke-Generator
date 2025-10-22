const quotes = [
    {
        quote: "When does a joke become a dad joke?",
        answer: "When it becomes apparent!"
    },
    {
        quote: "How many apples grow on a tree?",
        answer: "All of them!"
    },
    {
        quote: "What do you call a fish with no eyes?",
        answer: "Fsh."
    },
    {
        quote: "Why don't scientists trust atoms?",
        answer: "Because they make up everything!"
    },
    {
        quote: "I have a fear of elevators...",
        answer: "But I've started taking steps to avoid it."
    },
    {
        quote: "Two peanuts were walking down the street."
        answer: "One was a-salted!"
    },
    {
        quote: "Kid: I'll call you later",
        answer: "Dad: Don't call me later, call me dad."
    },
    {
        quote: "How do you tell the difference between a frog and a horny toad?",
        answer: "A frog says "ribbit, ribbit", and a horny toad says "rub it, rub it""
    }
];

const newJokeBtn = document.getElementById('new-joke-btn');
const quoteText = document.getElementById('quote-text'); 
const quoteAnswer = document.getElementById('quote-answer'); 

function displayRandomQuote () {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    quoteText.textContent = randomQuote.quote;
    quoteAnswer.textContent = randomQuote.answer;
}

newJokeBtn.addEventListener('click', displayRandomQuote);

displayRandomQuote();