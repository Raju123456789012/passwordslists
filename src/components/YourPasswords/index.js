import './index.css'

const YourPasswords = props => {
  const {UserDetails, Delete} = props
  const {name, password, website, id, Colors} = UserDetails

  const clickButton = () => {
    Delete(id)
  }

  return (
    <li className="list-container">
      <div className="container10">
        <div className="row">
          <div>
            <h1 className={`${Colors}`}>{name[0]}</h1>
          </div>
          <div className="container11">
            <h1 className="para">{website}</h1>
            <h1 className="para">{name}</h1>
            <h1 className="para">{password}</h1>
          </div>
        </div>
        <div>
          <button className="button1" type="button" onClick={clickButton}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
              alt="delete"
              className="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default YourPasswords
