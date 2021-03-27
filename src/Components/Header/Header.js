import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import dogeIcon from '../../Images/doge-icon.png'
import { ContainerStyled } from '../../CSS/GlobalStyled'
import { auth } from '../../Firebase/firebase_util'
import { useEffect } from 'react'

const Header = ({ currentUser }) => {

    return (
        <HeaderStyled>
            <ContainerStyled className='container'>
                <FontAwesomeIcon id='bars' size='2x' icon={ faBars } />
                <div className="show-login-frame">
                    <img src={ dogeIcon } />
                    <p>{currentUser ? currentUser.uid : null}</p>
                    { currentUser ? <button onClick={ () => auth.signOut() }>Logout</button> : null}
                </div>
            </ContainerStyled>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.div`
    width:100%;
    height:70px;

    .container {
        #bars {
            color:#fff;
        }

        .show-login-frame {
            display:flex;
            height:100%;
            justify-content:center;
            align-items:center;

            img {
                border-radius:100%;
                height:75%;
            }

            p {
                color:#fff;
                padding-left:10px;
            }
        }
    }
`

export default Header