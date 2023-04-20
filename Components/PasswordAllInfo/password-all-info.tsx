import './password-all-info.css';
import Input from "~Components/Input/input";
import PasswordInput from "~Components/Input/PasswordInput/password-input";
import WebSite from "~Components/Input/GoToWebSite/web-site";

function PasswordAllInfo(props) {

    return (
        <div className={"password-all-info-container"}>
            <div className={"info-header"}>
                <img style={{marginRight: "20%"}} className={"info-page-icon"}
                     src={require('/assets/arrow-left.svg')} alt={"back"} onClick={() => props.onClick("MAIN_PAGE")}/>
                <div className={"password-logo-container"}>
                    <img className={"logo"}
                         src={"https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://www." + props.site + "&size=32"}
                         alt={"logo"}/>
                </div>
                <img style={{marginLeft: "20%"}} className={"info-page-icon"} src={require('/assets/pencil.svg')}
                     alt={"edit"}/>
            </div>
            <div className={"main-all-info-container"}>
                <Input name={"Site Name"} data={props.site}/>
                <Input name={"Email"} data={props.login}/>
                <PasswordInput/>

                <WebSite name={"Web site"} link={props.site}/>
            </div>
        </div>
    )
}

export default PasswordAllInfo
