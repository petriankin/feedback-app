import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    return (<button onClick={props.handleClick}>{props.text}</button>)
}

const Statistic = ({text, value}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )

}

const Statistics = ({good, bad, neutral, all}) => {
    const calculateAverage = () => ((good - bad) / (good + bad + neutral)).toFixed(1)

    const calculatePositive = () => ((good / all) * 100).toFixed(1)

    if (all === 0) {
        return (
            <>
                <p>No feedback given</p>
            </>
        )
    }

    return (
        <>
            <table>
                <tbody>
                  <Statistic text="neutral" value={neutral}/>
                  <Statistic text="good" value={good}/>
                  <Statistic text="bad" value={bad}/>
                  <Statistic text="all" value={all}/>
                  <Statistic text="average" value={calculateAverage()}/>
                  <Statistic text="positive" value={calculatePositive()}/>
                </tbody>
            </table>
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
            <h2>statistics</h2>
            <Statistics good={good} bad={bad} neutral={neutral} all={all}/>
        </div>
    )
}

ReactDOM.render(<App/>,
    document.getElementById('root')
)
