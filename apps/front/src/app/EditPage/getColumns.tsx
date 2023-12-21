import {ColumnsType} from "antd/lib/table/interface";
import {CreateTtDataDto, TGroupObject, TimeTableResponse, TimeTableRow, TSubjectsTeachers} from "@utils";
import styles from "./styles.module.scss";
import {CellEmpty} from "./CellEmpty";
import {CellDnd, CellDndPopOver} from "./CellDnd";
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
  onSetItemSubject: (values: CreateTtDataDto, id?: number) => void;
  onDeleteTtData: (id: number) => void;
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
    selectedItem,
    onSetItemSubject,
    onDeleteTtData
  }: TGetColumnsProps): TColumns => ([
  {
    title: day.name,
    className: styles.titleDay,
    children: [
      {
        title: 'Время',
        key: 'child-time',
        width: 100,
        className: styles.timeCell,
        render: (_, record) => record.time.name
      },
      ...(Object.entries(groupObject).map<TColumns[number]>(([groupKey, group]) => ({
        title: group.name,
        key: groupKey,
        className: styles.containerCel,
        render: (_, record, index) => {
          const subjectTeacher = record.groupObject[groupKey]?.subjectTeacher;
          const ComponentCell = subjectTeacher ? CellDndPopOver : CellEmpty;
          const propsComponent = {
            subjects,
            group,
            record,
            setOpenChooser,
            openChooser,
            setSelectedItem,
            selectedItem,
            groupObject,
            list,
            onSetItemSubject,
            onDeleteTtData
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
