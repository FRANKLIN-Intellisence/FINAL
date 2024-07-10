import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Landingpage.jsx";
import Desc from './pages/DescriptionPage.jsx'
import Cart from './pages/CartPage.jsx'
import Checkout from './pages/CheckoutPage.jsx'

const App = () => {
  return (
    <div className="pt-[7rem]">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={< Home/>}/>
          <Route exact path="/Description" element={<Desc />}/>
          <Route exact path="/CartPage" element={<Cart />} />
          <Route exact path="/CheckoutPage" element={<Checkout/ >} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
