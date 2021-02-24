import { combineReducers } from "redux";
import { searchStudent } from "./reducer/searchingStudent";
import { currentPage } from "./reducer/page";

export default combineReducers({
  studentFinded: searchStudent,
  currentPage: currentPage,
});
