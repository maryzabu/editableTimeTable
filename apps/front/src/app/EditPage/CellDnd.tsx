import styles from './styles.module.scss';
import {TimeTableRow, TSubjectsTeachers} from "../types";
import {Popover} from "antd";

export type TCellDnd = TSubjectsTeachers ;

export const CellDnd: React.FC<TCellDnd> = ({subject, teacher, list}) => {
  return <div className={styles.cellDnd}>
    <div className={styles.subject}>{subject}</div>
    <div className={styles.teacher}>{teacher}</div>
  </div>;
}

export const CellDndPopOver: React.FC<TCellDnd> = (porps) => {
  return <Popover>
    <CellDnd {...porps}/>
  </Popover>
}
