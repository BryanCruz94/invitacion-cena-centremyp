import { Routes, Route } from "react-router-dom";
import InvitacionPage from "./pages/Invitacion/InvitacionPage.jsx";
import ConfirmacionPage from "./pages/Confirmacion/ConfirmacionPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<InvitacionPage />} />
      <Route path="/confirmacion" element={<ConfirmacionPage />} />
    </Routes>
  );
}

export default App;
