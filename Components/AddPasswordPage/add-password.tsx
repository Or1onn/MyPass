import './add-password.css';
import Input from "~Components/Input/input";
import PasswordInput from "~Components/Input/PasswordInput/password-input";
import WebSite from "~Components/Input/GoToWebSite/web-site";

function AddPasswordPage(props) {

    return (
        <div className={"password-all-info-container"}>
            <div className={"info-header"}>
                <img style={{marginRight: "20%"}} className={"info-page-icon"}
                     src={require('/assets/arrow-left.svg')} alt={"back"} onClick={() => props.onClick("MAIN_PAGE")}/>
                <div className={"password-logo-container"}>
                    <img className={"logo"}
                         src={require('/assets/image.svg')}
                         alt={"logo"}/>
                </div>
                <img style={{marginLeft: "20%"}} className={"info-page-icon"} src={require('/assets/plus.svg')}
                     alt={"edit"}/>
            </div>
            <div className={"main-all-info-container"}>
                <Input name={"Site Name"}/>
                <Input name={"Email"}/>
                <PasswordInput/>

                <WebSite name={"Web site"}/>
            </div>
        </div>
    )
}

export default AddPasswordPage
