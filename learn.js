import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleNextClick() {
        if (index<11) {setIndex(index + 1)}
        else setIndex(index);
    }
    function handlePreviousClick() {
        if (index>0) {setIndex(index - 1)}
        else setIndex(index);
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
    return (
        <div>
            <div>
                <button onClick={handleNextClick}>Next</button>
                <button onClick={handlePreviousClick}>Previous</button>
            </div>

            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
        </div>
    );
}


