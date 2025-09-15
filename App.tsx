import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import InstagramPage from "./components/instagram-page";

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/instagram" element={<InstagramPage />} />
        </Routes>
      </BrowserRouter>
  );
}
