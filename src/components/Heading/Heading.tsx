import {Nullish} from '../../types/Nullish'
import styled, {css, useTheme} from 'styled-components'

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

export type HeadingColor =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'danger'
  | 'success'
  | 'link'
  | 'white'

export interface HeadingProps {
  size: HeadingLevel
  isSingleLine?: boolean
  alternative?: true
  headingLevel?: HeadingLevel
  children?: Nullish | string
  color?: HeadingColor
}

export const Heading = (props: HeadingProps) => {
  return (
    <HeadingContainer size={props.size} color={props.color}>
      {props.children}
    </HeadingContainer>
  )
}

export const HeadingV2 = (props: HeadingProps) => {
  const theme = useTheme()

  return (
    <div
      css={css`
        color: ${theme.colors.text[props.color ?? 'primary']};
        font-family: ${theme.fonts.heading};
        font-size: ${theme.fontSizes.heading[props.size]};
        line-height: ${theme.lineHeights.heading[props.size]};
        font-weight: ${theme.fontWeights.heading[props.alternative ? 'alternative' : 'default']};
        text-overflow: ${props.isSingleLine ? 'ellipsis' : 'initial'};
        white-space: ${props.isSingleLine ? 'nowrap' : 'initial'};
        overflow: ${props.isSingleLine ? 'hidden' : 'initial'};
        letter-spacing: 0;
      `}
    >
      {props.children}
    </div>
  )
}

const HeadingContainer = styled.div<HeadingProps>`
  color: ${(props) => props.theme.colors.text[props.color ?? 'primary']};
  font-size: ${(props) => props.theme.fontSizes.heading[props.size]};
`
