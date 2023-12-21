export type TSubjectsTeachers = {
  id: number;
  subject: string;
  teacher: string;

};
export type TGroupSubject = { id: number, name: string; ttDataId?: number; subjectTeacher?: TSubjectsTeachers; };
export type TGroupObject = Record<string, TGroupSubject>;
export type TNameId = {
  name: string;
  id: number;
}

export type TimeTableRow = {
  time: TNameId;
  groupObject: TGroupObject;
  dayId: number;
};

export type TimeTableResponse = {
  day: TNameId;
  list: TimeTableRow[];
}[];
