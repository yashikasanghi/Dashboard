import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import AboutUs from "./pages/aboutus";
import Home from "./pages/home";
import { EditFormProvider } from "./context/editFormContext";

function App() {
 
  return (
   <EditFormProvider>
      <Routes>
        <Route  path="/" element={<Home/>} >
          <Route path="/about-us" element={<AboutUs/>}></Route>
        </Route>       
      </Routes>
      </EditFormProvider>
  );
}

export default App;
