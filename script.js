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
        quote: "Two peanuts were walking down the street.",
        answer: "One was a-salted!"
    },
    {
        quote: "Kid: I'll call you later",
        answer: "Dad: Don't call me later, call me dad."
    },
    {
        quote: "How do you tell the difference between a frog and a horny toad?",
        answer: "A frog says 'ribbit, ribbit', and a horny toad says 'rub it, rub it'"
    },
    {
        quote: "What do you call a man with no body and no nose?",
        answer: "Nobody nose!"
    },
    {
        quote: "What's the difference between a poorly dressed man on a tricycle, and a well-dressed man on a bicycle?",
        answer: "Attire."
    },
    {
        quote: "Dad, I'm hungry",
        answer: "Hi hungry, I'm dad"
    },
    {
        quote: "What sits on the lawn and is Irish?",
        answer: "Patty O'furniture"
    },
    {
        quote: "Did you hear about the guy who invented lifesavers?",
        answer: "They say he made a mint!"
    },
    {
        quote: "Dracula doesn't have many friends.",
        answer: "Because he's a pain in the neck."
    },
    {
        quote: "I don't fear condiments on my food,",
        answer: "I relish them!"
    },
    {
        quote: "Velcro...",
        answer: "What a rip-off!"
    },
    {
        quote: "There's an new type of broom.",
        answer: "It's sweeping the nation."
    },
    {
        quote: "conjunctivitis.com",
        answer: "Now there's a site for sore eyes!"
    },
    {
        quote: "Never trust an acupuncturist.”, 
        answer: “They always stab you in the back!”
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
