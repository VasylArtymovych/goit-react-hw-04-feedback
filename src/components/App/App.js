import React, {Component} from "react";
import Statistics from "../Statistics";
import FeedbackOptions from "../FeedbackOptions";
import Section from "../Section";
import Notification from "components/Notification";
import s from './App.module.css';

const options = ['Good', 'Neutral', 'Bad'];

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handlerStateChange = (event) => {
    let name = (event.target.name).toLowerCase();

    this.setState(prevState => ({
      [name]: prevState[name] + 1      
    }))
  }

  countTotalFeedback(){
    return Object.values(this.state).reduce((total, value) => total + value);
  }

  countPositiveFeedbackPercentage(){
    const total = this.countTotalFeedback();
    const positive = this.state.good; 
    if(positive === 0) return 0
    return Math.round((positive/total)*100);
  }

  render(){
    const {good, neutral, bad} = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage()

    return (
      <div className={s.container}>
        <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={this.handlerStateChange}/>
        </Section>
        
        <Section title="Statistics">
          {total ? 
          <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/> 
          : <Notification message='There is no feedback'/>
          }
        </Section>
        
      </div>
    )
  }
};

export default App; 