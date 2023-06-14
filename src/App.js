import "./css/sb-admin-2.css";
import DashBoard from "./DashBoard";
import "bootstrap/dist/js/bootstrap";

import Users from "./Users";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Products";
import CreateUser from "./CreateUser";
import CreateProduct from "./CreateProduct";
import Portal from "./Portal";
import Login from "./Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/portal" element={<Portal />}>
          <Route path="dashboard" element={<DashBoard />}></Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="create-user" element={<CreateUser />}></Route>
          <Route path="products" element={<Products />}></Route>
          <Route path="create-product" element={<CreateProduct />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
