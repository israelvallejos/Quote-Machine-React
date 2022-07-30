import React, {useState, useEffect} from 'react'
import './App.scss';


const quotesJson = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

function App() {
const [quote, setQuote] = useState(' ')
const [author, setAuthor] = useState(' ')
const [randomNumber, setRandomNumber] = useState(null)
const [quotesArray, setQuotesArray] = useState(null)

const getQuotes = async(url) => {
  const response = await fetch(url)
  const format = await response.json()
  setQuotesArray(format.quotes)
  console.log(format)
}

useEffect (() => {
  getQuotes(quotesJson)
},[quotesJson])

const getRandomQuote = () => {
  let randomIndex = Math.floor(quotesArray.length * Math.random())
  setQuote(quotesArray[randomIndex].quote)
  setAuthor(quotesArray[randomIndex].author)
}

 

  return (
    <div className="App">

      <header className="App-header">
    <div id='quote-box'>    
    <p id='text'>
      {quote}
    </p>
    <p id='author'>
      {author}
    </p>
    <a id='tweet-quote' 
    href={encodeURI(`http://www.twitter.com/intent/tweet?
    text=${quote} -${author}`)}>Tweet Quote</a>
    <button id='new-quote'
    
    onClick={() => getRandomQuote()}>Get Another Quote</button>
    </div>
    </header>
    </div>
  );
}

export default App;
