import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import Avatar from './components/Avatar.js';
import Player from './Player.js';

function App() {
const [players, setPlayers] = useState([{}]); 

  const initialState = [
    {id: 1, name: 'test', image: './Images/1'}
  ];

  const [employees, setEmployees] = useState(initialState);

  // ✅ Add an object to a state array
  const addObjectToArray = obj => {
    setEmployees(current => [...current, obj]);
  };

  // ✅ Update one or more objects in a state array
  const updateObjectInArray = () => {
    setEmployees(current =>
      current.map(obj => {
        if (obj.id === 2) {
          return {...obj, name: 'Sophia', country: 'Sweden'};
        }

        return obj;
      }),
    );
  };

  // ✅ Remove one or more objects from state array
  const removeObjectFromArray = () => {
    setEmployees(current =>
      current.filter(obj => {
        return obj.id !== 2;
      }),
    );
  };
 const newName = "";
  return (
    <div>
      <h1>Add player</h1>
      <input type="text" placeholder="Type here..." onClick={newName}/>
      <button
        onClick={() =>
          addObjectToArray({
            id: Math.random(),
            name: newName,
            country: 'Canada',
          })
        }
      >
        Add employee
      </button>

      <button onClick={updateObjectInArray}>Update object in array</button>

      <button onClick={removeObjectFromArray}>Remove object from array</button>

      {employees.map(employee => {
        return (
          <div key={employee.id}>
            <h2>name: {employee.name}</h2>
            <h2>country: {employee.country}</h2>

            <hr />
          </div>
        );
      })}
    </div>
  );
  }
  export default App;


/* function App() {

  console.log(player1);

  return (
    <div className="App">

      {player1.name}
      

    </div>
  );
} */


