import classes from "./studentListItem.module.css";

export const StudentListItem = (name, phone) => {
  return (
    <div className={classes.flex}>
      <div>Avatar</div>
      <div>
        <div>{name}</div>
        <div>{phone}</div>
      </div>
      <div className={classes.imgSex}>
        <img src="../.././img/man.svg" alt="male"></img>
      </div>
    </div>
  );
};
