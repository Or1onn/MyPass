import "./password-item.css"
import PasswordLink from "~Components/PasswordLink/password-link";
import PasswordUserName from "~Components/PasswordUserName/password-user-name";

function PasswordItem() {
    return (
        <div className={"password-container"}>
            <PasswordLink link={"github.com"}/>
            <PasswordUserName username={"salaxetdinovorxan@gmail.com"}/>
        </div>
    )
}

export default PasswordItem