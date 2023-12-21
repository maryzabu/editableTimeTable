import {CreateTtDataDto} from "@utils";

export type TSelectedItem = Omit<CreateTtDataDto, 'subjectId'>;
