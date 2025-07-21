import { Route, Routes } from "react-router";
import DefaultLayout from "./components/layout/DefaultLayout";
import Money from "./pages/Money";

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route index element={<Money />} />
      </Route>
    </Routes>
  );
}

export default App;
