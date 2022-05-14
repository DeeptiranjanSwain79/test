import React, { useState } from 'react';
import Movieitem from './Movieitem'

function Movie(props) {
    const [articles, setArticles] = useState([]);

    const updateMovie = async () => {
        const url = "https://api.tvmaze.com/search/shows?q=all";
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        setArticles(parsedData)
    }
    updateMovie();
    return (
        <div className='container'>
            <div className="row my-3">
                {articles.map((element) => {
                    return <div className="col-md-4" key={element.show.url}>
                        <Movieitem image={element.show.image.medium} name={element.show.name} summary={element.show.summary} url={element.show.url} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default Movie
