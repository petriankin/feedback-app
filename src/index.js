import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    return (<button onClick={props.handleClick}>{props.text}</button>)
}

const Statistics = ({good, bad, neutral, all}) => {
    const calculateAverage = () => (good - bad) / (good + bad + neutral)

    const calculatePositive = () => (good / all) * 100

    return (
        <>
            <h2>statistics</h2>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {all}</p>
            <p>average {calculateAverage()}</p>
            <p>positive {calculatePositive()}</p>
        </>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)

    const handleGoodClick = () => {
        setGood(good + 1);
        setAll(all + 1);
    }

    const handleBadClick = () => {
        setBad(bad + 1);
        setAll(all + 1);
    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1);
        setAll(all + 1);
    }

    return (
        <div>
            <h2>give feedback</h2>
            <Button handleClick={handleGoodClick} text="good"/>
            <Button handleClick={handleNeutralClick} text="neutral"/>
            <Button handleClick={handleBadClick} text="bad"/>
            <Statistics good={good} bad={bad} neutral={neutral} all={all}/>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)
