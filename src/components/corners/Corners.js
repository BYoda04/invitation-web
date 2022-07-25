import React from 'react';
import corner from '../../img/corner.png';

const Corners = () => {
    return (
        <div>
            <div className='corner top-left'>
                <img src={corner} alt='corner-img' />
            </div>
            <div className='corner top-rigth'>
                <img src={corner} alt='corner-img' />
            </div>
            <div className='corner bottom-left'>
                <img src={corner} alt='corner-img' />
            </div>
            <div className='corner bottom-rigth'>
                <img src={corner} alt='corner-img' />
            </div>       
        </div>
    );
};

export default Corners;