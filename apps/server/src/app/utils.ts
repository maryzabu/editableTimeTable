import {getDays, getGroupsObject, getSubjects, getTimes, TGroupObject, TGroupSubject, TimeTableRow} from "@utils";
import {TtDataEntity} from "./ttData/ttData.entity";

export const mapTtData = (ttdata: TtDataEntity[]) => {
  const days = getDays();
  const times = getTimes();
  const subjects = getSubjects();
  const groupsObjects = getGroupsObject();
  const dataByDays = days.map((day) => {
    const dataDay = ttdata.filter((row) => row.dayId === day.id);
    const list = times.reduce<TimeTableRow[]>((accTimes, time) => {
      const dataTime = dataDay.filter(({timeId}) => timeId === time.id);
      if (!dataTime.length) {
        return accTimes;
      }

      const groupObject: TGroupObject = Object.fromEntries<TGroupSubject>
      (Object.entries<TGroupSubject>(groupsObjects).map(([key, group]) => {

          const dtRow = dataTime.length && dataTime.find(
            (dataTimeGroup) => dataTimeGroup.groupId === group.id
          );
          const subjectTeacher = subjects.find(
            ({id}) => id === dtRow.subjectId
          );

          return [key, dtRow && subjectTeacher ? {...group, ttDataId: dtRow.id, subjectTeacher} : group];
        })
      );

      return [...accTimes, {
        groupObject,
        day: day.name,
        dayId: day.id,
        timeId: time.id,
        time: time.name,
      }];
    }, []);

    return {
      day,
      list
    }
  });

  return dataByDays;
}
