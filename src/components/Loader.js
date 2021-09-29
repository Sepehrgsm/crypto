import React from 'react';

// Gif
import ghostGif from "../gif/Ghost.gif"

const Loader = () => {
    return (
        <div>
            <img src={ghostGif} alt="Loading" />
            <h1>Loading ...</h1>
        </div>
    );
};

export default Loader;