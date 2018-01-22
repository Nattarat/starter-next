// Import
// ============================================================
// Dependencies
import styled, { css } from 'styled-components'
import { clearFix, tint } from 'polished'
// Local
import {
    screens
} from '../variables'
import {
    textHide
} from '../helpers'
import {
    from,
    until,
    fromUntil,
    screenUntil
} from '../mixins'

// Styled component
// ============================================================

// 1. ออกแบบ props ของ component
// 2. ทำ group css ตาม props ที่ออกแบบ
// 3. นำ group css ไปใส่ใน props

// CSS !!!!!!!!!!!!!!!!!!!!!!!!!!!! ล้อตาม Variant (props) !!!!!!!!!!!!!!!!!!!!!!!!!!!!
// * Displays
// * Themes
// * Sizes
// * Compositions
// * Media queries
// -------------------------------
const variants = {
	default: css`font-size: 32px;`,
	big: css`font-size: 50px;`,
	medium: css`font-size: 25px;`,
	small: css`font-size: 12px;`
}

const underlineTextStyle = css`
	font-style: italic;
	text-decoration: underline;
`

const specialTextStyle = css`
	color: #ee45a1;
`

const styleDefault = css`
    color: #ee45a1;
`

// Displays
// -
// Displays > Default
const displayDefault = css`
    display: flex;
    vertical-align: middle;
`

// Displays > Block
const displayBlock = css`
    display: block;
    vertical-align: middle;
`

// Displays > Inline block
const displayInlineBlock = css`
    display: inline-block;
    vertical-align: middle;
`

// Media queries
// -
// Media queries > Default
const mediaQueryDefault = css`
    // Mobile
    @media screen and (max-width: ${screens.tabLgMax}) {
        background-color: red;
        color: white;
	}

    // Desktop
    @media (min-width: ${screens.labSm}) {
        background-color: green;
        color: white;
	}
`

// Media queries > Primary
const mediaQueryPrimary = css`
    // Mobile
    @media screen and (max-width: ${screens.tabLgMax}) {
        background-color: blue;
        color: white;
    }

    // Desktop
    @media (min-width: ${screens.labSm}) {
        background-color: yellow;
        color: white;
    }
`

// Variant (props) !!!!!!!!!!!!!!!!!!!!!!!!!!!! ล้อตาม Variant (props) !!!!!!!!!!!!!!!!!!!!!!!!!!!!
// * Displays
// * Themes
// * Sizes
// * Compositions
// * Media queries
// -------------------------------

// Displays
const variantDisplays = {
    default: css`${displayDefault}`,
    block: css`${displayBlock}`,
    inlineBlock: css`${displayInlineBlock}`
}

// Media queries
const variantMediaQueries = {
    default: css`
        ${mediaQueryDefault}
    `,
    primary: css`
        ${mediaQueryPrimary}
    `
}









// Elements
// -------------------------------
const Title = styled.h1`
    // Helpers

    // Mixins
    ${clearFix()}

    // CSS
    content: '${screens.desSmMax}';
	font-family: 'Menlo', sans-serif;
	color: ${props => props.red ? "#f00" : "#666"};
	${props => props.variant && variants[props.variant] || variants['default']}
	${props => props.underline && underlineTextStyle}
    ${props => props.special && specialTextStyle}
    // background-color: ${tint(0.5, '#f00')};

    // Media queries
    ${props => props.variantMediaQuery && variantMediaQueries[props.variantMediaQuery]}
`

const buttonEdit = styled.button`
    // Helpers
    // >>>>>>>>>>>>>>>>>>>>>>>

    // Mixins
    // >>>>>>>>>>>>>>>>>>>>>>>

    // Component itself
    // >>>>>>>>>>>>>>>>>>>>>>>

    // Child elements
    // >>>>>>>>>>>>>>>>>>>>>>>
    .button-icon {

    }

    .button-text {

    }

    // Component state
    // >>>>>>>>>>>>>>>>>>>>>>>

    // Modifier
    // >>>>>>>>>>>>>>>>>>>>>>>

    // Component state with modifier
    // >>>>>>>>>>>>>>>>>>>>>>>

    // Media queries
    // >>>>>>>>>>>>>>>>>>>>>>>
`

export default Title
