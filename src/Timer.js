import React, { Component } from 'react';

class Timer extends Component {

  componentDidMount(){
    this.timer = setInterval(this.ticker, 1000);
  }

  constructor(props){
    super(props);

    this.state={
      clock: 0
    };

    this.ticker = this.ticker.bind(this);
  }

  ticker(){
    this.setState({clock: new Date() - this.props.start})
  }

  render(){

    var clock = Math.round(this.state.clock / 1000);

    return(
      <div>
        <p className="para_design1">You have been on this site since: </p>
        <br />
        <span>{clock}</span>
        <p className="para_design2">Seconds.</p>
      </div>
    );
  }
}

export default Timer;
