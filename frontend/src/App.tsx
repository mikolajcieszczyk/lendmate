import React from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import OnfidoComponent from "./components/Onfido/Onfido";
import BaseLayout from "./components/BaseLayout";
import NoPageFound from "./components/NoPageFound";
import LandingPage from "./components/pages/LandingPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import List from "./components/pages/List";

function App(): JSX.Element {
  const location = useLocation();

  return (
    <BaseLayout currentLocation={location.pathname}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/loans-list" element={<List />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </BaseLayout>
  );
}

export default App;
