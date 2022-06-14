import React from "react";
import "../App.css";

// First, let's declare some variables for the creation of plant's properties.

function PlantCreation({
  handleSubmit,
  onChange,
  value,
  trigger,
  setTrigger,
  children,
}) {

  const plant = value;

// Now we can return the function.

  return trigger ? (
    <div className="plantCreation">
      <div className="creationContainer">
        <div className="plantCreation-inner">
          <h3 className="popUpText">Add a new member to your plant family!</h3>
          <div>
            <button className="close-btn" onClick={() => setTrigger(false)}>
              X
            </button>
          </div>
          {children}
        </div>
        <form className="forms" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            className="inputBox"
            type="text"
            placeholder="Gary"
            value={plant.name}
            onChange={(e) => {
              onChange({
                ...plant,
                name: e.target.value,
              });
            }}
          ></input>
          <label>Species</label>
          <input
            className="inputBox"
            type="text"
            placeholder="Cactus"
            value={plant.species}
            onChange={(e) => onChange({ ...plant, species: e.target.value })}
          ></input>
          <label>I need watering every...</label>
          <input
            className="inputBox"
            type="number"
            placeholder="2"
            value={plant.wateringNum}
            onChange={(e) =>
              onChange({ ...plant, wateringNum: e.target.value })
            }
          ></input>
          <select
            className="selectBox"
            value="wateringFreq"
            onChange={(e) =>
              onChange({ ...plant, wateringFreq: e.target.value })
            }
          >
            <option value="days">days</option>
            <option value="weeks">weeks</option>
            <option value="months">months</option>
          </select>
          <button className="save-Btn">Save</button>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
}

export default PlantCreation;
