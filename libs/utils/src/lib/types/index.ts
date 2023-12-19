export type TSubjectsTeachers = {
  id: number;
  subject: string;
  teacher: string;

};
export type TGroupSubject = { id: number, name: string;  ttDataId?: number; subjectTeacher?: TSubjectsTeachers; };
export type TGroupObject = Record<string, TGroupSubject>;

export type TimeTableRow = {
  day: string;
  dayId: number;
  time: string;
  timeId: number;
  groupObject: TGroupObject;
};

export type TimeTableResponse = {
  day: string;
  dayId: number;
  list: TimeTableRow[];
}[];
