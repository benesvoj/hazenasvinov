import {Nullish} from "../../types/Nullish";
import {css, useTheme} from "styled-components";

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type HeadingColor =
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'danger'
    | 'success'
    | 'link'
    | 'white';

export interface HeadingProps {
    size: HeadingLevel;
    isSingleLine?: boolean;
    alternative?: true;
    headingLevel?: HeadingLevel;
    children?: Nullish | string;
    color?: HeadingColor;
}

export function Heading(props: HeadingProps) {
    const theme = useTheme();

    return (
        <div
            css={css`font-size: ${theme.fontSizes.heading[props.size]}`}
        >
            {props.children}
        </div>
    )
}

// role="heading"
// aria-level={props.headingLevel ?? props.size}
// color: ${theme.colors.text[props.color ?? 'primary']};
// font-family: ${theme.fonts.heading};
// line-height: ${theme.lineHeights.heading[props.size]};
// font-weight: ${theme.fontWeights.heading[props.alternative ? 'alternative' : 'default']};
// text-overflow: ${props.isSingleLine ? 'ellipsis' : 'initial'};
// white-space: ${props.isSingleLine ? 'nowrap' : 'initial'};
// overflow: ${props.isSingleLine ? 'hidden' : 'initial'};
// letter-spacing: 0;