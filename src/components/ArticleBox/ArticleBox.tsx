import {ArticleBoxContainer, ArticleBoxContent, BoxContainer, Heading} from "./ArticleBox.styles";

type ArticleBoxProps = {
    title: string;
    content: string;
    image: string;
}

export const ArticleBox = (props: ArticleBoxProps) => {
    const {title, content, image} = props

    return(
        <BoxContainer imageurl={image}>
            <ArticleBoxContainer>
                <Heading>{title}</Heading>
                <ArticleBoxContent>{content}</ArticleBoxContent>
            </ArticleBoxContainer>
        </BoxContainer>
    )
}