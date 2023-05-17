import "./password-input.css"
import React, {useState} from "react";

function PasswordInput(props) {
    const [passwordType, setInputType] = useState("password");
    const [passSrc, setImageSrc] = useState(require("/assets/eye.svg"));

    function showPass() {
        if (passwordType === "password") {
            setInputType("text");
            setImageSrc(require("/assets/eye-off.svg"));

        } else {
            setInputType("password");
            setImageSrc(require("/assets/eye.svg"));
        }
    }

    function valueChange(event: React.ChangeEvent<HTMLInputElement>) {
        props.onChange(event.target.value, 1);
    }

    return (
        <>
            <span className={"input-name"}>Password</span>
            <div className={"form-input-container"}>
                <div className={"input-hidden"}>
                    <input required={true} disabled={props.idReadOnly} readOnly={props.idReadOnly}
                           value={!props.idReadOnly ? null : props.password}
                           className={"password-input"} type={passwordType}
                           onChange={valueChange}/>
                </div>

                <img title={"Show"} className={"icon-container"} src={passSrc} alt={"show-pass"}
                     onClick={showPass}/>
                <img title={"Copy"} className={"icon-container"} src={require("/assets/copy.svg")} alt={"copy"}/>
            </div>
        </>
    )
}

export default PasswordInput