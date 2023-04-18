import "./password-logo.css"

function PasswordLogo(props) {
    return (
        <div className={"password-logo-container"}>
            <img src={props.logo} alt={"logo"}/>
        </div>
    )
}

export default PasswordLogo