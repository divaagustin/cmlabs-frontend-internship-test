import "./App.css";
import Navbar from "./MainComponent/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FoodsDetails from "./Pages/FoodsDetails";
import Ingredients from "./Pages/Ingredients";
import BreadCrumbs from "./MainComponent/BreadCrumbs";
import Meals from "./Pages/Meals";
import DashBoard from "./Pages/Body";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <BreadCrumbs />
      </div>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/Meals" element={<Meals />} />
        <Route path="/Meals/:foodId" element={<FoodsDetails />} />
        <Route path="/Meals/:foodId/:mealId" element={<Ingredients />} />
      </Routes>
    </>
  );
}

export default App;
