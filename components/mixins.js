import styled, { css } from 'styled-components'

// //////////////////////////////////////////////////////////////////////////////////////////////////
// ==================================================================================================
//
// Mixins
// * Media queries
//   - from
//   - until
//   - fromUntil
//
// ==================================================================================================
// //////////////////////////////////////////////////////////////////////////////////////////////////

// Media queries
// ==================================================================================================
function from(screen, css) {
	return `@media (min-width: ${screen}) {
		${css}
	}`
}

function until(screen, css) {
	return `@media (max-width: ${screen}) {
		${css}
	}`
}

function fromUntil(screenFrom, screenUntil, css) {
	return `@media (min-width: ${screenFrom}) and (max-width: ${screenUntil}) {
		${css}
	}`
}

function screenUntil(screenUntil, css) {
	return `@media screen and (max-width: ${screenUntil}) {
		${css}
	}`
}

export {
    from,
    until,
    fromUntil,
    screenUntil
}