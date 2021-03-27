import styled from 'styled-components'
import dogeIcon from '../../Images/doge-icon.png'
import { Link } from 'react-router-dom'
import { signInWithGoogle } from '../../Firebase/firebase_util'
import { useState } from 'react'
import { auth } from '../../Firebase/firebase_util'

const Login = () => {

    const [signInObj, setSignInObj] = useState({
        email: '',
        password: ''
    })

    const [errorCode, setErrorCode] = useState({
        code: '',
        message: ''
    })

    const handleFormSubmit = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(signInObj.email, signInObj.password)
        .catch(function(error) {
            // Handle Errors here.
            setErrorCode({
                ...errorCode,
                code: error.code,
                message: error.message
            })
        });

        setSignInObj({
            email: '',
            password: ''
        })
    }

    const handleSignIn = (e) => {
        const { name, value } = e.target
        setSignInObj({
            ...signInObj,
            [name]: value
        })

        
    }


    return (
        <SignUpStyled>
            <img src={ dogeIcon } alt="doge dog thumbnail"/>
            <h1>DogePlace.</h1>
            <h4>very community. much social.</h4>

            {errorCode.message ? <p className='error-code'>{errorCode.message}</p> : null}

            <form action="" onSubmit={ handleFormSubmit }>
                <div className="field">
                    <label className='label'>Email</label>
                    <input type="email" onChange={handleSignIn} name="email" value={signInObj.email}/>
                </div>
                <div className="field">
                    <label className='label'>Password</label>
                    <input type="password" onChange={handleSignIn} name="password" value={signInObj.password}/>
                </div>
                <div className="field signup-options">
                        <button onClick={handleSignIn}>SIGN IN</button>
                        <button className='google-sign-in-button' onClick={ e => {e.preventDefault(); signInWithGoogle()} }>SIGN IN WITH GOOGLE</button>
                </div>
            </form>
            <p>Don't have an account? <span className='gold-color'><LinkStyled to='/signup'>Sign Up</LinkStyled></span></p>
        </SignUpStyled>
    )
}

const LinkStyled = styled(Link)`
    color: #B9A135;
    cursor:pointer;
    text-decoration:none;
`

const SignUpStyled = styled.div`
    width:70vw;
    margin:auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    font-family: 'Doge Sans', sans-serif;

    .error-code {
        background-color:#B9A135;
        padding:10px;
        position:relative;
        top:10px;
        font-size:16px;
        max-width:50vw;
        box-sizing:border-box;
    }

    img {
        border-radius:100%;
        width:200px;
    }

    h1 {
        padding-top:10px;
        color:#fff;
    }

    h4 {
        color:#fff;
    }

    p {
        font-size:20px;
        color:#fff;
        padding:20px 0;
    }

    span {
        color: #B9A135;
        cursor:pointer;
    }

    .field {
        display:flex;
        flex-direction:column;
        padding:10px;
        width:50vw;
        font-size:20px;

        label {
            color:#fff;
            padding:5px 0;
        }

        input {
            padding:10px;
            height:25px;
            font-size:20px;
            cursor:pointer;
        }

        button {
            padding:15px;
            background-color:#B9A135;
            border:none;
            font-size:20px;
            color:#fff;
            cursor:pointer;
        }
    }

    .signup-options {

        display:flex;
        justify-content:space-between;
        flex-direction:row;

        button {
            width:49%;
        }

        .google-sign-in-button {
            background-color:#4c8bf5;
        }
    }
`

export default Login