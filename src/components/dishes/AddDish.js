import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addDish } from "../../actions/dishAction";
import shortid from "shortid";
import { useHistory } from "react-router-dom";

const AddDish = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [fats, setFats] = useState(0);
  const [calories, setCalories] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [protein, setProtein] = useState(0);
  const [image, setImage] = useState();

  const createDish = (e) => {
    e.preventDefault();
    const new_dish = {
      id: shortid.generate(),
      name: name,
      carbs: carbs,
      fats: fats,
      protein: protein,
      calories: calories,
    };
    dispatch(addDish(new_dish));
    history.push("/");
  };

  return (
    <div>
      <div className="card card-layout">
        <div className="card-body">
          <form onSubmit={(e) => createDish(e)}>
            <div className="form-group col-md-4">
              <label className="">Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group col-md-4">
              <label className="">Carbs</label>
              <input
                type="number"
                className="form-control"
                value={carbs}
                onChange={(e) => {
                  setCarbs(e.target.value);
                  setCalories(e.target.value * 4 + protein * 4 + 9 * fats);
                }}
              />
            </div>
            <div className="form-group col-md-4">
              <label className="">Fats</label>
              <input
                type="number"
                className="form-control"
                value={fats}
                onChange={(e) => {
                  setFats(e.target.value);
                  setCalories(9 * e.target.value + 4 * carbs + 4 * protein);
                }}
              />
            </div>
            <div className="form-group col-md-4">
              <label className="">Protein</label>
              <input
                type="number"
                className="form-control"
                value={protein}
                onChange={(e) => {
                  setProtein(e.target.value);
                  setCalories(4 * e.target.value + 9 * fats + 4 * carbs);
                }}
              />
            </div>
            <div className="form-group col-md-4">
              <label>Calories</label>
              <span>{calories}</span>
            </div>

            <button className="btn  add-btn" type="submit">
              Add Dish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDish;
