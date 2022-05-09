import "./App.css";
import Tada from 'react-reveal/Tada';
import Slide from 'react-reveal/Slide';
import React, { useState, useEffect } from "react";
const getLocalItem = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  }
};
const ClassList = [
  "list-group-item-primary",
  "list-group-item-secondary",
  "list-group-item-success",
  "list-group-item-danger",
  "list-group-item-warning"
];
export default function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([getLocalItem()]);
  const addtodo = () => {
    setInput("");
    if (input) {
      setTodos((oldtodo) => [...oldtodo, input]);
    }
    const random = Math.floor(Math.random() * 5);
    console.log(random);
    const nodeList = document.querySelector(".list-group").lastElementChild;
    nodeList.classList.add(ClassList[random]);
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(todos));
  }, [todos]);
  const deleteTodo = (ID) => {
    const newTodos = todos.filter((i, id) => id !== ID);
    setTodos(newTodos);
  };
  return (
    <div className="App">
      <div className="todos">
        <Tada>
        <h1>Todo list </h1>

        </Tada>
        <input
          type="text"
          value={input}
          placeholder="add todo"
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="addbtn" onClick={addtodo}>
          addtodo
        </button>
        <h1 style={{fontSize : "1.8rem"}}>add todo</h1>
        <ul className="list-group">
          {/* <li className="todo-txt" style={{ textAlign: "center" }}>add todo </li> */}
          {todos.map((i, id) => (
            <>
              <Slide top>
              <li id="li" key={id} className="list-group-item">
                {i}{" "}
                <button className="x" onClick={() => deleteTodo(id)}>
                  <i className="fa-solid fa-trash" />
                </button>
                <i
                  className="fa-solid fa-check"
                  style={{ fontSize: "24px" }}
                  onClick={() => {
                    document.getElementById("li").classList.toggle("mark");
                  }}
                />
              </li>
              </Slide>
            </>
          ))}
        </ul>
      </div>
    </div>
  );}
