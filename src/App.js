import logo from './logo.svg';
import './App.css';
import Component1 from './part01/Component1';
import Component2 from './part02/Component2';
import Parent03 from './part03/Parent03';
import Parent04 from './part04/Parent04';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome
        <Component1/>
        <Component2/>
        <Parent03/>
        <Parent04/>
      </header>      
    </div>
  );
}

export default App;
