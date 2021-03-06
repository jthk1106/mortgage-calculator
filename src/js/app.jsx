import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  constructor() {
    super();
    this.state = {
      balance: '',
      rate: '',
      term: 15,
      payment: `$0 is your payment`
    };
    this.changeBalance = this.changeBalance.bind(this);
    this.changeRate = this.changeRate.bind(this);
    this.changeTerm = this.changeTerm.bind(this);
    this.calculate = this.calculate.bind(this);
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

  calculate() {
    const p = this.state.balance;
    const r = (this.state.rate / 100) / 12;
    const n = this.state.term * 12;
    const top = r * ((1 + r) ** n);
    const bottom = ((1 + r) ** n) - 1;
    const m = p * (top / bottom);
    const monthlyPayment = m.toFixed(2)

    this.setState({
      payment: `$${monthlyPayment} is your payment.`
    });
  }

  render() {

    return (
      <div className='container form-horizontal'>
        <h3>Mortgage Calculator</h3>
        <h2>M O R T G A G E</h2>
        <h2>C A L C U L A T O R</h2>
        <hr />
        {<div className='form-group'>
          <input className='col-sm-10' value={ this.state.balance } onChange={ this.changeBalance } name="balance" type='number' />
          <label className='col-sm-2'>balance</label>
        </div>}
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
        <button name='submit' onClick={ this.calculate }>submit</button>
        <hr />
        <div className='form-group'>
          <div id='output' className='col-sm-10' name='output'>{ this.state.payment }</div>
        </div>
      </div>
    );
  }
}
