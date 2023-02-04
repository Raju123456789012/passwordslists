import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import YourPasswords from '../YourPasswords'

import './index.css'

const colors = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class PasswordLists extends Component {
  state = {
    appointmentsList: [],
    website: '',
    name: '',
    password: '',
    count: 0,
    search: '',
  }

  getImageButton = () => {
    const {count} = this.state

    if (count === 0) {
      return (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
            className="password"
          />
          <p className="heads">No Passwords</p>
        </div>
      )
    }
    return null
  }

  deleteButtons = id => {
    const {appointmentsList} = this.state
    const filter = appointmentsList.filter(eachUser => eachUser.id !== id)

    this.setState({appointmentsList: filter})

    this.setState(prevState => ({
      count: prevState.count - 1,
    }))
  }

  getRandomNumber = () => Math.ceil(Math.random() * colors.length - 1)

  submitButton = event => {
    event.preventDefault()

    const randomNumber = this.getRandomNumber()

    const {website, name, password} = this.state

    this.setState(prevState => ({
      count: prevState.count + 1,
    }))

    const ListContainer = {
      id: uuidv4(),
      website,
      name,
      password,
      Colors: colors[randomNumber],
    }

    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, ListContainer],
      website: '',
      name: '',
      password: '',
    }))
  }

  first = event => {
    this.setState({website: event.target.value})
  }

  second = event => {
    this.setState({name: event.target.value})
  }

  third = event => {
    this.setState({password: event.target.value})
  }

  searchButton = event => {
    this.setState({search: event.target.value})
  }

  passwordsInputs = () => {
    const {website, name, password} = this.state
    return (
      <form className="container4" onSubmit={this.submitButton}>
        <div className="row">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png  "
            alt="website"
            className="imager"
          />
          <input
            type="text"
            value={website}
            placeholder="Enter website"
            className="input"
            onChange={this.first}
          />
        </div>
        <div className="row">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
            alt="username"
            className="imagers"
          />
          <input
            type="text"
            value={name}
            className="inputs"
            onChange={this.second}
            placeholder="Enter Username"
          />
        </div>
        <div className="row">
          <img
            src=" https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
            alt="password"
            className="imagerss"
          />
          <input
            type="password"
            value={password}
            className="inputss"
            onChange={this.third}
            placeholder="Enter Password"
          />
        </div>

        <button className="button" type="submit">
          Add
        </button>
      </form>
    )
  }

  typeButton = searchResults => {
    if (searchResults === null) {
      return (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
            className="password"
          />
          <p className="heads">No Passwords</p>
        </div>
      )
    }
    return searchResults
  }

  render() {
    const {count, search, appointmentsList} = this.state
    const searchResults = appointmentsList.filter(eachKing =>
      eachKing.name.includes(search),
    )
    const searchResult = this.typeButton(searchResults)

    return (
      <div className="app-container">
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="image1"
          />
          <div className="container2">
            <div className="container3">
              <h1 className="heading">Add New Password</h1>
              {this.passwordsInputs()}
            </div>

            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                alt="password manager"
                className="image2"
              />
            </div>
          </div>
          <div className="container5">
            <div className="container6">
              <h1 className="heading">Your Passwords {count}</h1>
              <div>
                <img
                  src=" https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="img"
                />
                <input
                  type="search"
                  value={search}
                  className="inpute"
                  onChange={this.searchButton}
                  placeholder="search"
                />
              </div>
            </div>

            <hr className="separator" />
            <div className="container8">
              <input type="checkbox" id="check" />
              <label htmlFor="check" className="checking">
                Show Passwords
              </label>
            </div>
            <ul className="container7">
              {searchResult.map(eachItem => (
                <YourPasswords
                  UserDetails={eachItem}
                  Delete={this.deleteButtons}
                  key={eachItem.id}
                />
              ))}
            </ul>
            {this.getImageButton()}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordLists
