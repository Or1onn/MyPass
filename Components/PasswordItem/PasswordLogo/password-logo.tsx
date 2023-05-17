import "./password-logo.css"

function PasswordLogo(props) {
    return (
        <div className={"password-logo-container"}>
            <img src={`https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${props.site}&size=32`} alt={"logo"}/>
        </div>
    )
}

export default PasswordLogo