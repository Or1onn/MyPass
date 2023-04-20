function WebSite(props) {
    return (
        <>
            <span className={"input-name"}>{props.name}</span>
            <div className={"form-input-container"}>
                <div className={"input-hidden"}>
                    <input disabled={true} readOnly={true} className={"form-input"} value={"https://" + props.link}/>
                </div>

                <img title={"Open webSite"} className={"icon-container"} src={require("/assets/go-to-web-site.svg")}
                     alt={"copy"}
                     onClick={() => window.open("https://" + props.link, "_blank")}/>
            </div>
        </>
    )
}

export default WebSite