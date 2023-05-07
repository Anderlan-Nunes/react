import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className='linha'>
        <Card title="Card #1" blue>
          xx
        </Card>
        <Card title="Card #2" red>
          xy
        </Card>
      </div>
      <div className='linha'>
        <Card title="Card #3" purple>
          yx
        </Card>
        <Card title="Card #4" green>
          yy
        </Card>
      </div>
    </div>
  );
}

export default App;
