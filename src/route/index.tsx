import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../page/HomePage";



const MainRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/" element={<></>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default MainRoute;