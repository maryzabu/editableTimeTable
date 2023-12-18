import React from "react";
import {TSubjectsTeachers} from "../types";
import {List} from "antd";
import {CellDnd} from "./CellDnd";
import styles from "./styles.module.scss";

export type TListSubject = {
  subjects: TSubjectsTeachers[];
  onSetSubject?: (id: number) => void;
}
export const ListSubject: React.FC<TListSubject> = ({subjects, onSetSubject}) => {
  return <List className={styles.listSubjects} dataSource={subjects} renderItem={(item, index) => (
    <CellDnd {...item} onClick={onSetSubject}/>
  )}/>
}
