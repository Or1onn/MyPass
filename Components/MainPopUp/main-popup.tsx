import Search from "~Components/Search/search";
import MainBody from "~Components/MainBody/main-body";
import "./main-popup.css"
import Footer from "~Components/Footer/footer";
import PasswordAllInfo from "~Components/PasswordAllInfo/password-all-info";
import {useState} from "react";
import AddPasswordPage from "~Components/AddPasswordPage/add-password";

function MainPopup() {
    const [page, setPage] = useState("MAIN_PAGE");
    const [passwordValues, setValues] = useState<string[]>([]);
    const openAllInfoPage = (childValues: string[]) => {
        setValues(childValues);
        setPage(childValues[0]);
    };


    const changePage = (childValues: string) => {
        setPage(childValues);
    };

    return (
        <div className={"main-popup-container"}>

            {page === "MAIN_PAGE" ? (
                <div>
                    <div className={"header"}>
                        <Search/>
                    </div>
                    <MainBody onClick={openAllInfoPage}/>
                    <Footer onClick={changePage}/>
                </div>
            ) : page === "ADD_PASSWORD" ? (
                <AddPasswordPage/>
            ) : <PasswordAllInfo logo={passwordValues[0]} site={passwordValues[1]} login={passwordValues[2]} onClick={changePage}/>}

        </div>
    )
}

export default MainPopup