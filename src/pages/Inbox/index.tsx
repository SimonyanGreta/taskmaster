import {useEffect, useState} from "react";
import axios from "axios";
import {InputField} from "../../shared/ui/InputField";
import {Button} from "../../shared/ui/Button";
import {TodoItem} from "../../components";
import {Checkbox} from "../../shared/ui/Checkbox";
import {Drawer} from "../../shared/ui/Drawer";

export const InboxPage = () => {
  const [task, setTask] = useState('');
  const [firstDataFromBE, setFirstDataFromBE] = useState('');
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

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
      <Checkbox onChange={() => {
      }} checked={true}
      />

      <Drawer isOpen={isDrawerOpen} onToggle={toggleDrawer}>
        <h2>Содержимое</h2>
      </Drawer>
    </>
  )
}