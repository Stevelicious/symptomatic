import React from 'react';
import DisplaySymptoms from '../DisplaySymptoms/DisplaySymptoms';

class Checker extends React.Component {

  checkSymptom(id) {
    this.props.onChangeSymptom(id);
    this.props.onRouteChange('checker');
  }

  render() {
    const {symptoms} = this.props;
    return (
      <div>
        { symptoms.map((symptom, index) => {
            return(
              <button onClick={() => {this.checkSymptom(index)}} className='button1' key={index}>
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
        <DisplaySymptoms symptoms={symptoms} />
        <button onClick={() => {this.props.onRouteChange('result')}} className='button2'>
        Result
        </button>
      </div>

    );
  }
}

export default Checker;
