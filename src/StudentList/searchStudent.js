import { Button, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";
// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeStudentInputValue, findStudent } from "../redux/actionCreator";

export const SearchStudent = () => {
  // const [studentInputValue, setStudentInputValue] = useState("");
  const studentInputValue = useSelector(
    (state) => state.studentFinded.studentInfo
  );
  const dispatch = useDispatch();
  const handleChange = (value) => {
    dispatch(changeStudentInputValue(value));
  };
  const handleSearch = () => {
    dispatch(findStudent());
  };

  return (
    <div>
      <input
        placeholder="Tìm kiếm"
        value={studentInputValue}
        onChange={(e) => handleChange(e.target.value)}
      ></input>
      <Tooltip title="search">
        <Button
          type="primary"
          shape="rectangle"
          icon={<SearchOutlined />}
          onClick={handleSearch}
        />
      </Tooltip>
    </div>
  );
};
