import { actionTypes } from "../actionTypes";
import { studentData } from "../../studentData";
export const searchStudent = (
  state = {
    studentInfo: "",
    student: studentData,
    isFinded: false,
    isSearching: false,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.CHANGE_INPUT: {
      return { ...state, studentInfo: action.payload.studentInfo };
    }
    case actionTypes.SEARCH: {
      return handleSearch(state);
    }
    default:
      return state;
  }
};
const handleSearch = (currentState) => {
  if (currentState.studentInfo) {
    const studentFinded = studentData.find(
      (student) =>
        student.name === currentState.studentInfo ||
        student.phone === currentState.studentInfo
    );
    console.log(studentFinded);
    if (studentFinded) {
      return {
        ...currentState,
        student: studentFinded,
        isFinded: true,
        isSearching: true,
      };
    } else {
      return {
        ...currentState,
        isFinded: false,
        student: "",
        isSearching: true,
      };
    }
  } else {
    return {
      ...currentState,
      student: studentData,
      isFinded: false,
      isSearching: false,
    };
  }
};
