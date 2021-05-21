import React from "react";

import { Link } from "react-router-dom";
import { deleteDish } from "../../actions/dishAction";
import { useDispatch } from "react-redux";
import "../../styles/globalStyle.css";

const Dish = ({ dish, selectAll }) => {
  const dispatch = useDispatch();
  const { id, name, protein, carbs, fats, calories } = dish;
  return (
    <tr className="dish-name">
      <td className="mr-auto  " name={name} round={true}>
        {name}
      </td>
      <td>{protein}</td>
      <td>{carbs}</td>
      <td>{fats}</td>
      <td>{calories}</td>
      <td className="actions">
        <Link to={`/dishes/edit/${id}`}>
          <span className="material-icons icon">edit_note</span>
        </Link>
        <Link to="">
          <span
            className="material-icons icon"
            onClick={() => dispatch(deleteDish(id))}
          >
            delete
          </span>
        </Link>
      </td>
    </tr>
  );
};

export default Dish;
