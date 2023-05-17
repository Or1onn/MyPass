import "./password-item.css"
import PasswordLogo from "~Components/PasswordItem/PasswordLogo/password-logo";
import PasswordSite from "~Components/PasswordItem/PasswordSite/password-site";
import PasswordLogin from "~Components/PasswordItem/PasswordLogin/password-login";
function PasswordItem(props) {
    function allInfoOpen() {
        props.onClick([props.site, props.login, props.password]);
    }

    return (
        <div className={"password-container"} onClick={allInfoOpen}>
            <PasswordLogo site={props.site}/>
            <div className={"password-info-container"}>
                <PasswordSite site={props.site}/>
                <PasswordLogin login={props.login}/>
            </div>
        </div>
    )
}

export default PasswordItem