import FixedBottomNavigation  from "../component/BottomNavigation";
import SignInPageComponent from "../component/SigninPageComponent";
import MyResponsivePieCanvas from "../component/MainPageComponent"
import {data} from "../component/piedata"
let style = {
  display:"flex",
  background:"white",
  justifyContent: "center",
  alignItems: "center",
}
const HomePage = () => {
  return (
    <>
    <div style={style}>
      <MyResponsivePieCanvas data={data}/>
    </div>
    <div>
      <SignInPageComponent/>
    </div>
    </>
  )
}

export default HomePage;