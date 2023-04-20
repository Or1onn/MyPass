import "./password-input.css"

function Input() {
    return (
        <>
            <span className={"input-name"}>Password</span>
            <div className={"form-input-container"}>
                <div className={"input-hidden"}>
                    <input disabled={true} readOnly={true} style={{letterSpacing: "10px"}} className={"password-input"} type={"password"}/>
                </div>

                <img title={"Show"} className={"icon-container"} src={require("/assets/eye.svg")} alt={"show-pass"}/>
                <img title={"Copy"} className={"icon-container"} src={require("/assets/copy.svg")} alt={"copy"}/>
            </div>
        </>
    )
}

export default Input