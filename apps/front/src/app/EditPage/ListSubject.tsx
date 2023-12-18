import React from "react";
import {TSubjectsTeachers} from "../types";
import {List} from "antd";
import {CellDnd} from "./CellDnd";
import styles from "./styles.module.scss";

export type TListSubject = {
  subjects: TSubjectsTeachers[];
}
export const ListSubject: React.FC<TListSubject> = ({subjects}) => {
  return <List className={styles.listSubjects} dataSource={subjects} renderItem={(item, index)=>(
    <CellDnd {...item}/>
  )} />
}
