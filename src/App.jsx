import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>

          <Route path="/" element={<HomePage />} />
         
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
