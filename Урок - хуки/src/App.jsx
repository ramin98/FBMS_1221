import { createContext, useState, useReducer} from 'react'
import './App.css'
import { reducer, initialTodos } from './reducer/reducer';
import ComponentOne from './components/ComponentOne';
export const MyContext = createContext()

function App() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
    let [value, setvalue] = useState('')
    let [count, setCount] = useState(0)

    const handleComplete = (todo) => {
      dispatch({ type: "COMPLETE", id: todo.id });
    };

    const handleAdd = () => {
        dispatch({ type: "ADD", value: value });
        console.log(initialTodos)
      };
  
    return (
      <MyContext.Provider value={count}>
        <ComponentOne/>
      <input onChange={(ev) => setvalue(ev.target.value)} type="text" />
      <button onClick={handleAdd}>ADD</button>
        {todos.map((todo) => (
          <div key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() =>{
                    handleComplete(todo)
                    console.log(todo)
                } }
              />
              {todo.title}
            </label>
          </div>
        ))}
      </MyContext.Provider>
    );
              }

export default App
