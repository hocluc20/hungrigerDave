import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./views/Login.tsx";
import Home from "./views/Home.tsx";

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/main" element={<Home/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
