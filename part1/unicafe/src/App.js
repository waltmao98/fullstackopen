import React, { useState } from 'react'

const Header = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({ good, neutral, bad }) => {
  const all = () => good + neutral + bad
  const averageScore = () => good + -1 * bad
  const percentPositive = () => all() !== 0 ? (good / all() * 100) : 0
  const noFeedback = () => all() === 0

  if (noFeedback()) {
    return (<div>
      <Header text={"statistics"} />
      <div> No feedback given</div>
    </div>
    )
  }

  return (<div>
    <Header text={"statistics"} />
    <table>
      <tbody>
        <tr>
          <td>good</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{bad}</td>
        </tr>
        <tr>
          <td>all</td>
          <td>{all()}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{averageScore()}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{percentPositive() + '%'}</td>
        </tr>

      </tbody>
    </table>
  </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text={"give feedback"} />
      <Button handleClick={() => setGood(good + 1)} text={"good"}></Button>
      <Button handleClick={() => setNeutral(neutral + 1)} text={"neutral"}></Button>
      <Button handleClick={() => setBad(bad + 1)} text={"bad"}></Button>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

export default App