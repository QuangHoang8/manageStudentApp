import "antd/dist/antd.css";

import classes from "./studentList.module.css";
import { studentData } from "../studentData";
import { Student } from "./student";
import { AddStudent } from "./addStudent";
import { PageNumber } from "./pageNumber";

import { SearchStudent } from "./searchStudent";
import { useState } from "react";
import { useSelector } from "redux";

export const StudentList = () => {
  // console.log(studentData.length);
  // const [studentList, setStudentList] = useState(studentData);

  // const [currentPage, setCurrentPage] = useState(1);
  // const handleCurrentPage = (number) => {
  //   setCurrentPage(number);
  // };

  return (
    <div className={classes.container}>
      <div className={classes.wrap}>
        <AddStudent />
        <SearchStudent />
        <Student />

        <PageNumber />
      </div>
    </div>
  );
};
