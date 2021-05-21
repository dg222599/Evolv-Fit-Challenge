import {
  CREATE_DISH,
  GET_DISH,
  UPDATE_DISH,
  DELETE_DISH,
  SELECT_CONTACT,
  CLEAR_CONTACT,
  DELETE_SELECTED_CONTACT,
} from "../constant/types";

// actions
export const addDish = (dish) => ({
  type: CREATE_DISH,
  payload: dish,
});

// get a contact
export const getDish = (id) => ({
  type: GET_DISH,
  payload: id,
});

// update a contact
export const updateDish = (dish) => ({
  type: UPDATE_DISH,
  payload: dish,
});

// delete a contact
export const deleteDish = (id) => ({
  type: DELETE_DISH,
  payload: id,
});
