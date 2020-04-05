import React, { Component } from 'react';
import Checker from './components/Checker/Checker'
import CheckerStart from './components/CheckerStart/CheckerStart';
import './App.css';


const initialState = {
  route: 'home',
  symptoms: [],
  currentSymptom: 0,
  symptomValues: [],
  registeredSymptoms: [],
  checkerId: 0
}

class App extends Component {
    constructor() {
      super();
      this.state = initialState;
    }

    componentDidMount() {
      fetch('https://symptomatic-backend-lpfzhwjv2a-lz.a.run.app/api/v1/symptoms')
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        let a = [
          {id: data[0].id, name: data[0].name},
          {id: data[1].id, name: data[1].name},
          {id: data[2].id, name: data[2].name},
          {id: data[3].id, name: data[3].name},
          {id: data[4].id, name: data[4].name}
        ];
        this.setState({ symptoms: a })
      })
      .catch(console.log)
    }

    // onStoreDates = () => {
    //   let symptoms = this.state.symptoms;
    //   symptoms[this.state.currentSymptom].dateStart = startingDate;
    //   symptoms[this.state.currentSymptom].dateEnd = endingDate;
    //   this.setState({symptoms:symptoms});
    // }

    onChangeSymptom = (symptomId) => {
      this.setState({currentSymptom: symptomId})
    }

    onSetSymptomValue = (id, name, value, startingDate, endingDate) => {
      let symptoms = this.state.registeredSymptoms;
      let symptom = {id: id, 
        name: name, 
        value: value,
        dateStart: startingDate,
        dateEnd: endingDate}
      symptoms[this.state.currentSymptom] = symptom;
      this.setState({registeredSymptoms:symptoms});
    }

    onRouteChange = (route) => {
        this.setState({route: route});
    }

    newChecker(){
      const requestOptions = {
        method: 'POST'
      };
      fetch('https://symptomatic-backend-lpfzhwjv2a-lz.a.run.app/api/v1/symptomchecker', requestOptions)
      .then(res => res.json())
      .then((data) => {
        console.log(data.id);
        this.setState({ checkerId: data.id })
        this.setState({ registeredSymptoms: [] })
      })
      .catch(console.log)
    }

    renderSwitch = (route) => {
      switch (route) {
        case 'home':
        return(
          <div className='center'>
              <button onClick={() => {this.newChecker(); this.onRouteChange('checkerStart')}} className='button1'>
              I am experiencing symptoms
              </button>

              <button onClick={() => {this.onRouteChange('checkerStart')}} className='button1'>
              I have tested positive for Covid-19
              </button>
          </div>
        )
        case 'checker':
        return(
        <Checker
          checkerId={this.state.checkerId}
          symptom={this.state.symptoms[this.state.currentSymptom]}
          registeredSymptoms={this.state.registeredSymptoms}
          onSetSymptomValue={this.onSetSymptomValue}
          onRouteChange={this.onRouteChange}
          />
        )
        case 'checkerStart':
        return(
        <CheckerStart
        checkerId={this.state.checkerId}
        symptoms={this.state.symptoms}
        registeredSymptoms={this.state.registeredSymptoms}
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
