import styled from "styled-components";

export const ArticleBoxContainer = styled.div`
    background-color: ${({theme}) => theme.colors.general.black[40]};
    padding: 1em;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
`
export const BoxContainer = styled.div<{ imageurl: string }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 30%;
  height: 500px;
  padding: 1em;
  background-image: ${({imageurl}) => `url(${imageurl})`};
  background-size: cover;
  background-position: center;
  cursor: pointer;
`
export const Heading = styled.h3`
  text-transform: uppercase;
  letter-spacing: 0.01em;
`

export const ArticleBoxContent = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* number of lines to show */
  -webkit-box-orient: vertical;
`