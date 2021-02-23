import "antd/dist/antd.css";

import classes from "./studentList.module.css";
import { studentData } from "../studentData";
import { StudentListItem } from "./studentListItem";
import { AddStudent } from "./addStudent";
import { PageNumber } from "./pageNumber";

import { SearchStudent } from "./searchStudent";
import { useState } from "react";

export const StudentList = () => {
  console.log(studentData.length);
  const [studentList, setStudentList] = useState(studentData);
  const handleCurrentPage = (number) => {
    let beginStudent = (number - 1) * 5;
    let endStudent = (number - 1) * 5 + 4;
    setStudentList(studentData.slice(beginStudent, endStudent));
    console.log(studentList);
  };
  return (
    <div className={classes.container}>
      <div className={classes.wrap}>
        <AddStudent />
        <SearchStudent />
        <ul>
          {studentList.map((student) => (
            <StudentListItem key={student.phone} student={student} />
          ))}
        </ul>
        <PageNumber
          numberOfStudent={studentData.length}
          onCurrentPage={handleCurrentPage}
        />
      </div>
    </div>
  );
};
