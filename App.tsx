import { LatestMovements } from "./components/LatestMovements/LatestMovements";
import { AppStatusBar } from "./components/StatusBar/StatusBar";
import { ViewData } from "./components/ViewData/ViewData";

export default function App() {
  return (
    <>
      <AppStatusBar user_name="Rodrigo Luíz"/>
      <ViewData saldo={15320} gastos={527}/>
      <LatestMovements />
    </>
  );
}

