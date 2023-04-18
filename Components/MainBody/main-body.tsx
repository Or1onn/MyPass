import "./main-body.css"
import PasswordItem from "~Components/PasswordItem/password-item";

function MainBody() {
    return (
        <div className={"body-container"}>
            <PasswordItem
                logo={"https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://www.linkedin.com&size=32"}
                login={"salahetdinovorxan@gmail.com"}
                site={"linkedin.az"}/>
        </div>
    )
}

export default MainBody