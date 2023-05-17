import React from "react";

function WebSite(props) {
    function valueChange(event: React.ChangeEvent<HTMLInputElement>) {
        props.onChange(event.target.value, 2);
    }

    return (
        <>
            <span className={"input-name"}>{props.name}</span>
            <div className={"form-input-container"}>
                <div className={"input-hidden"}>
                    <input required={true} disabled={props.idReadOnly} readOnly={props.idReadOnly}
                           className={"form-input"}
                           value={props.link !== undefined ? "https://" + props.link : undefined}
                           onChange={valueChange}/>
                </div>

                <img title={"Open webSite"} className={"icon-container"} src={require("/assets/go-to-web-site.svg")}
                     alt={"copy"}
                     onClick={() => window.open("https://" + props.link, "_blank")}/>
            </div>
        </>
    )
}

export default WebSite