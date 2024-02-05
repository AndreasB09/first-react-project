
import './App.css'
import githublogo from "../images/github_logo.svg";

function App() {

  return (
    <div>
      <h1>Hey Universe</h1>
      <a href="https://github.com/AndreasB09">
        <img src={githublogo} alt="github logo" id="github"></img>
      </a>
    </div>
  );
}

export default App
