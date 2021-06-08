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

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]

  const [selected, setSelected] = useState(1)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const setRandom = () => setSelected(Math.floor(Math.random() * anecdotes.length))
  function handleVote(idx) {
    const votesCopy = [...votes]
    votesCopy[idx] += 1
    setVotes(votesCopy)
  }
  function getMaxVoteAnecdote() {
    const maxVoteIdx = votes.indexOf(Math.max(...votes))
    return anecdotes[maxVoteIdx]
  }

  return (
    <div>
      <Header text={"Anecdote of the day"} />

      <div> {anecdotes[selected]} </div>
      <div> {"has " + votes[selected] + " votes"}</div>

      <button onClick= {() => handleVote(selected) }>  {"vote"}  </button>
      <button onClick= {() => setRandom() }>  {"next anecdote"}  </button>

      <Header text={"Anecdote with most votes"} />
      <div> {getMaxVoteAnecdote()}</div>

    </div>
  )
}

export default App