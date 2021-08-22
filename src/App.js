import logo from './logo.svg';
import './App.css';

function App() {
  const testStr = '1';
  console.log(1 == testStr);
  console.log(1 === testStr);

  const testObj1 = { a: 1 };
  const testObj2 = { a: 2 };
  console.log(testObj1 == testObj2);
  console.log(testObj1 === testObj2);
  console.log(testObj1 == "[object Object]");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
