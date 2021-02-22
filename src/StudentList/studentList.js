import "antd/dist/antd.css";
import { Button, Tooltip } from "antd";
import { SearchOutlined, PlusSquareFilled } from "@ant-design/icons";
import classes from "./studentList.module.css";
import { studentData } from "../studentData";
import { StudentListItem } from "./studentListItem";

export const StudentList = () => {
  console.log(studentData);
  const renderStudentList=()
  return (
    <div className={classes.container}>
      <div className={classes.wrap}>
        <div className={classes.title}>
          <div>Quản lý sinh viên</div>
          <div>
            <PlusSquareFilled className={classes.add} /> Thêm mới
          </div>
        </div>
        <input placeholder="Tìm kiếm"></input>
        <Tooltip title="search">
          <Button type="primary" shape="rectangle" icon={<SearchOutlined />} />
        </Tooltip>

        {studentData.map((student) => {
          <StudentListItem name={student.name} phone={student.phone} />;
        })}
        {/* <StudentListItem />
          <div className={classes.flex}>
            <div>Avatar</div>
            <div>
              <div>Bùi Quang Hoàng</div>
              <div>0321666888</div>
            </div>
            <div className={classes.imgSex}>
              <img src="../.././img/man.svg" alt="male"></img>
            </div>
          </div>
          <div className={classes.flex}>
            <div>Avatar</div>
            <div>
              <div>Bùi Quang Hoàng</div>
              <div>0321666888</div>
            </div>
            <div className={classes.imgSex}>
              <img src="../.././img/man.svg" alt="male"></img>
            </div>
          </div>
          <div className={classes.flex}>
            <div>Avatar</div>
            <div>
              <div>Kiều Loan</div>
              <div>0818763245</div>
            </div>
            <div className={classes.imgSex}>
              <img src="../.././img/woman.svg" alt="female"></img>
            </div>
          </div>
          <div className={classes.flex}>
            <div>Avatar</div>
            <div>
              <div>Bùi Quang Hoàng</div>
              <div>0321666888</div>
            </div>
            <div className={classes.imgSex}>
              <img src="../.././img/man.svg" alt="male"></img>
            </div>
          </div>
          <div className={classes.flex}>
            <div>Avatar</div>
            <div>
              <div>Bùi Quang Hoàng</div>
              <div>0321666888</div>
            </div>
            <div className={classes.imgSex}>
              <img src="../.././img/man.svg" alt="male"></img>
            </div>
          </div> */}

        <div className={classes.pageNumber}>
          <button> &#60;</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button> &#62;</button>
        </div>
      </div>
    </div>
  );
};
