import React from 'react';

class Checker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startingValue: '1',
      values: [1,2,3,4,5,6,7,8,9,10],
      value: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value) {
    this.setState({value: value});
  }

  handleSubmit() {
    this.props.onSetSymptomValue(this.state.value);
    this.props.onRouteChange('checkerStart');
  }

  render() {
    const {symptom} = this.props;
    return (
        <div>
        <h3>{ symptom }</h3>
          Select how severe your symptoms are:
          { this.state.values.map((value, index) => {
              return(
                <button onClick={() => {this.handleChange(value)}} className='button1' key={index}>
                {value}
                </button>
              )
            })
          }
          <button onClick={() => {this.handleSubmit()}} className='button1'>
          Store symptom
          </button>
        </div>
    );
  }
}

export default Checker;
