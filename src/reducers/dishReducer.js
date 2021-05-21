// LEVEL 1 - Admin Page ( /admin )
// • Add a dish (must include protein, carbs, fats, and calculate calories based on that)
// • Edit the dish parameters, and update calories accordingly
// • Delete a dish
// • Display all the dishes in a table format.
// • Use redux to store the dishes

import {
  CREATE_DISH,
  GET_DISH,
  UPDATE_DISH,
  DELETE_DISH,
} from "../constant/types";

const initialValues = {
  dishes: [
    {
      id: 1,
      name: "Red Sauce Pasta",
      protein: 12,
      carbs: 13,
      fats: 14,
      calories: 226,
    },
    {
      id: 2,
      name: "Poha-Indori",
      protein: 14,
      carbs: 15,
      fats: 16,
      calories: 260,
    },
    {
      id: 3,
      name: "Paneer-Tikka",
      protein: 20,
      carbs: 21,
      fats: 22,
      calories: 362,
    },
  ],
  dish: null,
};

export const dishReducer = (state = initialValues, action) => {
  switch (action.type) {
    case CREATE_DISH:
      return {
        ...state,
        dishes: [action.payload, ...state.dishes],
      };
    case GET_DISH:
      let data = state.dishes.filter((dish) => dish.id == action.payload);
      data = data.values();
      for (let i of data) {
        data = i;
      }
      return {
        ...state,
        dish: data,
      };
    case UPDATE_DISH:
      return {
        ...state,
        dishes: state.dishes.map((dish) =>
          dish.id == action.payload.id ? action.payload : dish
        ),
      };
    case DELETE_DISH:
      return {
        ...state,
        dishes: state.dishes.filter((dish) => dish.id != action.payload),
      };
    default:
      return state;
  }
};
