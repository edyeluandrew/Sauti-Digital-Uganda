import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Learn from "./pages/Learn";
import SpotIt from "./pages/SpotIt";
import Voice from "./pages/Voice";
import Brief from "./pages/Brief";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/spot-it" element={<SpotIt />} />
      <Route path="/voice" element={<Voice />} />
      <Route path="/brief" element={<Brief />} />
    </Routes>
  );
}
