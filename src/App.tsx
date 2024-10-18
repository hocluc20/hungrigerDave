import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./views/Login.tsx";
import Home from "./views/Home.tsx";
import Impressum from "./views/Impressum.tsx";
import Layout from "./views/Layout.tsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    {<Route index element={<Login/>}/>}
                    <Route path="/main" element={<Home/>}/>
                    <Route path="/impressum" element={<Impressum/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
