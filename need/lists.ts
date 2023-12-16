const DEFAULT_TIMES: string[] = [
    '08:00',
    '09:00',

    ////
];

type TSubjectsTeachers = {
    subject: string;
    teacher: string;
};

const DEFAULT_SUBJECTS_TEACHERS: TSubjectsTeachers[] = [
    {
        subject: 'Предмет', //История
        teacher: 'Иванов И.А.' // Иванов Иван Александрович
    },
    {
        subject: '',
        teacher: ''
    }
];

const DEFAULT_CLASSES: string[] = ['10г',];

const DEFAULT_DAYS: string[] = ['Пн'];