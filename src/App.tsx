import './App.css'
import {Button} from "./shared/ui/Button";
import {InputField} from "./shared/ui/InputField";
import {useState} from "react";

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
        placeholder="Title"
      />
      <Button>Select</Button>
    </>
  )
}

export default App
