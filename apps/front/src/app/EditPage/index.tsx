import React, {useState} from "react";
import {Table} from "antd";

import {useQuery} from "react-query";
import {GROUP_URL, SUBJECTS_URL, TT_DATA_URL} from "../constants";
import {TGroupObject, TimeTableResponse, TSubjectsTeachers} from "@utils";
import {getColumns} from "./getColumns";
import {TSelectedItem} from "./types";


export const EditPage: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<TSelectedItem | undefined>();
  const [openChooser, setOpenChooser] = useState(false);

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

  if (!subjects || !timeTableResponse || !groups) {
    return <h5>Нет данных</h5>;
  }


  return timeTableResponse.map(({day, list}, index) => <Table
    columns={getColumns({
      day,
      list,
      groupObject: groups,
      subjects, openChooser, setOpenChooser, setSelectedItem: setSelectedGroup, selectedItem: selectedGroup
    })}
    dataSource={list}
    key={`table-${index}`} pagination={false} bordered/>);
}
