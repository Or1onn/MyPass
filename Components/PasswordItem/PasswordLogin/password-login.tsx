import "./password-login-container.css"

function PasswordLogin(props) {
    return (
        <div className={"password-login-container"}>
            <div className={"login-text-container"}>
                <span className={"login"}>{props.login}</span>
            </div>
        </div>
    )
}

export default PasswordLogin