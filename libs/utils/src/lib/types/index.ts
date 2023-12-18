export type TSubjectsTeachers = {
  id: number;
  subject: string;
  teacher: string;
};

export type TGroupObject = Record<string, { name: string; subjectTeacher?: TSubjectsTeachers; }>;

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
