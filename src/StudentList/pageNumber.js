import classes from "./pageNumber.module.css";

export const PageNumber = ({ numberOfStudent, onCurrentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(numberOfStudent / 5); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={classes.pageNumber}>
      <button> &#60;</button>
      {pageNumbers.map((number) => (
        <button key={number} onClick={onCurrentPage(number)}>
          {number}
        </button>
      ))}

      <button> &#62;</button>
    </div>
  );
};
