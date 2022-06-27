import React from 'react';

export default function card(props){
    return(
        <div className='card'>
            <img src={props.imageUrl}  className="card--image" />
            <div className='details'>
            <span className="material-icons md">pin_drop</span>
            <span className='icon'>{props.location}</span>
            <span className="a"><a href={props.googleMapsUrl}>View on Google Maps</a></span>
            <h1 className='title'>{props.title}</h1>
            <p className='date'>{props.startDate}-{props.endDate}</p>
            <p className='desc'>{props.description}</p>
            

            </div>

        </div>

    );

}