import "./input.css"

function Input(props) {

    function valueChange(event: React.ChangeEvent<HTMLInputElement>){
        props.onChange(event.target.value, 0);
    }
    return (
        <>
            <span className={"input-name"}>{props.name}</span>
            <div className={"form-input-container"}>
                <div className={"input-hidden"}>
                    <input required={true} disabled={props.idReadOnly} readOnly={props.idReadOnly}
                           className={"form-input"} value={props.data} onChange={valueChange}/>
                </div>

                <img className={"icon-container"} title={"Copy"} src={require("/assets/copy.svg")} alt={"copy"}/>
            </div>
        </>
    )
}

export default Input