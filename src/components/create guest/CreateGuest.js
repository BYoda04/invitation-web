import axios from 'axios';
import { React,useState } from 'react';
import { useForm } from 'react-hook-form';

const CreateGuest = () => {

    const [error,setError] = useState(false);
    const { register,handleSubmit } = useForm();

    const form = async data =>{
        if (!data.name.trim()) {
            return setError(true)
        } else if (!data.lastName.trim()) {
            return setError(true)
        };

        const body = {
            completName: `${data.name.trim()} ${data.lastName.trim()}`
        };

        try {
            const response = await axios.post('https://invitation-api-danna.herokuapp.com/api/v1/guests/create',body);
            localStorage.setItem("guestId",response.data.newGuest.id);
            setError(false);
            window.location.reload();
        } catch (err) {
            console.log(err.response.data);
        };
    }

    return (
        <div className='form-create-container'>
            <div className='indications-form'>
                <p>Por favor confirma tu asistencia ingresando tus datos</p>
            </div>
            <form onSubmit={ handleSubmit(form) }>
                <div className='div-form-container'>
                    <div>
                        <label htmlFor='name'>Nombre :</label>
                    </div>
                    <div>
                        <input type='text' id='name' {...register('name')} className={ error ? 'bad' : '' }/>
                    </div>
                </div>
                <div className='div-form-container'>
                    <div>
                        <label htmlFor='lastName'>Apellido :</label>
                    </div>
                    <div>
                        <input type='text' id='lastName' {...register('lastName')} className={ error ? 'bad' : '' }/>
                    </div>
                </div>
                <div className='button-container'>
                    <button>Registrarse</button>
                </div>
            </form>
            <div className='indications-form bottom'>
                <p><ion-icon name="heart-outline"></ion-icon><br/>Los invitamos a acompañarnos en este día tan especial.<br/>Tu presencia es muy importante</p>
            </div>
        </div>
    );
};

export default CreateGuest;