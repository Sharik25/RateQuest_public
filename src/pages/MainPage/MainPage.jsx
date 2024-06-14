import React, { useEffect } from "react";
import AutomationPanel from "../../components/AutomationPanel/AutomationPanel";
import SectionGraphs from "../../components/SectionGraphs/SectionGraphs";
import SectionTotal from "../../components/SectionTotal/SectionTotal";
import SectionTable from "../../components/SectionTable/SectionTable";
import { signOut } from "aws-amplify/auth";
import { generateClient } from "aws-amplify/data";
import { fetchDatafromApi } from "../../utils/fetchData";

const client = generateClient();

const MainPage = () => {

  useEffect(() => {
    fetchDatafromApi()
  },[])

  return (
    <div>
      <SectionTotal />
      <button onClick={signOut}>sign out</button>
      <AutomationPanel />
      <SectionGraphs />
      <SectionTotal />
      <SectionTable />
    </div>
  );
};

export default MainPage;
