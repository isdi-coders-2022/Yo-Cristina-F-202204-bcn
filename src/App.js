import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import FishAquariumListPage from "./pages/FishAquariumListPage/FishAquariumListPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/aquariumfishlist" />} />
        <Route
          path="/aquariumfishlist"
          element={<Navigate to={<FishAquariumListPage />} />}
        />
      </Routes>
    </>
  );
}

export default App;
