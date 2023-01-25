import { useEffect, useState } from "react";
import {
  BsCheckCircle,
  BsCircle,
  BsTrash,
  BsFillTrashFill,
  BsChevronRight,
} from "react-icons/bs";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState("");
  const [completed, setCompleted] = useState([]);
  const [completedTask, setCompletedTask] = useState(0);

  const addTask = (e) => {
    e.preventDefault();

    if (task) {
      setTodoList([...todoList, task]);
      localStorage.setItem("todoList", JSON.stringify([...todoList, task]));
      setTask("");
    } else {
      console.log("No task added");
    }
  };

  const completeTask = (index) => {
    setCompleted([...completed, todoList[index]]);
    setCompletedTask(completedTask + 1);
    localStorage.setItem(
      "completed",
      JSON.stringify([...completed, todoList[index]])
    );

    todoList.splice(index, 1);
    setTodoList([...todoList]);
    localStorage.setItem("todoList", JSON.stringify([...todoList]));
  };

  const removeTask = (index) => {
    todoList.splice(index, 1);
    setTodoList([...todoList]);
    localStorage.setItem("todoList", JSON.stringify([...todoList]));
  };

  useEffect(() => {
    if (localStorage.getItem("todoList")) {
      const storedList = JSON.parse(localStorage.getItem("todoList"));
      setTodoList(storedList);
    }

    if (localStorage.getItem("completed")) {
      const storedCompleted = JSON.parse(localStorage.getItem("completed"));
      setCompleted(storedCompleted);
    }
  }, []);

  return (
    <section className="flex flex-col gap-4">
      <form
        onSubmit={addTask}
        className="flex content-center justify-between gap-4"
      >
        <input
          type="text"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          placeholder="Add a task"
          className="w-full px-4 py-3 text-base bg-gray-600 rounded-md"
        />
        <button className="p-4 text-base bg-blue-600 rounded-md" type="submit">
          <IoMdAdd />
        </button>
      </form>

      <div>
        <ul className="flex flex-col gap-4">
          {todoList &&
            todoList.map((task, index) => (
              <li
                key={task + index}
                className="flex content-center justify-between gap-4 px-4 py-3 text-base bg-gray-600 rounded-md"
              >
                <button onClick={() => completeTask(index)}>
                  <BsCircle />
                </button>
                <span className="w-full">{task}</span>
                <button className="text-base" onClick={() => removeTask(index)}>
                  <BsTrash />
                </button>
              </li>
            ))}
        </ul>
      </div>

      <div className="flex flex-col gap-4 my-4">
        <div className="flex gap-4 ">
          <h3>Completed</h3>
          <span className="text-gray-500">{completedTask}</span>
        </div>
        <hr />
        <div>
          <ul className="flex flex-col gap-4">
            {completed.map((task, index) => (
              <li
                className="flex content-center justify-between gap-4 px-4 py-3 text-base bg-gray-600 rounded-md"
                key={task + index}
              >
                <span className="text-gray-300 line-through">{task}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default TodoList;
