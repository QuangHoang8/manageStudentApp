import classes from "./studentListItem.module.css";

export const StudentListItem = ({ student }) => {
  return (
    <li>
      <div className={classes.flex}>
        <div className={classes.user}>
          <img src={student.avatar} alt="male"></img>
        </div>
        <div>
          <div>{student.name}</div>
          <div>{student.phone}</div>
        </div>
        <div className={classes.imgSex}>
          {student.sex === "male" ? (
            <img src="../.././img/man.svg" alt="male"></img>
          ) : (
            <img src="../.././img/woman.svg" alt="female"></img>
          )}
        </div>
      </div>
    </li>
  );
};
