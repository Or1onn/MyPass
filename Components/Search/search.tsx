import "./search.css"
import React from "react";

function Search() {
    return (
        <>
        <div className={"search-container"}>
            <input className="search-input" type="text" name="search" placeholder="Search..."/>

                <a href="#" className="search-btn">
                    <img src={require('/assets/search.svg')} alt={"search"}/>
                </a>

        </div>
            {/*<img className={"plus-icon"} src={require('/assets/plus.svg')}/>*/}

        </>

    )
}

export default Search