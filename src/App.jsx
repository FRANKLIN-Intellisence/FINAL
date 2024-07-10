import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landingpage.jsx";
import DescriptionPage from './pages/DescriptionPage.jsx'
import CartPage from './pages/CartPage.jsx'
import CheckoutPage from './pages/CheckoutPage.jsx'

const App = () => {
  return (
    <div className="pt-[7rem]">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={< LandingPage/>}/>
          <Route exact path="/Description" element={<DescriptionPage />}/>
          <Route exact path="/CartPage" element={<CartPage />} />
          <Route exact path="/CheckoutPage" element={<CheckoutPage/ >} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
