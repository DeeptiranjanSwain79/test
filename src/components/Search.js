import React, { useState } from 'react';
import Movieitem from './Movieitem'

function Search() {
    const [articles, setArticles] = useState([]);
    const searchMovie = async (e) => {
        let searchText = e.target.value.toLowerCase();
        
        const url = "https://api.tvmaze.com/search/shows?q=all";
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData);
        let allMovie = [];
        articles.map((element) => {
            allMovie.push(element.show.name.toLowerCase())
            for (const iterator of allMovie) {
                if (searchText === iterator) {
                    return <div className="col-md-4" key={element.show.url}>
                        <Movieitem image={element.show.image.medium} name={element.show.name} summary={element.show.summary} url={element.show.url} />
                    </div>
                }
            }
        })



    }
    return (
        <>
            <div className="col-lg-12 text-center mt-5">
                <h1 className='text-white'>Search Here</h1>
            </div>
            <div className="col-md-4 offset-md-4 mt-5 pt-3">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Search ......" id='search' onInput={searchMovie} />
                    <div className="input-group-append">
                        <span className="input-group-text"><i className="fa fa-search fs-2"></i></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search
