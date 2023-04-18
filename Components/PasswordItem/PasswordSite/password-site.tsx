import "./password-site.css"

function PasswordSite(props) {
    return (
        <div className={"password-site-container"}>
            <div className={"site-text-container"}>
                <span className={"site"}>{props.site}</span>
            </div>
        </div>
    )
}

export default PasswordSite