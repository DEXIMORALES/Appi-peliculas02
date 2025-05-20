import { Route, Routes, Navigate } from "react-router-dom";
// Update the import paths below to the actual locations of your Register and Login components
// Update the import paths below to the actual locations of your Register and Login components
// import { Register } from "./pages/Register";
import Register from "./pages/Register";
import Login from "./pages/Login";

import { Layout } from "./components/Layout";
//import { FC, PropsWithChildren } from "react";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Add more routes here if needed */}
      </Routes>
    </Layout>
  );
};

export default App;
