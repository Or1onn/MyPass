import "./password-item.css"
import PasswordLogo from "~Components/PasswordItem/PasswordLogo/password-logo";
import PasswordSite from "~Components/PasswordItem/PasswordSite/password-site";
import PasswordLogin from "~Components/PasswordItem/PasswordLogin/password-login";

function PasswordItem(props) {
    return (
        <div className={"password-container"}>
            <PasswordLogo logo={props.logo}/>
            <div className={"password-info-container"}>
                <PasswordSite site={props.site}/>
                <PasswordLogin login={props.login}/>
            </div>
        </div>
    )
}

export default PasswordItem