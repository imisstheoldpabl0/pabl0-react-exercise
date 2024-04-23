import React, { useState, useRef } from "react";
import TravelItem from "./TravelItem";
import data from "./data"; // Datos iniciales
import "./TravelList.css";

function TravelList() {
  //Estado inicial: list = data --> [{},{},{},{},{},{}]
  const [list, setList] = useState(data); // [{},{},{}] lista de items
  const [values, setValues] = useState({
    task: "",
    desc: "",
  });

  const taskRef = useRef(null);
  const descRef = useRef(null);
  const messageRef = useRef(null);

  const paintItems = () =>
    list.map((item, index) => (
      <TravelItem
        key={index}
        task={item.task}
        desc={item.desc}
        delete={() => deleteItem(index)}
      />

    ));

  const clearItems = () => setList([]); // vacía la lista -> list = []
  const resetItems = () => setList(data); // resetea la lista -> list = data

  const clearSearch = () => setValues({ task: "", desc: "" });
  const clearForm = () => { taskRef.current.value = ""; descRef.current.value = ""; } // revisar esto
  //const clearForm = () => { taskRef = ""; descRef = ""; } // revisar esto
  const clearAll = () => { clearForm(); clearSearch(); };

  const hideMessage = () => {messageRef.current.innerHTML = "";};

  const startTimeout = () => setTimeout(clearAll, 20000);
  const messageTimeout = () => setTimeout(hideMessage, 5000);

  const checkLength = () => {
    if (taskRef.current.value.length < 6) {
      messageRef.current.innerHTML = "Task name must be at least 6 characters long!";
      return false;
    } else {
      messageRef.current.innerHTML = "";
      return true;
    }};

  const deleteItem = (pos) => {
    const remainingItems = list.filter((item, index) => index !== pos);
    setList(remainingItems); // modifica el estado con lo restante
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const task = e.target.task.value;
    const desc = e.target.desc.value;

    if (checkLength()) {

    const item = { task, desc }; // Nuevo objeto destino
    setList([item, ...list]); // Añade el nuevo destino a la lista
    console.log("*******");
    console.log(item);
    console.log(list);

    // Probando ref
    console.log(taskRef.current.value);
    taskRef.current.value = "";
    descRef.current.value = "";
    console.log("*******");
    console.log(taskRef.current.value);

    clearSearch();
    messageRef.current.innerHTML = "Task added successfully!";
    messageTimeout();
    }

  }

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    startTimeout();


    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  }


  return (
    <section>

      <div>
        <p ref={messageRef}></p>
      </div>

      <form onSubmit={handleSubmit} className="formTask">
        <label htmlFor="name">Task Name</label>
        <input type="text" name="task" ref={taskRef} onChange={handleChange} />

        <label htmlFor="price">Due Date</label>
        <input type="text" name="desc" ref={descRef} onChange={handleChange} />

        {values.task && values.desc ?
          <button type="submit">ADD</button> : null}
      </form>

      {values.task || values.desc ?
        <div className="formCard1">
          <h3>{values.task}</h3>
          <p>Due date: {values.desc}</p>
          <br />
        </div> : null}

      <h2>To-Do List:</h2>

      <div className="actionButtons">
        <button onClick={clearItems}>Delete all</button>
        <button onClick={resetItems}>Refresh</button>
      </div>

      {paintItems()}

    </section>
  );
}

export default TravelList;
