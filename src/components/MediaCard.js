import React from 'react';

function MediaCard(props){
    return (
    <div>
        <h1>{props.title}</h1>
        <body>
            {props.body}
        </body>
        <img src={props.src}/>
    </div>
    );
}

export default MediaCard;