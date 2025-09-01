import List from './List';

function App() {

  const fruits = [{ id: 1, name: "apple", calories: 100 },
  { id: 2, name: "banana", calories: 200 },
  { id: 3, name: "cherry", calories: 50 },
  { id: 4, name: "date", calories: 75 },
  { id: 5, name: "elderberry", calories: 300 }];

  const vegetables = [{ id: 6, name: "carrot", calories: 25 },
  { id: 7, name: "lettuce", calories: 20 },
  { id: 8, name: "broccoli", calories: 100 },
  { id: 9, name: "spinach", calories: 75 },
  { id: 10, name: "tomato", calories: 40 }];

  return (
    <div>
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables" />}
    </div>
  )
}

export default App;