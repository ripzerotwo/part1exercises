import { useState } from 'react'

const Button = (props) => {
  return (
    <>
      <button onClick={() => {
        props.function(props.val + 1)
      }}>{props.text} </button>
    </>
  )
}

const StatisticsLine = ({ text, value, ...rest }) => {
  if (rest.pos) {
    console.log(rest)
    return (
      <>
        <tr>
          <td>{text}</td>
          <td>{value} %</td>
        </tr>
      </>
    )
  }
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  )
}

const Statistics = (props) => {
  const good = props.feedback[0]
  const neutral = props.feedback[1]
  const bad = props.feedback[2]
  const all = good + neutral + bad
  const average = (good - bad) / (all)
  const positive = (good * 100) / (all)

  if (good || neutral || bad) {
    return (
      <>
        <table>
          <tbody>
            <StatisticsLine text="good" value={good} />
            <StatisticsLine text="neutral" value={neutral} />
            <StatisticsLine text="bad" value={bad} />
            <StatisticsLine text="all" value={all} />
            <StatisticsLine text="average" value={average} />
            <StatisticsLine text="positive" value={positive} pos='%' />
          </tbody>
        </table>
      </>
    )
  }
  return (
    <>
      <p>No feedback given</p>
    </>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>give feedback</h1>
      <Button text="good" function={setGood} val={good} />
      <Button text="neutral" function={setNeutral} val={neutral} />
      <Button text="bad" function={setBad} val={bad} />
      <h1>statistics</h1>
      <Statistics feedback={[good, neutral, bad]} />
    </>
  )
}

export default App;
