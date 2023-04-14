import Search from "~Components/Search/search";
import MainBody from "~Components/MainBody/main-body";
import "./main-popup.css"

function MainPopup() {
    return (
        <div className={"main-container"}>
            <div className={"header"}>
                <Search/>
            </div>

            <MainBody/>
        </div>
    )
}

export default MainPopup