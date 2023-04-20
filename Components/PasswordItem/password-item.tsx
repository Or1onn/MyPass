import "./password-item.css"
import PasswordLogo from "~Components/PasswordItem/PasswordLogo/password-logo";
import PasswordSite from "~Components/PasswordItem/PasswordSite/password-site";
import PasswordLogin from "~Components/PasswordItem/PasswordLogin/password-login";
function PasswordItem(props) {
    function allInfoOpen() {
        props.onClick([props.logo, props.site, props.login]);
    }

    return (
        <div className={"password-container"} onClick={allInfoOpen}>
            <PasswordLogo logo={props.logo}/>
            <div className={"password-info-container"}>
                <PasswordSite site={props.site}/>
                <PasswordLogin login={props.login}/>
            </div>
        </div>
    )
}

export default PasswordItem