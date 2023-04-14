import "./main-popup.css"
import Search from "~Components/Search/search";

function MainPopup() {
    return (
        <div className={"main-container"}>
            <div className={"header"}>
                <Search/>
            </div>
        </div>
    )
}

export default MainPopup