import styled from 'styled-components'
import { useState } from 'react'
import Textarea from 'react-expanding-textarea'

//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImage, faLaugh, faFileVideo } from '@fortawesome/free-solid-svg-icons'

//firestore
import { firestore } from '../../Firebase/firebase_util'


const TimelineNewPostDropdown = ({ currentUser }) => {
    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const postComment = async () => {
            const timestamp = Date.now(); // This would be the timestamp you want to format

            const newTimestamp = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)

            try {
                await firestore.collection('posts').doc().set({
                    uid: currentUser.uid,
                    post: text,
                    date: newTimestamp
                })

                setText('')
            }
            catch(err) {
                console.log(err)
            }
        }

        postComment()
    }

    return (
        <form onSubmit={handleSubmit}>
            <StyledDropdown>
                <Textarea value={text} onChange={handleChange} name='post' maxLength={175} className='textarea' name="text" placeholder="very think, much write!" />
                <div className="media">
                    <div className='icons'>
                        <FontAwesomeIcon className='icon' icon={faFileImage}/>
                        <FontAwesomeIcon className='icon' icon={faFileVideo}/>
                        <FontAwesomeIcon className='icon' icon={faLaugh}/>
                    </div>
                    <button type='submit'>Post</button>
                </div>
            </StyledDropdown>
        </form>
    )
}

const StyledDropdown = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:20px;
    border:1px solid #fff;

    .textarea {
        padding:10px;
        resize: none;
        width:calc(100% - 20px);
    }

    .media {
        width:100%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:10px 0 0 0;

        div {
            width:100px;
            display:flex;
            justify-content:space-between;
            align-items:center;
            .icon {
                color:#fff;
                font-size:20px;

                :hover {
                    cursor:pointer;
                }
            }
        }
        
        button {
            padding:10px 30px;
            background-color:#d9bd62;
            border-radius:5px;
            border:none;
            font-size:16px;

            :hover {
                background-color:#a7914b;
                cursor:pointer;
                color:#fff;
            }
        }
    }
`

export default TimelineNewPostDropdown