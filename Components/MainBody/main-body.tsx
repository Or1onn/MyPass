import "./main-body.css"
import PasswordItem from "~Components/PasswordItem/password-item";
import {useEffect, useState} from "react";
import {useMemo} from 'react';
import {masterPassword, storage} from "~Components/MainPopUp/main-popup";
// @ts-ignore
import crypto from "crypto";
// @ts-ignore
import {Buffer} from "buffer";


function MainBody(props) {
    const [passwords, setPasswords] = useState<string[]>([]);

    const decryptedPasswords = useMemo(
        () =>
            passwords.map((password) => {
                const parsedPassword = JSON.parse(password);
                return {
                    site: new URL(
                        Decrypt(parsedPassword.webSite, parsedPassword.salt, parsedPassword.iv)
                    ).hostname.replace("www.", ""),
                    login: Decrypt(parsedPassword.email, parsedPassword.salt, parsedPassword.iv),
                    password: Decrypt(parsedPassword.password, parsedPassword.salt, parsedPassword.iv),
                };
            }),
        [passwords]
    );

    useEffect(() => {
        async function loadPasswords() {
            const allInStorage = await storage.getAll();
            const values = Object.values(allInStorage);
            await setPasswords(values);
        }

        loadPasswords();
    }, []);

    function Decrypt(passwordData: any, salt: string, iv: string) {
        const _key = crypto.pbkdf2Sync(masterPassword, salt, 100, 32, "sha256");
        const _iv: Uint8Array = new Uint8Array(Buffer.from(iv, "hex"));

        const decipher = crypto.createDecipheriv('aes-256-cbc', _key, _iv);
        let decryptedData = decipher.update(passwordData, 'hex', 'utf8');
        decryptedData += decipher.final('utf8');

        return decryptedData;
    }

    return (
        <div className={"body-container"}>
            {decryptedPasswords.map((password) => (
                <PasswordItem
                    site={password.site}
                    login={password.login}
                    password={password.password}
                    onClick={props.onClick}
                />
            ))}
        </div>
    )
}

export default MainBody