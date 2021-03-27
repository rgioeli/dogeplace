import styled from 'styled-components'
import dogeIcon from '../../Images/doge-icon.png'
import { ContainerStyled } from '../../CSS/GlobalStyled'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { auth, createUser } from '../../Firebase/firebase_util'

const SignUp = (user) => {

    const [signUpObj, setSignUpObj] = useState({
        email: '',
        username: '',
        password: '',
        vpassword: ''
    })

    const [errorCode, setErrorCode] = useState('')

    const handleInput = (e) => {
        const { name, value } = e.target
        
        setSignUpObj({
            ...signUpObj, [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const test = async () => {
            const newCreatedUser = await auth.createUserWithEmailAndPassword(signUpObj.email, signUpObj.password)
            .catch(function(error) {
                setErrorCode(error.message)

                return;
            })
            //get uid from new user
            const getUid = newCreatedUser.user.uid

            // create a user doc for new user
            await createUser(getUid, signUpObj.email, signUpObj.username)

            setSignUpObj({
                email: '',
                username: '',
                password: '',
                vpassword: ''
            })
        }

        test();
    }

    return (
        <SignUpStyled>
            <form action="" onSubmit={handleSubmit}>
                <ContainerStyled className='container'>
                    <img src={ dogeIcon } alt="doge dog thumbnail"/>
                    <h1>DogePlace.</h1>
                    <h4>very community. much social.</h4>

                    {errorCode ? <p className='error-code'>{errorCode}</p> : null}

                    <div className="field">
                        <label className='label'>Email</label>
                        <input onChange={handleInput} value={signUpObj.email} type="email" name="email"/>
                    </div>

                    <div className="field">
                        <label className='label'>Username</label>
                        <input onChange={handleInput} value={signUpObj.username} type="text" name="username"/>
                    </div>

                    <div className="field">
                        <label className='label'>Password</label>
                        <input onChange={handleInput} value={signUpObj.password} type="password" name="password"/>
                    </div>

                    <div className="field">
                        <label className='label'>Verify Password</label>
                        <input onChange={handleInput} value={signUpObj.vpassword} type="password" name="vpassword"/>
                    </div>

                    <div className="field">
                        <button>SIGN UP</button>
                    </div>
                    <p>Already have an account? <span className='gold-color'><LinkStyled to='/'>Sign In</LinkStyled></span></p>
                </ContainerStyled>
            </form>
        </SignUpStyled>
    )
}

const LinkStyled = styled(Link)`
    color: #B9A135;
    cursor:pointer;
    text-decoration:none;
`

const SignUpStyled = styled.div`
    width:90vw;
    margin:auto;
    font-family: 'Doge Sans', sans-serif;

    .container {
        display:flex;
        flex-direction:column;

        img {
            border-radius:100%;
            width:200px;
        }

        .error-code {
            background-color:#B9A135;
            padding:10px;
            position:relative;
            top:10px;
            font-size:16px;
            max-width:50vw;
            box-sizing:border-box;
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

        .field {
            display:flex;
            flex-direction:column;
            padding:10px;
            width:50vw;
            font-size:20px;

            label {
                color:#fff;
                padding: 5px 0;
            }

            input {
                padding:10px;
                height:25px;
                font-size:20px;
                cursor:pointer;
                font-family: 'Doge Sans', sans-serif;                                 
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
    }
`

export default SignUp