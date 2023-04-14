import "./password-link.css"

function PasswordLink(props) {
    return (
        <div className={"password-link-container"}>
            <a href={"https://" + props.link} className={"password-link"}
               target="_blank" rel="noopener noreferrer">{props.link}</a>
        </div>
    )
}

export default PasswordLink