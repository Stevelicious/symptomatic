import React, { Component } from 'react';
import Checker from './components/Checker/Checker'
import CheckerStart from './components/CheckerStart/CheckerStart';
import './App.css';


const initialState = {
  route: 'home',
  symptoms: [
    {id:1, name: 'Fever', value: 0},
    {id:2, name: 'Cough', value: 0},
    {id:3, name: 'Fatigue', value: 0},
    {id:4, name: 'Breath difficulties', value: 0},
    {id:5, name: 'Chest tighness', value: 0}
  ],
  currentSymptom: 0,
  symptomValues: []
}

class App extends Component {
    constructor() {
      super();
      this.state = initialState;
    }

    onChangeSymptom = (symptom) => {
      this.setState({currentSymptom: symptom})
    }

    onSetSymptomValue = (value) => {
      let symptoms = this.state.symptoms;
      symptoms[this.state.currentSymptom].value = value;
      this.setState({symptoms:symptoms});
    }

    onRouteChange = (route) => {
        this.setState({route: route});
    }

    renderSwitch = (route) => {
      switch (route) {
        case 'home':
        return(
          <div className='center'>
              <button onClick={() => {this.onRouteChange('checker')}} className='button1'>
              I am experiencing symptoms
              </button>

              <button onClick={() => {this.onRouteChange('checker')}} className='button1'>
              I have tested positive for Covid-19
              </button>
          </div>
        )
        case 'checker':
        return(
        <Checker
          symptom={this.state.symptoms[this.state.currentSymptom].name}
          onSetSymptomValue={this.onSetSymptomValue}
          onRouteChange={this.onRouteChange}
          />
        )
        case 'checkerStart':
        return(
        <CheckerStart
        symptoms={this.state.symptoms}
        onChangeSymptom={this.onChangeSymptom}
        onRouteChange={this.onRouteChange} />
        )
        case 'result':
        return(
        <div>
          <h2>Your result is</h2>
          <button onClick={() => {this.onRouteChange('home')}} className='button2'>
          Go back
          </button>
        </div>
      )
        default:
        return(
          <div>
         </div>
        )
      }
    }

    render() {
      const { route } = this.state;
        return (
          <div className='App'>
              <div className='logo'>
                symptomatic
              </div>
              <div>
                {this.renderSwitch(route)}
              </div>
              <div className='disclaimer'>
              Disclaimer: The information provided is for educational purposes and should not be used for diagnosing or treating a health problem. The information provided is not a substitute for professional advice, diagnosis or treatment. If you have or suspect you may have a health problem, you should consult with your health care provider.
              </div>
          </div>
        );
    }
}

export default App;
