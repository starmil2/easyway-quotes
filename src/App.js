import { useEffect, useState } from 'react';
import './App.css';
import quotes from './quotes.txt'



const App = () => {
  const [quote, setQuote] = useState('')

  const handleButton = () => {
    fetch(quotes).then((response) => response.text())
      .then((data) => {
        // read file lines here
        const fileLines = data.split('\n')
        // find the value you are looking for and compare it to the value you get from the database
        setQuote(fileLines[Math.floor(Math.random() * fileLines.length)])
      })
  }

  useEffect(() => {
    handleButton()
  }, [])


  return (
    <div className="App">
      <header className="App-header">

        <p>
          {quote}
        </p>
        <span
          className="App-link"
          role={'button'}
          style={{ cursor: 'pointer' }}
          onClick={handleButton}
        >
          Show next
        </span>
      </header>
    </div>
  );
}

export default App;
