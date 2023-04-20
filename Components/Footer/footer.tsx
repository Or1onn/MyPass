import "./footer.css"

function Footer(props) {
    return (
        <div className={"footer-container"}>
            <img className={"plus"} src={require("/assets/plus.svg")} alt={"add password"} onClick={() => props.onClick("ADD_PASSWORD")}/>
        </div>
    )
}

export default Footer