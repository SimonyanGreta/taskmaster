import './App.css'
import {Button} from "./shared/ui/Button";
import {InputField} from "./shared/ui/InputField";
import {useState} from "react";
import {TodoItem} from "./components";
import Checkbox from "./shared/ui/Checkbox/Checkbox.tsx";

function App() {
  const [task, setTask] = useState('');

  return (
    <>
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
      <Button>Select</Button>

      <div>
        <TodoItem />
      </div>
      <Checkbox onChange={() => {}} checked={true} />
    </>
  )
}

export default App
