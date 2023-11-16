import styled from "styled-components";
import {articles} from "../../api/articles";
import {helperTexts} from "../../api/helperTexts";
import {ArticleBox} from "../ArticleBox/ArticleBox";
import {Heading} from "../Heading/Heading";

export const ArticlesPreview = () => {

    return (
        <ArticlesPreviewContainer>
            <BoxHeader>
                <Heading size={2}>{helperTexts.articles.title}</Heading>
                <div>{helperTexts.articles.showAll}</div>
            </BoxHeader>
            <BoxContent>
                {articles.map(({id, title, content, imgUrl}) =>
                    <ArticleBox key={id} title={title} content={content} image={imgUrl}/>
                )
                }
            </BoxContent>
        </ArticlesPreviewContainer>
    )
}

const ArticlesPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
`


const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
const BoxContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 2rem;
`