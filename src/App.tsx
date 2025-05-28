import { Route, Routes, Navigate } from "react-router-dom";
// Update the import paths below to the actual locations of your Register and Login components
import { Login } from "./assets/pages/login/index";
import { Register } from "./assets/pages/register/index";


//import { Layout } from "./components/Layout";
//import { FC, PropsWithChildren } from "react";

import { NotFound } from "./assets/pages/404";
import type { FC, PropsWithChildren } from "react";
import PetForm from "./assets/pages/PetForm";
import PetHistory from "./assets/pages/PetHistory";
import BookAppointment from "./assets/pages/BookAppointment";
import DashboardVet from "./assets/pages/DashboardVet/DashboardVet";
// Update this path if the filename or extension is different, e.g., './assets/pages/DashboardVet.tsx' or './assets/pages/dashboardVet'

// Update the import path below to the actual location of your Components component
// Update the import path below to the actual location and filename of your Components component

const App = () => {
  //localStorage.setItem("user", JSON.stringify({ name: "Dexi" }));

  return (
    // <Layout>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/pet-form" element={<PetForm />} />
      <Route path="/pet-history" element={<PetHistory />} />
      <Route path="/book-appointment" element={<BookAppointment />} />
      <Route path="/dashboard-vet" element={<DashboardVet />} />
      <Route
        path="/dashboard-vet"
        element={
          <ProtecterRouter>
            <DashboardVet />
          </ProtecterRouter>
        }
      />

      <Route path="*" element={<NotFound />} />

      {/* Add more routes here if needed */}
    </Routes>
    //</Layout>
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
