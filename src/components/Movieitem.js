import React from 'react'

function Movieitem(props) {
    const { name, summary, url, image } = props;
    function removeTags(str) {
        if ((str===null) || (str===''))
            return false;
        else
            str = str.toString();
        return str.replace( /(<([^>]+)>)/ig, '');
    }
    const Summary = removeTags(summary);
    return (
        <>
            <div className="card my-3 mx-3">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text" id='summary'>{Summary}</p>
                    <a href={url} className="btn btn-primary">Read More</a>
                </div>
            </div>
        </>
    )
}

export default Movieitem
