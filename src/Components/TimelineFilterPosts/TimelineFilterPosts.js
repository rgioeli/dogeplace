import styled from 'styled-components'

function TimelineFilterPosts() {
    
    const handleOnMouseOver = (e) => {
        console.log(e.target.className = 'big')
    }

    return (
        <StyledFilterPosts>
            <p id='all'>All</p>
            <p>|</p>
            <p id='friendsposts'>Friend's Posts</p>
            <p>|</p>
            <p id='trending'>Trending</p>
        </StyledFilterPosts>
    )
}

const StyledFilterPosts = styled.div`
    display: flex;
    overflow:hidden;
    padding-right:10px;
    p {
        padding:5px;
        color:#d9bd62;
    }

    #all, #friendsposts, #trending {
        font-size:16px;
        transition-property: color;
        transition-duration: 0.25s;
        &:hover {
            color:#fff;
            cursor:pointer;
        }
    }
`

export default TimelineFilterPosts

