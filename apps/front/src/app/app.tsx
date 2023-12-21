import React from "react";
import {EditPage} from "./EditPage";
import {QueryClient, QueryClientProvider} from "react-query";
const queryClient = new QueryClient()
export const App: React.FC = () => {
  return (<QueryClientProvider client={queryClient}>
    <EditPage/>
  </QueryClientProvider>);
}
