import {ColumnsType} from "antd/lib/table/interface";
import {TGroupObject, TimeTableResponse, TimeTableRow, TSubjectsTeachers} from "@utils";
import styles from "./styles.module.scss";
import {CellEmpty} from "./CellEmpty";
import {CellDnd} from "./CellDnd";
import React from "react";
import {TSelectedItem} from "./types";

export type TColumns = ColumnsType<TimeTableRow>;
export type TGetColumnsProps = TimeTableResponse[number] & {
  groupObject: TGroupObject;
  subjects: TSubjectsTeachers[];
  selectedItem?: TSelectedItem;
  setSelectedItem: (selected?: TSelectedItem) => void;
  setOpenChooser: (open: boolean) => void;
  openChooser: boolean;
}

export const getColumns = (
  {
    day,
    list,
    groupObject,
    subjects,
    openChooser,
    setOpenChooser,
    setSelectedItem,
    selectedItem
  }: TGetColumnsProps): TColumns => ([
  {
    title: day.name,
    className: styles.titleDay,
    children: [
      {
        title: 'Время',
        key: 'child-time',
        width: 100,
        dataIndex: 'time',
        className: styles.timeCell,
      },
      ...(Object.entries(groupObject).map<TColumns[number]>(([groupKey, group]) => ({
        title: group.name,
        key: groupKey,
        className: styles.containerCel,
        render: (_, record, index) => {
          const subjectTeacher = record.groupObject[groupKey]?.subjectTeacher;
          const ComponentCell = subjectTeacher ? CellDnd : CellEmpty;
          const propsComponent = {
            subjects,
            group,
            record,
            setOpenChooser,
            openChooser,
            setSelectedItem,
            selectedItem,
            groupObject,
            list
          }

          return (
            <div className={styles.containerDnd}>
              <ComponentCell {...propsComponent}/>
            </div>
          );
        },
      })))
    ]
  },
]);
