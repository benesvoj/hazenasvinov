import {ArticlesPreview} from "../../../components/ArticlesPreview/ArticlesPreview";
import {helperTexts} from "../../../api/helperTexts";
import {
    ArrowDown,
    DiscoverMoreButton, DiscoverMoreButtonLink,
    GloryContainer,
    Heading,
    HeroContainer,
    HeroContentContainer,
    SearchContainer,
    SubHeading
} from "./Hero.styles";


export const Hero = () => {
    return (
        <HeroContainer>
            <HeroContentContainer>
                <GloryContainer>
                    <SubHeading>{helperTexts.subtitle}</SubHeading>
                    <Heading>
                        {helperTexts.title}
                    </Heading>
                    {helperTexts.hero}
                    <SearchContainer>
                        <input type={'text'} placeholder={'Vyhledej něco o TJ Sokol Svinov'}/>
                        <button>Vyhledat</button>
                    </SearchContainer>
                    <DiscoverMoreButton>
                        <DiscoverMoreButtonLink to={'/'}>{helperTexts.discoverMore}</DiscoverMoreButtonLink>
                        <ArrowDown>&darr;</ArrowDown>
                    </DiscoverMoreButton>
                </GloryContainer>
            </HeroContentContainer>
        </HeroContainer>
    )
}