import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-block;
  cursor: pointer;
  border: 0;
  border-radius: 3em;
  font-weight: 700;
  line-height: 1;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;

  ${({ primary }) =>
    primary
      ? `
        background-color: #555ab9;
        color: white;
      `
      : `
        box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
        background-color: transparent;
        color: #333;
      `}

  ${({ size }) => {
    switch (size) {
      case 'small':
        return `
          padding: 10px 16px;
          font-size: 12px;
        `;
      case 'large':
        return `
          padding: 12px 24px;
          font-size: 16px;
        `;
      default:
        return `
          padding: 11px 20px;
          font-size: 14px;
        `;
    }
  }}

  ${({ backgroundColor }) =>
    backgroundColor &&
    `
      background-color: ${backgroundColor};
    `}
`;

//definición del componente Button con sus props
/** Primary UI component for user interaction */
export const Button = ({ primary = false, backgroundColor = null, size = 'medium', label, ...props }) => {
  return (
    <StyledButton primary={primary} size={size} backgroundColor={backgroundColor} {...props}>
      {label}
    </StyledButton>
  );
};

//define el tipo de dato de los props

Button.propTypes = {
  /** Is this the principal call to action on the page? */
  primary: PropTypes.bool,
  /** What background color to use */
  backgroundColor: PropTypes.string,
  /** How large should the button be? */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Button contents */
  label: PropTypes.string.isRequired,
  /** Optional click handler */
  onClick: PropTypes.func,
};
