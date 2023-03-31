import { Route, Routes } from "react-router-dom";
import NotFound from "./components/notFound/NotFound";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Login />} exact></Route>
      <Route path={"/signup"} element={<Register />} exact></Route>
      <Route path={"/dashboard"} element={<Dashboard />} exact></Route>
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
}

export default App;
