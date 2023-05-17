import './add-password.css';
import Input from "~Components/Input/input";
import PasswordInput from "~Components/Input/PasswordInput/password-input";
import WebSite from "~Components/Input/GoToWebSite/web-site";
import {useState} from "react";
import {storage} from "~Components/MainPopUp/main-popup";
import {masterPassword} from "~Components/MainPopUp/main-popup"
// @ts-ignore
import crypto from "crypto";

function AddPasswordPage(props) {
    const [passwordValue, setPasswordValue] = useState<string[]>([]);

    async function addPassword() {
        const algorithm = 'aes-256-cbc';
        let passwordData: string[] = [];
        const iv = crypto.randomBytes(16);
        const salt = crypto.randomBytes(16).toString("hex");

        for (let i = 0; i < 3; i++) {
            const key = crypto.pbkdf2Sync(masterPassword, salt, 100, 32, "sha256");
            const cipher = crypto.createCipheriv(algorithm, key, iv);
            let encryptedData = cipher.update(passwordValue[i], "utf8", "hex");
            encryptedData += cipher.final("hex");

            passwordData.push(encryptedData);
        }

        await storage.set(passwordValue[2], {
            email: passwordData[0],
            password: passwordData[1],
            webSite: passwordData[2],
            salt: salt,
            iv: iv.toString('hex')
        });
    }

    const onTextChange = (value: string, index: number) => {
        passwordValue[index] = value;
    }

    return (
        <div className={"password-all-info-container"}>
            <form onSubmit={addPassword}>
                <div className={"info-header"}>
                    <img style={{marginRight: "20%"}} className={"info-page-icon"}
                        // @ts-ignore
                         src={require('/assets/arrow-left.svg')} alt={"back"}
                         onClick={() => props.onClick("MAIN_PAGE")}/>
                    <div className={"password-logo-container"}>
                        <img className={"logo"}
                            // @ts-ignore
                             src={require('/assets/image.svg')}
                             alt={"logo"}/>
                    </div>
                    <input className={"submit-btn"} type={"submit"} value={""}/>
                </div>
                <div className={"main-all-info-container"}>
                    <Input idReadOnly={false} name={"Email"} onChange={onTextChange}/>
                    <PasswordInput idReadOnly={false} onChange={onTextChange}/>
                    <WebSite idReadOnly={false} name={"Web site"} onChange={onTextChange}/>
                </div>
            </form>
        </div>
    )
}

export default AddPasswordPage
