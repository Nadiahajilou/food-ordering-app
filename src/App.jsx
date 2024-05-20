import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Success from "./pages/Success";
import Error from "./pages/Error";
import DetailPage from "./pages/DetailPage"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home-page" />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/home-page/:id" element={<DetailPage />} />
        <Route path="/success" element={<Success />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
