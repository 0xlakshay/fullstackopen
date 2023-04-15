import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const n = anecdotes.length;
  const get_random = () => {
    return Math.floor(Math.random() * (n));
  }

  const [selected, setSelected] = useState(get_random())
  const [votes, setVotes] = useState(Array(n).fill(0))

  const handle_anecdote_click = () => {
    const rand = get_random();
    console.log(rand)
    setSelected(rand);
  }
  
  const handle_vote_click = () => {
    const new_votes = [...votes];
    new_votes[selected] += 1;
    setVotes(new_votes);
  }
  const max_votes = Math.max(...votes)
  const max_idx = votes.indexOf(max_votes);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={handle_vote_click} text="vote" />
      <Button handleClick={handle_anecdote_click} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[max_idx]}</p>
      <p>has {max_votes} votes</p>
      <h1>Debug</h1>
      <p>{votes.join(' ')}</p>
      <p>selected {selected}</p>
      <p>max votes {max_votes}</p>
      <p>max idx {max_idx}</p>
    </div>
  )
}

export default App