import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "../layout/Menu";
import Home from "../pages/Home";
import Login from "../pages/Login";

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
