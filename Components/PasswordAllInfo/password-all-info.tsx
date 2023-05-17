import './password-all-info.css';
import React, {useState} from 'react';
import Input from "~Components/Input/input";
import PasswordInput from "~Components/Input/PasswordInput/password-input";
import WebSite from "~Components/Input/GoToWebSite/web-site";
import {storage} from "~Components/MainPopUp/main-popup";

function PasswordAllInfo(props) {
    const [readOnly, setReadOnly] = useState(true);
    const [passwordValue, setPasswordValue] = useState<string[]>([]);

    // const editPassword = async () => {
    //     if (readOnly === true) {
    //         setReadOnly(!readOnly);
    //     }
    //     else {
    //         await storage.set(props.login, {
    //             email: passwordValue[0],
    //             password: passwordValue[1],
    //             webSite: passwordValue[2],
    //         });
    //     }
    // }

    const onTextChange = (value: string, index: number) => {
        passwordValue[index] = value;
    }

    return (
        <div className={"password-all-info-container"}>
            <div className={"info-header"}>
                <img style={{marginLeft: "10px"}} className={"info-page-icon"}
                     src={require('/assets/arrow-left.svg')} alt={"back"} onClick={() => props.onClick("MAIN_PAGE")}/>
                <div className={"logo-and-name"}>
                    <div className={"password-logo-container"}>
                        <img className={"logo"}
                             src={`https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${props.site}&size=32`}
                             alt={"logo"}/>
                    </div>
                    <span className={"site-text"}>{props.site}</span>
                </div>

                {/*<img style={{marginRight: "10px"}} className={"info-page-icon"} src={require('/assets/pencil.svg')}*/}
                {/*     alt={"edit"}/>*/}
            </div>
            <div className={"main-all-info-container"}>
                <Input idReadOnly={readOnly} name={"Email"}
                       data={passwordValue[0] === undefined ? props.login : passwordValue[0]} onChange={onTextChange}/>
                <PasswordInput idReadOnly={readOnly}
                               password={passwordValue[1] === undefined ? props.password : passwordValue[1]}
                               onChange={onTextChange}/>

                <WebSite idReadOnly={readOnly} name={"Web site"}
                         link={passwordValue[2] === undefined ? props.site : passwordValue[2]} onChange={onTextChange}/>
            </div>
        </div>
    )
}

export default PasswordAllInfo
