import classes from "./addStudent.module.css";
import { PlusSquareFilled } from "@ant-design/icons";

export const AddStudent = () => {
  return (
    <div className={classes.title}>
      <div>Quản lý sinh viên</div>
      <div>
        <button className={classes.addButton}>
          <PlusSquareFilled className={classes.add} />
          Thêm mới
        </button>
      </div>
    </div>
  );
};
