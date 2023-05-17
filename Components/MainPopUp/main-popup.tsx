import Search from "~Components/Search/search";
import MainBody from "~Components/MainBody/main-body";
import "./main-popup.css"
import Footer from "~Components/Footer/footer";
import PasswordAllInfo from "~Components/PasswordAllInfo/password-all-info";
import {useEffect, useState} from "react";
import AddPasswordPage from "~Components/AddPasswordPage/add-password";
import {Storage} from "@plasmohq/storage"
// @ts-ignore
import crypto from 'crypto';
// @ts-ignore
import {Buffer} from 'buffer';

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
                <AddPasswordPage onClick={changePage}/>
            ) : <PasswordAllInfo site={passwordValues[0]} login={passwordValues[1]} password={passwordValues[2]} onClick={changePage}/>}

        </div>
    )
}

export const masterPassword: string = prompt("Enter your master password: ");
export const storage: Storage = new Storage();
export default MainPopup