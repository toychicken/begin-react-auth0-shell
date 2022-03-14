import logo from './logo.svg';
import './App.scss';
import LoginButton from "./client/Auth/LoginButton";
import LogoutButton from "./client/Auth/LogoutButton";
import Profile from "./client/Profile";
import Todos from "./client/Todos";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        	<div>
				<Profile />
			</div>
		  <div>
			  <LoginButton /> | <LogoutButton />
		  </div>
		  <Todos />
      </header>
    </div>
  );
}

export default App;
