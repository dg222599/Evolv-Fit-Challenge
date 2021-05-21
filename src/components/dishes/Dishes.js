import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Dish from "./Dish";
import "../../styles/globalStyle.css";

const Dishes = () => {
  const dishes = useSelector((state) => state.dish.dishes);

  return (
    <div>
      <table className="table table-style shadow  table-responsive   table-striped">
        <thead className="table-head">
          <tr>
            <th>Name</th>
            <th>Protein</th>
            <th>Carbs</th>
            <th>Fats</th>
            <th>Calories</th>
            <th className="action">Actions</th>
          </tr>
        </thead>
        <tbody>
          {dishes.map((dish) => (
            <Dish dish={dish} key={dish.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dishes;
