import './login.css';
function Login(props) {
    function logIn() {
        document.querySelector(".container").classList.toggle("active");
        props.onClick(true);
    }
    return (
        <div className={"input-container"}>

                <input placeholder={"Login"} className={"input"}/>

                <input style={{marginTop: "15px"}} placeholder={"Password"} className={"input"}/>

                <div className={"container"}>
                    <button className={"btn"} onClick={logIn}>
                        <span className={"text"}>Submit</span>
                    </button>
                </div>
        </div>
    )
}

export default Login
