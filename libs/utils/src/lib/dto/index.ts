export interface CreateTtDataDto {
  timeId: number;
  dayId: number;
  groupId: number;
  subjectId: number;
}

export interface PatchTtDataDto {
  id: number;
  timeId?: number;
  dayId?: number;
  groupId?: number;
  subjectId?: number;
}
