import styles from './styles.module.scss';
import {TimeTableRow, TSubjectsTeachers} from "../types";
import {Popover} from "antd";

export type TCellDnd = TSubjectsTeachers & {
  onClick?: (id: number) => void;
};

export const CellDnd: React.FC<TCellDnd> = ({subject, teacher, list, onClick, id}) => {
  return <div className={styles.cellDnd} onClick={() => onClick && onClick(id)}>
    <div className={styles.subject}>{subject}</div>
    <div className={styles.teacher}>{teacher}</div>
  </div>;
}

export const CellDndPopOver: React.FC<TCellDnd> = (porps) => {
  return <Popover>
    <CellDnd {...porps}/>
  </Popover>
}
