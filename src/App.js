import Layout from "./components/shared/Layout";
import Products from "./components/Products";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="product" element={<Products />} />
        </Route>
        <Route path="login" element={<div>This is login page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
