/* @jsx Didact.createElement */
import Didact from '..';

function Counter() {
  const [state, setState] = Didact.useState(1);
  const increment = () => setState(c => c + 1);
  const decrement = () => setState(c => c - 1);
  return (
    <div>
      <h1>
        Count: {state}
      </h1>
      <p>
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
      </p>
    </div>
  );
}

function App() {
  return <Counter />;
}

const container = document.getElementById("root");
Didact.render(<App />, container);
