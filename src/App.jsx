import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>

            <Route path="/" element={<HomePage />} />
            <Route path="/" element={<ChiSiamo />} />
            <Route path="/" element={<Prodotti />} />

          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
