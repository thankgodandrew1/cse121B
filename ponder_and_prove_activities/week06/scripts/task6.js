const quoteText = document.querySelector('.quote'),
authorName = document.querySelector('.author .name'),
quoteBtn = document.querySelector('button'),
soundBtn = document.querySelector('.sound'),
copyBtn = document.querySelector('.copy'),
twitterBtn = document.querySelector('.twitter');

//random quote function
function randomQuote(){
    quoteBtn.classList.add('loading');
    quoteBtn.textContent = 'Loading Quote...';
    //Fetching random quotes/data from the API and parsing it into  JavaScript object
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        // console.log(result);
        quoteText.textContent = result.content;
        authorName.textContent = result.author;
        quoteBtn.textContent = 'New Quote';
        quoteBtn.classList.remove('loading');
    });
}

soundBtn.addEventListener('click', () =>{
    //speechSynthesisUtterance is a web speech apithat represents a speech request
    let utterance = new SpeechSynthesisUtterance(`${quoteText.textContent} by ${authorName.textContent}`);
    speechSynthesis.speak(utterance); //speak method of speechSynthesis speaks the utterance
});

copyBtn.addEventListener('click', ()=>{
    //copying the quoted text on copyBtn click
    //writeText() property writes the specified text string to the system clipboard.
    navigator.clipboard.writeText(quoteText.textContent)
});

twitterBtn.addEventListener('click', ()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.textContent} __ ${authorName.textContent}`;
    window.open(tweetUrl, '_blank'); //opening a new twitter tab with passing quote in the url
});

quoteBtn.addEventListener('click', randomQuote);