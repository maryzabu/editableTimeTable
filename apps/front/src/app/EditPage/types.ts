import {CreateTtDataDto} from "@utils";

export type TSelectedItem = Omit<CreateTtDataDto, 'subjectId'>;

export type TTtDataPatchMutationFnProps = CreateTtDataDto & {
  id: number;
}
