import React, { useState } from "react";
import TravelItem from "./TravelItem";
import data from "./data"; // Datos iniciales

function TravelList() {
  //Estado inicial: list = data --> [{},{},{},{},{},{}]
  const [list, setList] = useState(data); // [{},{},{}] lista de items
  const [values, setValues] = useState({
    task: "",
    desc: "",
    img_url: "",
  });

  const paintItems = () =>
    list.map((item, index) => (
      <TravelItem
        key={index}
        task={item.task}
        desc={item.desc}
        img_url={item.img_url}
        delete={() => deleteItem(index)}
      />
    ));

  const clearItems = () => setList([]); // vacía la lista -> list = []
  const resetItems = () => setList(data); // resetea la lista -> list = data

  const createItem = () => {
    alert("Create new task");
    const task = prompt("What is the task?");
    const desc = prompt("What is the due date?");

    const item = { task, desc }; // Nuevo objeto destino
    //list.push(item); // No se recomiendoa modificar directamente. Usar setList
    setList([...list, item]); // Añade el nuevo destino a la lista
  };

  const deleteItem = (pos) => {
    alert("Delete task");
    const remainingItems = list.filter((item, index) => index !== pos);
    setList(remainingItems); // modifica el estado con lo restante
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const task = e.target.task.value;
    const desc = e.target.desc.value;
    const img_url = e.target.img_url.value;

    const item = { task, desc, img_url }; // Nuevo objeto destino
    setList([item, ...list]); // Añade el nuevo destino a la lista
    console.log("*******");
    console.log(item);
    console.log(list);
  }

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  }


  return (
    <section>
      <div className="actionButtons">
        <button onClick={clearItems}>Delete all</button>
        <button onClick={resetItems}>Refresh</button>
        <button onClick={createItem}>Create a task</button>
      </div>


      <form onSubmit={handleSubmit} className="formTask">
        <label htmlFor="name">Task Name</label>
        <input type="text" name="task" onChange={handleChange} />

        <label htmlFor="price">Due Date</label>
        <input type="text" name="desc" onChange={handleChange} />

        {values.task && values.desc ?
          <button type="submit">ADD</button> : null}
      </form>




      {values.task || values.desc ?
        <div>
          <h4>New task: </h4>
          <p>Task: {values.task}</p>
          <p>Due Date: {values.desc}</p>
        </div> : null}

      {paintItems()}

    </section>
  );
}

export default TravelList;
