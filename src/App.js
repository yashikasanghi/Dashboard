import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/aboutus";
import Home from "./pages/home";
import { EditFormProvider } from "./context/editFormContext";
import { ContactProvider } from "./context/contactContext";
import { StatementProvider } from "./context/statementContext";

function App() {
  return (
    <EditFormProvider>
      <ContactProvider>
        <StatementProvider>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/orders"></Route>
              <Route path="/team-members"></Route>
              <Route path="/partners"></Route>
              <Route path="/product-listings"></Route>
              <Route path="/awards-honours"></Route>
              <Route path="/about-us" element={<AboutUs />}></Route>
              <Route path="/payment-info"></Route>
            </Route>
          </Routes>
        </StatementProvider>
      </ContactProvider>
    </EditFormProvider>
  );
}

export default App;
