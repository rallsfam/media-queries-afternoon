import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownView: false
    }
  }

  toggleDropDown = () => {
    this.setState({dropdownView: !this.state.dropdownView})
  }
  render(){
    return (
      <div className="App">
        <header className='main-header'></header>
          <h1>Start Bootstrap</h1>
          <nav className='desktop-menu'>
              <span>Services</span>
              <span>Portfolio</span>
              <span>About</span>
              <span>Team</span>
              <span>Contact</span>
          </nav>
          <header>
          <section>
            <h2 className='first prompt'>Welcome To Our Studio!</h2>
            <h3 className='second prompt'>IT'S NICE TO MEET YOU</h3>
            <h4 className='third prompt'>TELL ME MORE</h4>
          </section>
        <div className='dropdown' onClick={this.toggleDropDown}>Menu</div>
        {this.state.dropdownView
          ? (
            <nav className='mobile-menu'>
               <span>Services</span>
               <span>Portfolio</span>
               <span>About</span>
               <span>Team</span>
               <span>Contact</span>
            </nav>
          )
          : null}
          </header> 
      </div>
    )
  }
}

export default App;

