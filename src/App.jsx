import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import ChiSiamo from "./pages/ChiSiamo"
import Prodotti from "./pages/Prodotti"


function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>

            <Route path="/" element={<HomePage />} />
            <Route path="/ChiSiamo" element={<ChiSiamo />} />
            <Route path="/Prodotti" element={<Prodotti />} />

          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
