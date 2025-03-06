import BusinessCard from './BusinessCard'
import './App.css'
import { useState } from 'react'
import {data} from './data'
function App() {
  const [isDetailed, setIsDetailed] = useState(false);

  return (
    
    <>
    <button onClick={() => setIsDetailed(!isDetailed)}>Show email</button>
    <br></br>
    <input type="text" id="email-search" name="email" placeholder="Search">
    </input>
    <br></br>
    {data.map(card => {
      return (
        <BusinessCard className="businessCard"
        name={card.name}
        education={card.education}
        jobTitle={card.jobTitle}
        company={card.company}
        email={isDetailed ? card.email : null}
        key={card.name + card.phone}
        >
        </BusinessCard>
      )
    })}
    </>
  )
}

export default App
