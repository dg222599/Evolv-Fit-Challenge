import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDish, updateDish } from "../../actions/dishAction";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditDish = () => {
  let { id } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const dish = useSelector((state) => state.dish.dish);
  const [name, setName] = useState("");
  const [fats, setFats] = useState("");
  const [calories, setCalories] = useState("");
  const [carbs, setCarbs] = useState("");
  const [protein, setProtein] = useState("");

  useEffect(() => {
    if (dish != null) {
      setName(dish.name);
      setCarbs(dish.carbs);
      setProtein(dish.protein);
      setCalories(dish.calories);
      setFats(dish.fats);
    }
    dispatch(getDish(id));
  }, [dish]);

  const onUpdateDish = (e) => {
    e.preventDefault();

    const update_dish = Object.assign(dish, {
      name: name,
      carbs: carbs,
      fats: fats,
      protein: protein,
      calories: calories,
    });

    dispatch(updateDish(update_dish));
    history.push("/");
  };

  return (
    <div>
      <div className="card card-layout">
        <div className="card-body">
          <form onSubmit={(e) => onUpdateDish(e)}>
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

export default EditDish;
