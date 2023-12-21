import React, {useEffect, useState} from "react";
import styles from "./styles.module.scss";
import {Popover} from "antd";
import {ListSubject, TListSubject} from "./ListSubject";
import classNames from "classnames";
import {TGroupSubject, TimeTableRow} from "@utils";
import {TGetColumnsProps} from "./getColumns";
import {isEqual} from "lodash-es";


export type TCellEmptyProps = TListSubject & Pick<TGetColumnsProps,
  'groupObject' | 'selectedItem' | 'setSelectedItem' |
  'setOpenChooser' | 'openChooser'> & {
  record: TimeTableRow;
  group: TGroupSubject;
}
export const CellEmpty: React.FC<TCellEmptyProps> = (
  {
    setSelectedItem,
    openChooser,
    setOpenChooser,
    subjects,
    record,
    group,
    selectedItem
  }) => {
  const curItem = {groupId: group.id, dayId: record.dayId, timeId: record.time.id};
  const selected = isEqual(selectedItem, curItem)
  const onOpenChange = (value: boolean) => {
    setSelectedItem(curItem);
    setOpenChooser(value);
  }

  const onSetSubject = (subjectId: number) => {
    console.log(subjectId);
    onOpenChange(false);
  }

  const open = openChooser && selected;
  return <Popover placement="right" content={<ListSubject subjects={subjects} onSetSubject={onSetSubject}/>}
                  trigger="click"
                  overlayClassName={styles.overlayClassName} open={open}>
    <div className={classNames(styles.cellEmpty, {[styles.cellSelected]: selected})}
         onClick={() => onOpenChange(true)}></div>
  </Popover>;
}
