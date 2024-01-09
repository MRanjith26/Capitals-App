import './index.css'
import {Component} from 'react'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {ActiveCapitalId: countryAndCapitalsList[0].id}

  onSelectOption = event => {
    this.setState({
      ActiveCapitalId: event.target.value,
    })
  }

  getCountry = () => {
    const {ActiveCapitalId} = this.state

    const activeCapitalOfCountry = countryAndCapitalsList.find(
      EachCapital => EachCapital.id === ActiveCapitalId,
    )

    return activeCapitalOfCountry.country
  }

  render() {
    const country = this.getCountry()
    return (
      <div className="bg-container">
        <div className="card">
          <div className="content-container">
            <h1 className="heading">Countries And Capitals</h1>
            <div className="form-container">
              <select
                className="form-control"
                id="Capitals"
                onChange={this.onSelectOption}
              >
                {countryAndCapitalsList.map(eachOption => (
                  <option value={eachOption.id} key={eachOption.id}>
                    {eachOption.capitalDisplayText}
                  </option>
                ))}
              </select>
              <label htmlFor="Capitals" className="label">
                is capital of which country?
              </label>
            </div>
            <h1 className="text">{country}</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
