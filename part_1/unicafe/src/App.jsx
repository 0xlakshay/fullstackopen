import { useState } from 'react'

// const Heading = () => { <h1>give feedback</h1> }
const Heading = ({text}) => { return(<h1>{text}</h1>) }

// const Button = ({handleClick, text}) => {
//   <button onClick={handleClick}>
//     {text}
//   </button>
// }
const Button = ({handleClick, text}) => {
  return (
  <button onClick={handleClick}>
    {text}
  </button>)
}

const Statistics = ({good, neutral, bad, all}) => {
  const avg = (all) ? (good-bad)/(all) : 0;
  const pos = (all) ? (good/all * 100) : 0;
  return (all) ? (
    <>
    <table>
    <StatisticLine text="good" value={good} />
    <StatisticLine text="neutral" value={neutral} />
    <StatisticLine text="bad" value={bad} />
    <StatisticLine text="all" value={all} />
    <StatisticLine text="average" value={avg} />
    <StatisticLine text="percentage" value={(pos+"%")} />
    </table>
    </>
  ) : (<p>No feedback given</p>)
}

const StatisticLine = ({text, value}) => {return(<tr><td>{text}</td> <td>{value}</td></tr>)}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  return (
    <div>
      <Heading text="give feedback"/>
      <Button handleClick={()=>{setGood(good + 1), setAll(all+1)}} text="good" />
      <Button handleClick={()=>{setNeutral(neutral + 1), setAll(all+1)}} text="neutral" />
      <Button handleClick={()=>{setBad(bad + 1), setAll(all+1)}} text="bad" />

      <Button handleClick={()=>{setGood(0), setBad(0), setNeutral(0), setAll(0)}} text="reset"/>
      
      <Heading text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}

export default App