import React, { useState } from 'react';
import CreateGuest from '../components/create guest/CreateGuest';
import GuestSite from '../components/guest site/GuestSite';

const Home = () => {

    const [guestId] = useState(localStorage.getItem("guestId"));

    return (
        <div className='home z-index-100'>
            { guestId ? <GuestSite /> : <CreateGuest /> }
        </div>
    );
};

export default Home;