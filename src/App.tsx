import './App.css'
import {Button} from "./shared/ui/Button";
import {InputField} from "./shared/ui/InputField";
import {useEffect, useState} from "react";
import {TodoItem} from "./components";
import {Checkbox} from "./shared/ui/Checkbox";
import {Drawer} from "./shared/ui/Drawer";
import LoginForm from "./pages/LogIn";
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './app/store';
import { increment, decrement, incrementByAmount } from './features/counter/counterSlice';
import axios from 'axios';

function App() {
  const [task, setTask] = useState('');
  const [firstDataFromBE, setFirstDataFromBE] = useState('');
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();


  useEffect(() => {
    axios.get("http://localhost:8080/api/tasks")
      .then((response) => {
        setFirstDataFromBE(response.data)
      })
      .catch((error) => console.error("Ошибка при получении данных:", error))
  }, [])


  return (
    <>
      <h1>{firstDataFromBE}</h1>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>

      <LoginForm/>
      <div className="card">
        Task Master
      </div>
      <InputField
        value={task}
        onChange={setTask}
        title="Title"
        placeholder="placeholder"
        required
      />
      <Button size="small">Select</Button>

      <div>
        <TodoItem/>
      </div>
      <Checkbox onChange={() => {}} checked={true}/>

      <Drawer isOpen={isDrawerOpen} onToggle={toggleDrawer}>
        <h2>Содержимое</h2>
      </Drawer>
    </>
  )
}

export default App
