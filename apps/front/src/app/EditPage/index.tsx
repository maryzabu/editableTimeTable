import React from "react";
import {Table} from "antd";
import {ColumnType} from "antd/lib/table";

import styles from './styles.module.scss';
import {CellDnd} from "./CellDnd";
import {CellEmpty} from "./CellEmpty";
import {TGroupObject, TimeTableRow, TSubjectsTeachers} from "../types";
import {
  DEFAULT_GROUPS,
  EMPTY_GROUP_OBJECT,
  emptyGroupObject,
  mockSubjectsResponse,
  mockTimeTableResponse
} from "../mock/lists";
import {ColumnsType} from "antd/lib/table/interface";

export type TColumns = ColumnsType<TimeTableRow>;

const getColumns = (day: string, list: TimeTableRow[], groupObject: TGroupObject, subjects: TSubjectsTeachers[]): TColumns => ([
  {
    title: day,
    className: styles.titleDay,
    children: [
      {
        title: 'Время',
        key: 'child-time',
        width: 100,
        dataIndex: 'time',
        className: styles.timeCell,
      },
      ...(Object.entries(groupObject).map<TColumns[number]>(([groupKey, value]) => ({
        title: value.name,
        key: groupKey,
        className: styles.containerCel,
        render: (_, record, index) => {
          const subjectTeacher = record.groupObject[groupKey].subjectTeacher;
          const isEmpty = !subjectTeacher;
          return (
            <div className={styles.containerDnd}>
              {isEmpty ? <CellEmpty subjects={subjects}/> : <CellDnd {...subjectTeacher} list={list}/>}
            </div>
          );
        },
      })))
    ]
  },
]);

export const EditPage: React.FC = () => {
  const timeTableResponse = mockTimeTableResponse;
  const subjects = mockSubjectsResponse;
  const groups = DEFAULT_GROUPS;

  return timeTableResponse.map(({day, list}, index) => <Table
    columns={getColumns(day, list, EMPTY_GROUP_OBJECT, subjects)}
    dataSource={list}
    key={`table-${index}`} pagination={false} bordered/>);
}
