import { Routes, Route } from "react-router-dom";
import CarItemEdit from "./features/cars/CarItemEdit";
import BikeItemEdit from "./features/bikes/BikeItemEdit";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/car">
        <Route path="edit/:carId" element={<CarItemEdit />} />
      </Route>
      <Route path="/bike">
        <Route path="edit/:bikeId" element={<BikeItemEdit />} />
      </Route>
    </Routes>
  );
}

export default App;
