import React, {useState} from "react";

const Searchbar = () => {
    const [search, setSearch] = useState("dito")

    const onChangeleHandler = (e) => {
        console.log("pokemon: ", e.target.value)
        setSearch(e.target.value)
    }

    const onButtonClickHandler = () =>{
        console.log("pokemon: ", search)
    }
    
    return(
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Buscar pokemon" onChange={onChangeleHandler} />
            </div>
            <div className="searchbar-btn">
                <button onClick={onButtonClickHandler}>Buscar</button>
            </div>
        </div>
    )
}

export default Searchbar;