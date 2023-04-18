import Search from "~Components/Search/search";
import MainBody from "~Components/MainBody/main-body";
import "./main-popup.css"
import Footer from "~Components/Footer/footer";

function MainPopup() {
    return (
        <div className={"main-popup-container"}>
            <div className={"header"}>
                <Search/>
            </div>

            <MainBody/>

            <Footer/>
        </div>
    )
}

export default MainPopup