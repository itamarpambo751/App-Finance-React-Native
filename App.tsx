import { AppStatusBar } from "./components/StatusBar/StatusBar";
import { ViewData } from "./components/ViewData/ViewData";

export default function App() {
  return (
    <>
      <AppStatusBar />
      <ViewData saldo={15320} gastos={527}/>
    </>
  );
}

