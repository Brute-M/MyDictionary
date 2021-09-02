import React, { useState } from 'react'
import "./input.css";
import MeaningCard from './MeaningCard';

export default function Input() {

    const [query, setQuery] = useState("")
    const [data, setData] = useState(null)

    let unique = 0;

    const onChangeHandler = (e) => {
        setQuery(e.target.value)
        if (e.target.value.trim() === "")
            setData(null) 
    }

    const querySubmitHandler = async (e) => {
        e.preventDefault();
        console.log("Form submited");
        if (query.trim() !== "") {
            setData(null);
            document.getElementById("searchIcon").innerHTML = `<div class="spinner-border spinner-border-sm" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>`;
            let data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`);
            let parsedData = await data.json();
            if(parsedData[0] === undefined){
                setData([parsedData])
            } else{
                setData(parsedData);
            }
            document.getElementById("searchIcon").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" /></svg>';
        } else {
            alert("Can not be empty")
        }
    }

    return (
        <>
            <form onSubmit={querySubmitHandler}>
                <div className="inputMainContainer input-group mt-4 ">
                    <input type="text" placeholder="Search word here..." className="form-control text-center" value={query} onChange={onChangeHandler} />
                    <span className="input-group-text" id="searchIcon" onClick={querySubmitHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" /></svg>
                    </span>
                </div>
            </form>

            {data && data.map((e) => {
                return <MeaningCard key={unique++} data={e}/>
            })}

        </>
    )
}
