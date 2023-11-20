import styled from 'styled-components'

type FlowBarProps = {
  items: string[]
}

export const FlowBar = (props: FlowBarProps) => {
  return (
    <HashtagBarContainer>
      {props.items.map((item, index) => (
        <Hashtag key={index}>#{item}</Hashtag>
      ))}
    </HashtagBarContainer>
  )
}

const HashtagBarContainer = styled.div`
  width: 100%;
  height: 10vh;
  border-top: 10px solid ${({theme}) => theme.colors.general.yellow};
  border-bottom: 10px solid ${({theme}) => theme.colors.general.yellow};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  overflow: hidden;
  margin: 2rem 0;
`

const Hashtag = styled.div`
  font-size: 2rem;
  font-weight: ${({theme}) => theme.fontWeights.bold};
  color: ${({theme}) => theme.colors.general.yellow};
  text-transform: uppercase;
`
