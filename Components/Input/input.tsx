import "./input.css"

function Input(props) {
    return (
        <>
            <span className={"input-name"}>{props.name}</span>
            <div className={"form-input-container"}>
                <div className={"input-hidden"}>
                    <input disabled={true} readOnly={true} className={"form-input"} value={props.data}/>
                </div>

                <img className={"icon-container"} title={"Copy"} src={require("/assets/copy.svg")} alt={"copy"}/>
            </div>
        </>
    )
}

export default Input