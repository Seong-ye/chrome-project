const quotes = [
    {
        quote:"Accept challenges, so that you may feel the exhilaration of victory.",
        author:"George S. Patton",
    },
    {
        quote:"The only greatness for man is immortality.",
        author:"James Dean",
    },
    {
        quote:"The future ain't what it used to be.",
        author:"Yogi Berra",
    },
    {
        quote:"Punctuality is the soul of business.",
        author:"Isabelle Eberhardt",
    },
    {
        quote:"The trouble with our times is that the future is not what it used to be.",
        author:"Paul Valery",
    },
    {
        quote:"Passion governs, and she never governs wisely.",
        author:"Benjamin Franklin",
    },
    {
        quote:"Put yourself on view. This brings your talents to light.",
        author:"Baltasar Gracian",
    },
    {
        quote:"Pride sullies the noblest character.",
        author:"Claudianus",
    },
    
    {
        quote:"The less their ability, the more their conceit.",
        author:"Ahad HaAm",
    },
    {
        quote:"Never bend your head. Hold it high. Look the world straight in the eye.",
        author:"Helen Keller",
    }
    ];
    
    const quote = document.querySelector("#quote span:first-child");
    const author = document.querySelector("#quote span:last-child");
    
    const todaysQoute = quotes[Math.floor(Math.random()*quotes.length)];
    
    quote.innerText = `${todaysQoute.quote}\n`;
    author.innerText = `by, ${todaysQoute.author}`;
    
    