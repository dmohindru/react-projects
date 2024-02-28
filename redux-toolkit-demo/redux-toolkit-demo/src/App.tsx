import { Routes, Route } from "react-router-dom";
import CarItemEdit from "./features/cars/CarItemEdit";
import HomePage from "./components/HomePage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/car">
        <Route path="edit/:carId" element={<CarItemEdit />} />
      </Route>
    </Routes>
  );
}

export default App;
