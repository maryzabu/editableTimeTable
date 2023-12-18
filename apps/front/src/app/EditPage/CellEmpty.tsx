import React, {useEffect, useState} from "react";
import styles from "./styles.module.scss";
import {Popover} from "antd";
import {ListSubject, TListSubject} from "./ListSubject";
import classNames from "classnames";

export const CellEmpty: React.FC<TListSubject> = ({subjects}) => {
  const [selected, setSelected] = useState(false);

  return <Popover placement="right" content={<ListSubject subjects={subjects}/>} trigger="click"
                  onOpenChange={setSelected} overlayClassName={styles.overlayClassName}>
    <div className={classNames(styles.cellEmpty, {[styles.cellSelected]: selected})}></div>
  </Popover>;
}
