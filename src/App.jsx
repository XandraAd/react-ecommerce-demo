import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import ProductPage from "./pages/ProductPage";
import Navigation from "./components/Navigation";
function App() {
  return (
    <>
      <ChakraProvider>
          <header>
            <Navigation />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product-page" element={<ProductPage />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
        
      </ChakraProvider>
    </>
  );
}

export default App;
