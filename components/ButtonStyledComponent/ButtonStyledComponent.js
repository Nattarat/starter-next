import React from 'react';
import PropTypes from 'prop-types';
import Title from './style';

/**
 * Component description...
 */

export default function ButtonStyledComponent({ color, size, onClick, children, variant, variantMediaQuery }) {
	const styles = {
		color,
        fontSize: ButtonStyledComponent.sizes[size],
        variant,
	};

	return (
        <div>
            <Title underline variant={variant} variantMediaQuery={variantMediaQuery}>Title</Title>
            <button className="button" style={styles} onClick={onClick}>
                {children}
            </button>
        </div>
	);
}

ButtonStyledComponent.propTypes = {
	/** Button label */
	children: PropTypes.string.isRequired,
	/** The color for the button */
	color: PropTypes.string,
	/** The size of the button */
	size: PropTypes.oneOf(['small', 'normal', 'large']),
	/** Gets called when the user clicks on the button */
    onClick: PropTypes.func,
    variant: PropTypes.string,
    variantMediaQuery: PropTypes.string,
};

ButtonStyledComponent.defaultProps = {
	color: '#333',
	size: 'normal',
	/* eslint-disable no-console */
	onClick: event => {
		console.log('You have clicked me!', event.target);
    },
    variant: 'big',
    variantMediaQuery: 'default',
	/* eslint-enable no-console */
};

ButtonStyledComponent.sizes = {
	small: '10px',
	normal: '14px',
	large: '18px',
};
