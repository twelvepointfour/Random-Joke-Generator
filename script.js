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
    }
];

const newJokeBtn = document.getElementById('new-quote-btn');
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