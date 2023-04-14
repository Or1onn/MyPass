import "./search.css"

function Search() {
    return (
        <div className={"search-container"}>
            <input className="search-input" type="text" name="search" placeholder="Search..."/>
                <a href="#" className="search-btn">
                    {/*<i resource={"/assets/search.svg"}></i>*/}
                    <img className={"search-icon"} src={require('/assets/search.svg')} alt={"search"}/>
                </a>
        </div>
    )
}

export default Search