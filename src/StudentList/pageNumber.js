import classes from "./pageNumber.module.css";

import { studentData } from "../studentData";
import { useSelector, useDispatch } from "react-redux";
import { changePage, setPrePage, setNextPage } from "../redux/actionCreator";

export const PageNumber = ({}) => {
  const dispatch = useDispatch();

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(studentData.length / 5); i++) {
    pageNumbers.push(i);
  }
  const page = useSelector((state) => state.currentPage.startPage);

  const handlePrePage = () => {
    dispatch(setPrePage());
  };
  const handleNextPage = () => {
    dispatch(setNextPage());
  };
  const handleCurrentPage = (number) => {
    dispatch(changePage(number));
  };
  // const renderButton = () => {
  //   while
  // };
  return (
    <div className={classes.pageNumber}>
      <button onClick={handlePrePage}> &#60;</button>
      {pageNumbers.map((number) => {
        if (number <= page + 2 && number >= page) {
          return (
            <button key={number} onClick={() => handleCurrentPage(number)}>
              {number}
            </button>
          );
        }
      })}

      <button onClick={handleNextPage}> &#62;</button>
    </div>
  );
};
