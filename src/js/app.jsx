/* eslint-disable linebreak-style */
import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  constructor() {
    super();
    this.state = {
      balance: '',
      rate: '',
      term: '',
      payment: 0
    };
    this.changeBalance = this.changeBalance.bind(this);
    this.changeRate = this.changeRate.bind(this);
    this.changeTerm = this.changeTerm.bind(this);
  }

  changeBalance(e) {
    this.setState({
      balance: e.target.value
    });
  }

  changeRate(e) {
    this.setState({
      rate: e.target.value
    });
  }

  changeTerm(e) {
    this.setState({
      term: e.target.value
    });
  }

  calculate(theState) {
    // calculate mortgage payment
    // M = P * (r(1+r)**n) / (1+r)**n-1
    // M is monthly payment
    // P is principal
    // r is monthly interest rate(annual interest rate divided by 12)
    // n is number of monthly payments
    let p = theState.balance;
    let r = theState.rate / 12;
    let n = theState.term;
    console.log(`n: ${n}`);
    let mp = p * ((r * ((1 + r) ** n)) / (((1 + r) ** n) - 1));
    console.log(`mp: ${mp}`);
    console.log(`theState: ${theState.payment}`);

    // this.setState({

    // });
  }

  render() {
    console.log(this.state.balance);
    console.log(this.state.rate);
    console.log(this.state.term);

    return (
      <div className='container form-horizontal'>
        <h2>M O R T G A G E</h2>
        <h2>C A L C U L A T O R</h2>
        <hr />
        <div className='form-group'>
          <input className='col-sm-10' value={ this.state.balance } onChange={ this.changeBalance } name='balance' type='number' />
          <label className='col-sm-2'>balance</label>
        </div>
        <div className='form-group'>
          <input className='col-sm-10' value={ this.state.rate } onChange={ this.changeRate } name='rate' type='number' step='0.01' />
          <label className='col-sm-2'>rate</label>
        </div>
        <div className='form-group'>
          <select name='term' className='col-sm-10' onChange={ this.changeTerm }>
            <option value='15'>15</option>
            <option value='30'>30</option>
          </select>
          <label className='col-sm-2'>term</label>
        </div>
        <button name='submit' onClick={ this.calculate(this.state) }>submit</button>
        <hr />
        <div className='form-group'>
          <div id='output' className='col-sm-10' name='output'>${ this.state.payment } is your payment.</div>
        </div>
      </div>
    );
  }
}
