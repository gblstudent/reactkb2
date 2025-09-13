import logo from './logo.svg';
import './App.css';
import Component1 from './part01/Component1';
import Component2 from './part02/Component2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome
        <Component1/>
        <Component2/>
      </header>      
    </div>
  );
}

export default App;
