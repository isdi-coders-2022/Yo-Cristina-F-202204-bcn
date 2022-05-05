import { Link, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import FishAquariumListPage from "./pages/FishAquariumListPage/FishAquariumListPage";
import FishTankListPage from "./pages/FishTankListPage/FishTankListPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<FishAquariumListPage />} />
        <Route path="aquarium" element={<FishAquariumListPage />} />
        <Route path="fishtank" element={<FishTankListPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
