import React from 'react';
import DisplaySymptoms from '../DisplaySymptoms/DisplaySymptoms';

class Checker extends React.Component {

  checkSymptom(id) {
    this.props.onChangeSymptom(id);
    this.props.onRouteChange('checker');
  }

  render() {
    const {symptoms, checkerId, registeredSymptoms} = this.props;
    return (
      <div>
        <div>ID: {checkerId}</div>
        { symptoms.map((symptom, index) => {
            return(
              <button onClick={() => {this.checkSymptom(index)}} key={index}
                      class={registeredSymptoms[index] && registeredSymptoms[index].value ? 'button-completed ': 'button1'}
              >
              {symptom.name}
              </button>
            )
          })
        }
        <div>
        <button onClick={() => {this.props.onRouteChange('home')}} className='button2'>
        Go back
        </button>
        </div>
        <DisplaySymptoms symptoms={registeredSymptoms} />
        <button onClick={() => {this.props.getResults(checkerId); this.props.onRouteChange('result')}} className='button2'>
        Result
        </button>
      </div>

    );
  }
}

export default Checker;
