import { studentData } from "../studentData";
import { StudentListItem } from "./studentListItem";
import { useSelector } from "react-redux";

export const Student = ({}) => {
  const studentInputValue = useSelector(
    (state) => state.studentFinded.studentInfo
  );
  const isFinded = useSelector((state) => state.studentFinded.isFinded);
  const isSearching = useSelector((state) => state.studentFinded.isSearching);
  const students = useSelector((state) => state.studentFinded.student);
  const page = useSelector((state) => state.currentPage.page);
  let beginStudent = (page - 1) * 5;
  let endStudent = page * 5;
  const studentList = studentData.slice(beginStudent, endStudent);
  const renderStudentList = () => {
    return (
      <ul>
        {studentList.map((student) => (
          <StudentListItem key={student.id} student={student} />
        ))}
      </ul>
    );
  };
  const renderStudentFinded = () => {
    return isFinded ? (
      <ul>
        <StudentListItem key={students.id} student={students} />
      </ul>
    ) : (
      <span></span>
    );
  };

  return isSearching ? renderStudentFinded() : renderStudentList();
};
