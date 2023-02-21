import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../page/HomePage";
// import SignInPageComponent from "../component/SigninPageComponent";
import MainPage from "../page/MainPage";
import ReportPage from "../page/ReportPage";
import SettingPage from "../page/SettingPage";
import SignUpPage from "../page/SignUpPage";
import SignUpInfoPage from "../page/SignUpInfoPage"
import SignInPage from "../page/SignInPage";
import CalendarPage from "../page/CalendarPage";

const MainRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signin" element={<SignInPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/signupinfo" element={<SignUpInfoPage/>}/>
        <Route path="/main" element={<MainPage/>}/>
        <Route path="/report" element={<ReportPage/>}/>
        <Route path="/calendar" element={<CalendarPage/>}/>
        <Route path="/setting" element={<SettingPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default MainRoute;