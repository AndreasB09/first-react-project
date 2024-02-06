
import './App.css'
import githublogo from "../images/github_logo.svg";

function Layout(properties) {
  console.log(properties)
  return (
    <div>
      <header>
        <a href="">Logo</a>
        <ul>
          <li><a href="">Home</a></li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </header>
      <main>
        {properties.children}
      </main>
      <footer>
        <p>Kodehode Modul D</p>
      </footer>
    </div>
  );
}



function App() {

  return (
    //<Layout></Layout>
    <div>
      <h1>Hey Universe</h1>
      <a href="https://github.com/AndreasB09">
        <img src={githublogo} alt="github logo" id="github"></img>
      </a>
    </div>
  );
}

export default App
