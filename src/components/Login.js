import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useForm } from '../hooks/useForm';

export const Login = () => {

    const { loginWithRedirect } = useAuth0();

    const [ {email, password}, handleInputChange ] = useForm({});

    const handleLogin = (e) => {
        e.preventDefault();
        console.log( "form");
        console.log( email, password);
        // login redirect
        loginWithRedirect();
        // reset form
        // resetForm();
    }


    return (
        <>
            <form 
                autoComplete="off"
                className="mt-5" 
                onSubmit={ handleLogin }
            >
                <div className="form-group">
                    <input 
                        type="email" 
                        name="email"
                        className="form-control" 
                        aria-describedby="emailHelp"
                        placeholder="Email"
                        onChange={ handleInputChange }
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <input 
                        type="password" 
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={ handleInputChange }    
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </>
    )
}
