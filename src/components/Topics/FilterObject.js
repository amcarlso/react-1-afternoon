import React, {Component} from 'react'

class FilterObject extends Component {
  constructor(){
    super();

    this.state = {
      athletes: [
        {
          name: 'Kevin Durant',
          hair: 'black',
          height: 7
        },
        {
          name: 'steph',
          eyes: 'green',
          cars: 6,
          married: true
        },
        {
          name: 'Donovan',
          location: 'Utah',
          friends: 100000,
          title: 'Point Guard'
        }
      ],
      userInput: '',
      filteredAthletes: []
    }
  }

  handleChange(value) {
    this.setState({userInput: value})
  }

  handleFilterAthletes(athlete) {
    let athletes = this.state.athletes
    let filteredAthletes = []

    for(let i = 0; i < athletes.length; i++) {
      if( athletes[i].hasOwnProperty(athlete) ) {
        filteredAthletes.push(athletes[i]) 
      }
    }

    this.setState({ filteredAthletes: filteredAthletes })
  }



  render(){
    return(
      <div className='puzzleBox filterObjectPB'>
        <h4> Filter Object </h4>
        <span className='puzzleText'> Original: {JSON.stringify(this.state.athletes)}</span>
        <input className='inputLine' onChange={(e) => this.handleChange(e.target.value) } />
        <button className='confirmationButton' onClick={() => this.handleFilterAthletes(this.state.userInput)}>Filter</button>
        <span className='resultsBox filterObjectPB'>Filtered: {JSON.stringify(this.state.filteredAthletes)}</span>
      </div>
    )
  }
}

export default FilterObject 
