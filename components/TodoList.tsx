import { useEffect, useState } from "react";
import { BsCircle, BsTrash } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const TodoList = (props) => {
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
    // setCompletedTask(completedTask + 1);

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

  const removeCompletedTask = (index) => {
    completed.splice(index, 1);
    setCompleted([...completed]);
    localStorage.setItem("completed", JSON.stringify([...completed]));
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

  useEffect(() => {
    console.log("the length is:", completed.length);
    setCompletedTask(completed.length);
  }, [completed]);

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
          className={`w-full px-4 py-3 text-base rounded-md drop-shadow-md ${
            props.background ? "bg-gray-600 text-white" : "bg-white text-black"
          }`}
        />
        <button
          className="p-4 text-base text-white bg-blue-600 rounded-md drop-shadow-md"
          type="submit"
        >
          <IoMdAdd />
        </button>
      </form>

      <div>
        <ul className="flex flex-col gap-4">
          <AnimatePresence>
            {todoList &&
              todoList.map((task, index) => (
                <motion.li
                  key={task + index}
                  className={`flex content-center justify-between gap-4 px-4 py-3 text-base rounded-md drop-shadow-md ${
                    props.background
                      ? "bg-gray-600 text-white"
                      : "bg-white text-black"
                  }`}
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: 500 }}
                  transition={{ ease: "linear", duration: 0.2, delay: 0.05 }}
                >
                  <button onClick={() => completeTask(index)}>
                    <BsCircle />
                  </button>
                  <span className="w-full">{task}</span>
                  <button
                    className="text-base hover:text-red-500"
                    onClick={() => removeTask(index)}
                  >
                    <BsTrash />
                  </button>
                </motion.li>
              ))}
          </AnimatePresence>
        </ul>
      </div>

      <div className="flex flex-col gap-4 my-4">
        <div className="flex gap-4 ">
          <h3 className={`${props.background ? "text-white" : "text-black"}`}>
            Completed
          </h3>
          <span className="text-gray-500">{completedTask}</span>
        </div>
        <hr
          className={`h-[1px] ${props.background ? "bg-white" : "bg-black"}`}
        />
        <div>
          <ul className="flex flex-col gap-4">
            <AnimatePresence>
              {completed.map((task, index) => (
                <motion.li
                  className={`flex content-center justify-between gap-4 px-4 py-3 text-base rounded-md drop-shadow-md ${
                    props.background ? "bg-gray-600" : "bg-white"
                  }`}
                  key={task + index}
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: 500 }}
                  transition={{ ease: "linear", duration: 0.2, delay: 0.05 }}
                >
                  <span className="text-gray-300 line-through">{task}</span>
                  <button
                    className={`text-base ${
                      props.background ? "text-white" : "text-black"
                    }`}
                    onClick={() => removeCompletedTask(index)}
                  >
                    <BsTrash />
                  </button>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default TodoList;
