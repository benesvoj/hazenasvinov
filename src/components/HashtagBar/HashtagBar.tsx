import styled from "styled-components";

export const HashtagBar = () => {
    return (
        <HashtagBarContainer>
            <h1>hastags</h1>
        </HashtagBarContainer>
    )
}

const HashtagBarContainer = styled.div`
  width: 100%;
  height: 10vh;
  border-top: 10px solid #000;
`