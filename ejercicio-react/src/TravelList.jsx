import React, { useState, useRef  } from "react";
import TravelItem from "./TravelItem";
import data from "./components/MainComponent/TravelList/data"; // Datos iniciales

function TravelList() {
  //Estado inicial: list = data --> [{},{},{},{},{},{}]
  const [list, setList] = useState(data); // [{},{},{}] lista de items
  const [values, setValues] = useState({
    task: "",
    desc: "",
    img_url: "",
  });

  const taskRef = useRef(null);
  const descRef = useRef(null);

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

    // const clearForm = () => { task = ""; desc = ""; } // revisar esto
  // const clearAll = () => { clearForm(); clearSearch(); };
  //const startTimeout = () => setTimeout(clearSearch, 7000);

  const deleteItem = (pos) => {
    const remainingItems = list.filter((item, index) => index !== pos);
    setList(remainingItems); // modifica el estado con lo restante
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const task = e.target.task.value;
    const desc = e.target.desc.value;

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
          <br/>
      <button className="formButton">Delete</button>
        </div> : null}

        <h2>To-Do List:</h2>

      {paintItems()}

    </section>
  );
}

export default TravelList;
