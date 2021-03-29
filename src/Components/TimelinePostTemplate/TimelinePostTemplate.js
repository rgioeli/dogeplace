import styled from 'styled-components'

const TimelinePostTemplate = ({ data }) => {
    return (
        <StyledPost>
            <p>{data.uid}</p>
            <h5>This is the persons name</h5>
            <p>{data.post}</p>
            <p>Time: {data.date}</p>
        </StyledPost>
    )
}

const StyledPost = styled.div`
    width:100%;
    min-height:250px;
    border:1px solid #fff;
`

export default TimelinePostTemplate