// AppWithCustomHook.jsx
import useField from './useField';
import './App.css';  // Add CSS if needed
import useLocalStorage from './useLocalStorage';

const AppWithCustomHook = () => {
  const [name, setName] = useLocalStorage('name', '');
  const [born, setBorn] = useLocalStorage('born', '');
  const [height, setHeight] = useLocalStorage('height', '');
  const handleSubmit = (event) => {


    event.preventDefault();
    // You can handle form submission logic here
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <div>
          Birthdate: <input
            type="date"
            value={born}
            onChange={(e) => setBorn(e.target.value)}
          />
        </div>
        <br />
        <div>
          Height: <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        {name} {born} {height}
      </div>
      <div>

        <p>Your name is stored in localStorage: {name}</p>
      </div>
    </div>
  );
};

export default AppWithCustomHook;