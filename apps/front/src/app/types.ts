export type TSubjectsTeachers = {
  id: number;
  subject: string;
  teacher: string;
};
export type TGroupObject = Record<string, { name: string; subjectTeacher?: TSubjectsTeachers; }>;
export type TimeTableRow = {
  day: string;
  time: string;
  groupObject: TGroupObject;
};

export type TimeTableResponse = {
  day: string;
  list: TimeTableRow[];
}[];
