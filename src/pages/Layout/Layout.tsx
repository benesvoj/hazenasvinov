import {NavigationBar} from "../../components/NavigationBar/NavigationBar";
import styled from "styled-components";
import {Hero} from "./Hero/Hero";
import {FlowBar} from "../../components/FlowBar/FlowBar";
import {ArticlesPreview} from "../../components/ArticlesPreview/ArticlesPreview";
import {hashtags} from "../../api/hashtags";
import {sponzors} from "../../api/sponzors";

export const Layout = () => {
    return (
        <LayoutContainer>
            <header>
                <NavigationBar/>
            </header>
            <ContentContainer>
                <HeroSection>
                    <Hero/>
                </HeroSection>
                <FlowBar items={hashtags} />
                <ArticlesPreview />
                <FlowBar items={sponzors} />
                <div>
                    <h1>tables</h1>
                </div>
                <div>
                    images
                </div>
            </ContentContainer>
            <div>
                <h1>footer</h1>
            </div>
        </LayoutContainer>
    )
}

const HeroSection = styled.section`
  position: relative;
  width: 100%;
`

const LayoutContainer = styled.div`
  margin: 0 auto;
  width: 100%;
`
const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
`