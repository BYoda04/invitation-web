import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const GuestSite = () => {

    const id = localStorage.getItem('guestId');
    const [data,setData] = useState([]);
    const [error,setError] = useState(false);
    const { register,handleSubmit } = useForm();

    useEffect(()=>{
        const getData = async ()=>{
            try {
                const dat = await axios.get(`https://invitation-api-danna.herokuapp.com/api/v1/guests/invitation/${id}`);
                setData(dat.data.guest);
            } catch (error) {
                console.log(error.response.data);
            };
        };

        getData()
    },[id]);

    const form = async dat=>{
        if (!dat.name.trim()) {
            return setError(true)
        };
        console.log(data?.id);
        await axios.post(`https://invitation-api-danna.herokuapp.com/api/v1/escorts/create/${data?.id}`,dat);
        setError(false);
        window.location.reload();
    };

    const confirmate = async id=>{
        await axios.patch(`https://invitation-api-danna.herokuapp.com/api/v1/guests/update/${id}`);
        setError(false);
        window.location.reload();
    };

    const declenead = async id=>{
        await axios.delete(`https://invitation-api-danna.herokuapp.com/api/v1/guests/delete/${id}`);
        setError(false);
        window.location.reload();
    };

    const confirmateEscort = async id=>{
        await axios.patch(`https://invitation-api-danna.herokuapp.com/api/v1/escorts/update/${id}`);
        setError(false);
        window.location.reload();
    };

    const decleneadEscort = async id=>{
        await axios.delete(`https://invitation-api-danna.herokuapp.com/api/v1/escorts/delete/${id}`);
        setError(false);
        window.location.reload();
    };

    return (
        <div className='guest'>
            <div className='guest-container'>
                <p>{data?.completName}</p>  
                <div className='confirmation-container'>
                    <p>Confirmacion : { data?.confirmation ? 'Asistire' : 'No asistire' }</p>    
                    <div className='confirmation-buttons'>
                        <div className='confirmate'>
                            <button type='button' onClick={()=>confirmate(data?.id)}>
                                <ion-icon name="checkmark-outline"></ion-icon>
                            </button>
                        </div>
                        <div className='declenead'>
                            <button type='button' onClick={()=>declenead(data?.id)}>
                                <ion-icon name="close-outline"></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <form className='escort' onSubmit={ handleSubmit(form) }>
                    <div className='div-form-container'>
                        <div>
                            <label htmlFor='escort'>Acompañante :</label>
                        </div>
                        <div>
                            <input type='text' id='escort' {...register('name')} className={ error ? 'bad' : '' }/>
                        </div>
                    </div>
                    <div className='button-container'>
                        <button>
                            <ion-icon name="add-outline"></ion-icon>
                        </button>
                    </div>
                </form>
            </div>
            <div className='escorts-list'>
                <div className='escort-title'>
                    <p>Acompañantes :</p>
                </div>
                { data?.escorts?.map(escort=>(
                    <div className='escorts-list-container' key={escort?.id}>
                        <p>{ escort?.name }</p>
                        <div className='confirmation-container'>
                            <p>Confirmacion : { escort?.confirmation ? 'Asistire' : 'No asistire' }</p>
                            <div className='confirmation-buttons'>
                                <div className='confirmate'>
                                    <button type='button' onClick={()=>confirmateEscort(escort?.id)}>
                                        <ion-icon name="checkmark-outline"></ion-icon>
                                    </button>
                                </div>
                                <div className='declenead'>
                                    <button type='button' onClick={()=>decleneadEscort(escort?.id)}>
                                        <ion-icon name="close-outline"></ion-icon>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )) }
            </div>
        </div>
    );
};

export default GuestSite;