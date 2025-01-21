import './App.css'
import {Button} from "./shared/ui/Button";
import {InputField} from "./shared/ui/InputField";
import {useState} from "react";
import {TodoItem} from "./components";
import {Checkbox} from "./shared/ui/Checkbox";
import {Drawer} from "./shared/ui/Drawer";

function App() {
  const [task, setTask] = useState('');
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

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
