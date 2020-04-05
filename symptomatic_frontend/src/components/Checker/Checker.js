import React from 'react';

class Checker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startingValue: '1',
      values: [1,2,3,4,5,6,7,8,9,10],
      value: 0,
      startingDate: '',
      endingDate: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onStartingDate = this.onStartingDate.bind(this);
    this.onEndingDate = this.onEndingDate.bind(this);
  }

  onStartingDate(event) {
    this.setState({startingDate: event.target.value});
  }

  onEndingDate(event) {
    this.setState({endingDate: event.target.value});
  }

  handleChange(value) {
    this.setState({value: value});
  }

  handleSubmit() {
    this.props.onSetSymptomValue(this.state.value, this.state.startingDate, this.state.endingDate);
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

          <div>
              <legend>Length of symptom</legend>
              <div>
                <label default="starting-date">Starting Date</label>
                <input type="date"
                name="starting-date"
                id="starting-date"
                onChange={this.onStartingDate} />
              </div>
              <div>
                <label default="ending-date">Ending Date</label>
                <input type="date"
                name="ending-date"
                id="ending-date"
                onChange={this.onEndingDate} />
              </div>
          </div>
          <div>
            <input
              onClick={this.handleSubmit}
              type="submit" value="Store Dates"
              className='button1' />
          </div>

        </div>
    );
  }
}

export default Checker;

// <button onClick={() => {this.handleSubmit()}} className='button1'>
// Store symptom
// </button>
