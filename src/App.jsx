import "./app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Topbar, SideBar } from "./components";
import {
  Home,
  UserList,
  User,
  NewUser,
  ProductList,
  Product,
  NewProduct,
} from "./pages";

const App = () => {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/newProduct" element={<NewProduct />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
