import React from "react";
import "./index.css";
import SideBar from "./components/SideBar/__docs__/Example";
import DataGrid from "./components/MesDataGrid/__docs__/Example"
import { Stack, TitleBar, TopBar } from "./components";
import Example from "./components/Dialogue/__docs__/Example";

interface Props { }

const App: React.FC<Props> = () => {
  return (
    <div>
      <TitleBar
        version={"MES x.0"}
        notification
        info
        settings
      // moduleOnclick={handleModuleClick}
      />
      <TopBar
        open={false}
      // leftComponents={ }
      // RightComponents={

      // }
      />
      <div style={{ marginTop: "10vh", width: "100vw", display: 'flex', flexDirection: "row", alignItems: 'center', justifyContent: 'center', alignContent: 'center', height: '90vh' }}>
        <SideBar />
        <Stack>
          {/* Render Other components here */}
          <h2>MesDataGrid Component</h2>
          <DataGrid />
          {/* Dialogue Component */}
          <h2>Dialogue Component</h2>
          <Example />
        </Stack>
      </div>
    </div>
  );
};

export default App;
