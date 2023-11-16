import styled from "styled-components";
import {articles} from "../../api/articles";

export const ArticlesPreview = () => {

    return (
        <ArticlesPreviewContainer>
            {articles.map(({id, title, content, imgUrl}) => {
                return (
                    <ArticleBox key={id} imageurl={imgUrl}>
                        <h3>{title}</h3>
                        <ArticleBoxContent>{content}</ArticleBoxContent>
                        <button>read more</button>
                    </ArticleBox>
                )
            })}
        </ArticlesPreviewContainer>
    )
}

const ArticlesPreviewContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10rem;
  width: 100%;
  
`
const ArticleBox = styled.div<{imageurl: string}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.5em;
  border: 0.1em solid black;
  width: 50%;
  height: 30%;
  padding: 1em;
  background-image: ${({imageurl}) => `url(${imageurl})`};
  background-size: cover;
  background-position: center;
`

const ArticleBoxContent = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* number of lines to show */
  -webkit-box-orient: vertical;
`