import {TGroupObject, TimeTableResponse, TimeTableRow, TSubjectsTeachers} from "../types";

export const DEFAULT_TIMES: string[] = [
  '08:30 - 9:10',
  '09:20 - 10:00',
  '10:10 - 10:50',
  '11:00 - 11:40',
  '11:50 - 12:30',
  '12:40 - 13:20',
  '13:30 - 14:10',
  '14:20 - 15:00'
];


const DEFAULT_SUBJECTS_TEACHERS: Omit<TSubjectsTeachers, 'id'>[] = [
  {
    subject: 'История', //История
    teacher: 'Димидов Л.Г.' // Иванов Иван Александрович
  },
  {
    subject: 'Право',
    teacher: 'Димидов Л.Г.'
  },
  {
    subject: 'Физика',
    teacher: 'Коваль В.В.'
  },
  {
    subject: 'Астрономия',
    teacher: 'коваль В.В.'
  },
  {
    subject: 'Физическая культура',
    teacher: 'Черноволов В.В.'
  },
  {
    subject: 'Физическая культура',
    teacher: 'Жолтовская Т.Ю.'
  },
  {
    subject: 'Русский язык',
    teacher: 'Меркулова К.И.'
  },
  {
    subject: 'Русский язык',
    teacher: 'Карабасова О.А.'
  },
  {
    subject: 'Русский язык',
    teacher: 'Горницкая Л.И.'
  },
  {
    subject: 'Русский язык',
    teacher: 'Талалаева К.А.'
  },
  {
    subject: 'Литература',
    teacher: 'Меркулова К.И.'
  },
  {
    subject: 'Литература',
    teacher: 'Карабасова О.А.'
  },
  {
    subject: 'Библейский сюжет',
    teacher: 'Карабасова О.А.'
  },
  {
    subject: 'Литература',
    teacher: 'Грищенко Е.Ю.'
  },
  {
    subject: 'Литература',
    teacher: 'Горницкая Л.И.'
  },
  {
    subject: 'Родная литература',
    teacher: 'Грищенко Е.Ю.'
  },
  {
    subject: 'Россия мои горизонты',
    teacher: 'Ядак В.С.'
  },
  {
    subject: 'Информатика',
    teacher: 'Титаренко Е.А.'
  },
  {
    subject: 'Вероятность и статистика',
    teacher: 'Титаренко Е.А.'
  },
  {
    subject: 'Математика',
    teacher: 'Задорожная Е.А.'
  },
  {
    subject: 'Математика',
    teacher: 'Меркулова М.И.'
  },
  {
    subject: 'Алгебра и начало математического анализа',
    teacher: 'Меркулова М.И.'
  },
  {
    subject: 'Геометрия',
    teacher: 'Меркулова М.И.'
  },
  {
    subject: 'Химия/Естественнонаучный практикум',
    teacher: 'Воротникова Е.Г.'
  },
  {
    subject: 'Химия',
    teacher: 'Воротникова Е.Г.'
  },
  {
    subject: 'Естествознание',
    teacher: 'Воротникова Е.Г.'
  },
  {
    subject: 'ОБЖ',
    teacher: 'Наливкина Е.В.'
  },
  {
    subject: 'Обществознание',
    teacher: 'Казанцев О.А.'
  },
  {
    subject: 'Экономика',
    teacher: 'Грешнова Е.Р.'
  },
  {
    subject: 'Психология взаимоотношений',
    teacher: 'Шевченко Л.М.'
  },
  {
    subject: 'География',
    teacher: 'Матющенко И.И.'
  },
  {
    subject: 'География',
    teacher: 'Михеенко К.А.'
  },
  {
    subject: 'Биология',
    teacher: 'Подгорная Я.Ю.'
  },
  {
    subject: 'Английский язык',
    teacher: 'Евченко Е.Ю. 402 / Иванова В.В. 404'
  },
  {
    subject: 'Английский язык',
    teacher: 'Хохлова Ж.Р. 403 / Евченко Е.Ю. 402'
  },
  {
    subject: 'Английский язык',
    teacher: 'Хохлова Ж.Р. 402 / Евченко Е.Ю. 404'
  },
  {
    subject: 'Английский язык',
    teacher: 'Хохлова Ж.Р. 402 / Иванова В.В. 404'
  },
  {
    subject: 'Английский язык',
    teacher: 'Хохлова Ж.Р. 403 / Иванова В.В. 404'
  },
  {
    subject: 'Испанский язык',
    teacher: 'Пушкарёва Я.А. 403 / Оленев Г.А. 405'
  },
  {
    subject: 'Медиатехнологии',
    teacher: 'Перепёлкин С.О. 312'
  },
  {
    subject: 'Разговоры о важном',
    teacher: 'Мирошник М.И.'
  },
  {
    subject: 'Разговоры о важном',
    teacher: 'Димидов Л.Г.'
  },
  {
    subject: 'Разговоры о важном',
    teacher: 'Карабасова О.А.'
  },
  {
    subject: 'Разговоры о важном',
    teacher: 'Воротникова Е.Г.'
  },
  {
    subject: 'Разговоры о важном',
    teacher: 'Меркулова М.И.'
  },
  {
    subject: 'Разговоры о важном',
    teacher: 'Ядак В.С.'
  }
];

const DEFAULT_SUBJECTS_TEACHERS_IDS: TSubjectsTeachers[] = DEFAULT_SUBJECTS_TEACHERS.map((row, index) => ({
  ...row,
  id: index + 1
}));

export const DEFAULT_GROUPS: string[] = ['10-Г КЛАСС / ауд. 307', '10-СЭ КЛАСС / ауд. 302', '10-Т КЛАСС / ауд. 306', '11-Г КЛАСС / ауд. 313', '11-СЭ КЛАСС / ауд. 308', '11-Т КЛАСС / ауд. 304'];

const DEFAULT_DAYS: string[] = ['ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА'];

export const EMPTY_GROUP_OBJECT: TGroupObject = DEFAULT_GROUPS.reduce((accProperty, property, index) => ({
  ...accProperty,
  [`group-${index}`]: {name: property}
}), {});

export const mockTimeTableResponse = DEFAULT_DAYS.map<TimeTableResponse[number]>((day) => {

  const list = DEFAULT_TIMES.reduce<TimeTableRow[]>((accTimes, time) => {
    const curRow = {
      groupObject:EMPTY_GROUP_OBJECT,
      day,
      time
    } as TimeTableRow;

    return [...accTimes, curRow];
  }, []);

  return {
    day,
    list
  };
});

export const mockSubjectsResponse = DEFAULT_SUBJECTS_TEACHERS_IDS;

