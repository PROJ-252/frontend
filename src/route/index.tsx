import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../page/HomePage";
import SignInPageComponent from "../component/SigninPageComponent";
import MainPage from "../page/MainPage";

const MainRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/mainpage" element={<MainPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default MainRoute;