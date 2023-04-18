import "./footer.css"

function Footer() {
    return (
        <div className={"footer-container"}>
            <img className={"plus"} src={require("/assets/plus.svg")} alt={"add password"}/>
        </div>
    )
}

export default Footer