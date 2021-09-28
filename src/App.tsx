import logo from './logo.svg';
import './App.css';
const { withUAL } = require('ual-reactjs-renderer');

function App(props:any) {

  const login = () => {
    props.ual.logout();
    props.ual.showModal();
  }

  const logout = () => {
    props.ual.logout();
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {props.ual?.activeUser ?
            <>
                <p>
                    <div className="account-name">{props.ual.activeUser.accountName}</div>
                    <input type="button" value="Log Out" className="login-btn" onClick={logout} />
                </p>
            </>
        :
          <input type="button" value="Log In" className="login-btn" onClick={login} />
        }        
        <a
          className="App-link"
          href="https://github.com/EOSIO/universal-authenticator-library"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn WAX Authentication
        </a>
      </header>
    </div>
  );
}

export default withUAL(App);
