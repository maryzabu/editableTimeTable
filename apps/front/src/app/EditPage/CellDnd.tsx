import styles from './styles.module.scss';
import {Button, Popover} from "antd";
import {TCellEmptyProps} from "./CellEmpty";
import {ListSubject} from "./ListSubject";
import React from "react";
import {isEqual} from "lodash-es";
import {getGroupKeyById, TSubjectsTeachers} from "@utils";
import classNames from "classnames";
import {DeleteFilled} from '@ant-design/icons';

export type TCellDnd = TSubjectsTeachers & {
  onClick?: (id: number) => void;
  onRemove?: React.MouseEventHandler<HTMLDivElement>;
  selected?: boolean;
};

export const CellDnd: React.FC<TCellDnd> = ({subject, teacher, selected, onClick, onRemove, id}) => {
  return <div className={classNames(styles.cellDnd, {[styles.cellSelected]: selected})}
              onClick={() => onClick && onClick(id)}>
    <div className={styles.subject}>
      <div>{subject}</div>
      {onRemove && <Button className={styles.deleteButton} icon={<DeleteFilled/>} onClick={onRemove}/>}
    </div>
    <div className={styles.teacher}>{teacher}</div>
  </div>;
}

export type TCellDndPopOverProps = TCellEmptyProps;
export const CellDndPopOver: React.FC<TCellDndPopOverProps> = (
  {
    setSelectedItem,
    setOpenChooser,
    onSetItemSubject,
    group,
    record,
    selectedItem,
    subjects,
    openChooser,

    onDeleteTtData
  }) => {
  const curItem = {groupId: group.id, dayId: record.dayId, timeId: record.time.id};
  const selected = isEqual(selectedItem, curItem)

  const onOpenChange = (value: boolean) => {
    setSelectedItem(curItem);
    setOpenChooser(value);
  }
  const recObject = record.groupObject[getGroupKeyById(group.id)];
  const onSetSubject = (subjectId: number) => {
    console.log('recObject.ttDataId)', recObject.ttDataId);
    if (recObject.ttDataId === undefined) {
      return;
    }
    onSetItemSubject({...curItem, subjectId}, recObject.ttDataId);
    onOpenChange(false);
  }
  const onHanldeRemove: React.MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();

    if (recObject.ttDataId === undefined) {
      return;
    }
    onOpenChange(false);
    setSelectedItem(undefined);
    onDeleteTtData(recObject.ttDataId);
  }

  const open = openChooser && selected;
  console.log('group', group, record, record.groupObject['group-']);

//const curGroupItem =  record[]
  if (!recObject?.subjectTeacher) {
    return null;
  }

  return <Popover placement="right" content={<ListSubject subjects={subjects} onSetSubject={onSetSubject}/>}
                  trigger="click"
                  overlayClassName={styles.overlayClassName} open={open}>
    <CellDnd {...recObject.subjectTeacher} onClick={() => onOpenChange(true)} selected={selected}
             onRemove={onHanldeRemove}/>
  </Popover>;

}
