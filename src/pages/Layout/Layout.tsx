import {NavigationBar} from '../../components/NavigationBar/NavigationBar'
import styled from 'styled-components'
import {Hero} from './Hero/Hero'
import {FlowBar} from '../../components/FlowBar/FlowBar'
import {ArticlesPreview} from '../../components/ArticlesPreview/ArticlesPreview'
import {hashtags} from '../../api/hashtags'
import {sponzors} from '../../api/sponzors'
import {Heading, HeadingV2} from '../../components/Heading/Heading'

export const Layout = () => {
  return (
    <LayoutContainer>
      <header>
        <NavigationBar />
      </header>
      <ContentContainer>
        <HeroSection>
          <Hero />
        </HeroSection>
        <FlowBar items={hashtags} />
        <ArticlesPreview />
        <FlowBar items={sponzors} />
        <div>
          <Heading size={2} color={'secondary'}>
            tables
          </Heading>
        </div>
        <div>
          <HeadingV2 size={2}>images</HeadingV2>
        </div>
      </ContentContainer>
      <div>
        <Heading size={2}>footer</Heading>
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
