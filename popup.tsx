import { useState } from "react"
import './popup.css';
import Login from "~Components/Login/login";
import MainPopup from "~Components/MainPopUp/main-popup";

function IndexPopup() {
    const [isLogin, setLoginStatus] = useState(true);

    const handleChildClick = (childValue) => {
        setLoginStatus(childValue)
    };

  return (
    <div className={"main-container"}>
        {isLogin ? (
            <MainPopup/>
        ) : (
            <Login text={"Login"} onClick={handleChildClick}/>
        )}

    </div>

    // chrome.tabs.create({
    //     url: './Tabs/password-manager.html'
    // })
  )
}

export default IndexPopup
