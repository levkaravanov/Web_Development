import './App.css'

function Hello() {
  return <p>Hello, React!</p>;
}

function Bye() {
  return <p>Bye, React!</p>;
}

function App() {
  return (
    <div>
      <Hello />
      <Bye />
    </div>
  );
}

export default App;
