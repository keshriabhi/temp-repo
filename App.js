import logo from './logo.svg';
import './App.css';
import LoginPage from './LoginPage';
import Topbar from './Topbar';
import Mainpage from './Mainpage';
import ChooseHostel from './ChooseHostel';
function App() {
  return (
    <div className="App">
      <Topbar/>
      <ChooseHostel/>
    </div>
  );
}

export default App;
