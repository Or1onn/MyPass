import "./password-user-name.css"

function PasswordUserName(props) {
    return (
        <div className={"password-user-name-container"}>
            <span className={"user-name"}>{props.username}</span>
        </div>
    )
}

export default PasswordUserName