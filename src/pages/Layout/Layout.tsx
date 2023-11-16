import {NavigationBar} from "../../components/NavigationBar/NavigationBar";
import styled from "styled-components";
import {Hero} from "./Hero/Hero";

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
                <div>
                    <h1>hastags</h1>
                </div>
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
  height: 100vh;
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