import Home from "./pages/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import CoinDetails from "./components/CoinDetails";
import Performance from "./components/Performance";
import Eth from "./pages/Eth";
function App() {
  return ( 
  <BrowserRouter className = "bg-default-gray">
  <Routes>
    <Route path="/" element={<Home/>} />
    {/* <Route path="/coin/:id" element={<CoinDetails/>} /> */}
    <Route path="/performance" element={<Performance/>} />
    <Route path="/etherium" element={<Eth/>} />
  </Routes>
  </BrowserRouter>
  )
}
export default App;
