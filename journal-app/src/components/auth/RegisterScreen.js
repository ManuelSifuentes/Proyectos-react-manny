import React from 'react';
import { Link } from 'react-router-dom'; //para regresar al login
import { useDispatch, useSelector} from 'react-redux';
import validator from 'validator'; //libreria para validar el correo

import { useForm } from '../../hooks/useForm'; //capturar los datos del formulario
import { setError, removeError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch(); //es lo primero a hacer para mostrar los errores
    const { msgError } = useSelector( state => state.ui );
    //solo se obtiene el msj de error //retornas todo el state, y accedes a la parte de ui
    
    const [ formValues, handleInputChange ] = useForm({ //se inicializa para no tener que ingresar, pero debe de estar vacio
        name: 'Hernando',
        email: 'nando@gmail.com',
        password: '123456',
        password2: '123456',
    });

    const { name ,email ,password ,password2 } = formValues; //estos se extraen y son los value de los input

    const handleRegister = (e) => {
        e.preventDefault();

        if ( isFormValid() ) { //se llama la funcion, si devuelve true puede ejecutar el codigo
            dispatch( startRegisterWithEmailPasswordName(email, password, name) );
        } //se importa de actions/auth

    }

    const isFormValid = () => {
        
        if ( name.trim().length === 0 ) {
            dispatch( setError('Name is required') )
                    //accion a usar //msj a mandar
            return false;
        } else if ( !validator.isEmail( email ) ) {
            dispatch( setError('Email is not valid') )
            return false;
        } else if ( password !== password2 || password.length < 5 ) {
            dispatch( setError('Password should be at least 6 characters and match each other') )
            return false
        }
        
        dispatch( removeError() ); //quitar mensaje de error
       return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={ handleRegister }>

                { //para poder usar js
                    //el msj solo se mostrara si el msj de error es diferente de null
                    msgError && //mensaje condicional de error
                    (
                        <div className="auth__alert-error">
                            { msgError }
                        </div>
                    )
                }


                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={ password }
                    onChange={ handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={ password2 }
                    onChange={ handleInputChange }
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>

               

                <Link 
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>

            </form>
        </>
    )
}
