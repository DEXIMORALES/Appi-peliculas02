import { Route, Routes, Navigate } from "react-router-dom";
// Update the import paths below to the actual locations of your Register and Login components
import { Login } from "./assets/pages/login/index";
import { Register } from "./assets/pages/register/index";

import { Layout } from "./components/Layout";
//import { FC, PropsWithChildren } from "react";

import { NotFound } from "./assets/pages/404";
import { Dashboard } from "./assets/pages";
import type { FC, PropsWithChildren } from "react";
import PetForm from "./assets/pages/PetForm";
import PetHistory from "./assets/pages/PetHistory";
// Update the import path below to the actual location of your Components component
// Update the import path below to the actual location and filename of your Components component

const App = () => {
  //localStorage.setItem("user", JSON.stringify({ name: "Dexi" }));

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pet-form" element={<PetForm />} />
        <Route path="/pet-history" element={<PetHistory />} />
        <Route
          path="/dashboard"
          element={
            <ProtecterRouter>
              <Dashboard />
            </ProtecterRouter>
          }
        />

        <Route path="*" element={<NotFound />} />

        {/* Add more routes here if needed */}
      </Routes>
    </Layout>
  );
};
const ProtecterRouter: FC<PropsWithChildren> = ({ children }) => {
  const userJson = localStorage.getItem("user");

  if (userJson === null) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};

export default App;
