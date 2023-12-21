import React, {useState} from "react";
import {Table} from "antd";

import {useMutation, useQuery, useQueryClient} from "react-query";
import {GROUP_URL, SUBJECTS_URL, TT_DATA_URL} from "../constants";
import {CreateTtDataDto, TGroupObject, TimeTableResponse, TSubjectsTeachers} from "@utils";
import {getColumns} from "./getColumns";
import {TSelectedItem, TTtDataPatchMutationFnProps} from "./types";


export const EditPage: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<TSelectedItem | undefined>();
  const [openChooser, setOpenChooser] = useState(false);
  const queryClient = useQueryClient();
  const {data: subjects} = useQuery({
    queryKey: [SUBJECTS_URL],
    queryFn: () => fetch(SUBJECTS_URL).then((res) => (res?.json() as unknown as TSubjectsTeachers[]))
  });

  const {data: timeTableResponse} = useQuery({
    queryKey: [TT_DATA_URL],
    queryFn: () => fetch(TT_DATA_URL).then((res) => (res?.json() as unknown as TimeTableResponse))
  })

  const {data: groups} = useQuery({
    queryKey: [GROUP_URL],
    queryFn: () => fetch(GROUP_URL).then((res) => (res?.json() as unknown as TGroupObject))
  });

  const onSuccessOption = {
    onSuccess: () => queryClient.invalidateQueries({
      queryKey: [TT_DATA_URL],
      exact: true,
    })
  };

  const {mutate: addTtData} = useMutation((values: CreateTtDataDto) => fetch(TT_DATA_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),

  }), onSuccessOption);

  const {mutate: patchTtData} = useMutation((
    {
      id,
      ...values
    }: TTtDataPatchMutationFnProps) => fetch(`${TT_DATA_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  }), onSuccessOption);

  const {mutate: onDeleteTtData} = useMutation((id: number) => fetch(`${TT_DATA_URL}/${id}`, {
    method: "DELETE",
  }), onSuccessOption);

  const onSetItemSubject = (values: CreateTtDataDto, id?: number) => {
    if (id) {
      return patchTtData({...values, id});
    }

    addTtData(values);
  };

  if (!subjects || !timeTableResponse || !groups) {
    return <h5>Нет данных</h5>;
  }

  // subjects.filter((subject)=>!timeTableResponse.some())


  return timeTableResponse.map(({day, list}, index) => <Table
    columns={getColumns({
      day,
      list,
      groupObject: groups,
      subjects,
      openChooser,
      setOpenChooser,
      setSelectedItem,
      selectedItem,
      onSetItemSubject,
      onDeleteTtData
    })}
    dataSource={list}
    key={`table-${index}`} pagination={false} bordered/>);
}
