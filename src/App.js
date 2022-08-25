import logo from './logo.svg'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('run')
    fetch('api/sam')
      .then((response) => response.json())
      .then((json) => console.log(json))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {count}
        <button onClick={() => setCount((prev) => prev + 1)}>add</button>
        <p>ReactJS application in AWS EC2... {process.env.NODE_ENV}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
