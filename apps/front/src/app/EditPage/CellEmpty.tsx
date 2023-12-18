import React, {useEffect, useState} from "react";
import styles from "./styles.module.scss";
import {Popover} from "antd";
import {ListSubject, TListSubject} from "./ListSubject";
import classNames from "classnames";

export const CellEmpty: React.FC<TListSubject> = ({subjects}) => {
  const [selected, setSelected] = useState(false);
  const [open, setOpen] = useState(false);
  const onOpenChange = (value: boolean) => {
    setSelected(value);
    setOpen(value);
  }
  const onSetSubject = (subjectId: number) => {
    console.log(subjectId);
  }

  return <Popover placement="right" content={<ListSubject subjects={subjects} onSetSubject={onSetSubject}/>}
                  trigger="click"
                  onOpenChange={setSelected} overlayClassName={styles.overlayClassName} open={open}>
    <div className={classNames(styles.cellEmpty, {[styles.cellSelected]: selected})}></div>
  </Popover>;
}
