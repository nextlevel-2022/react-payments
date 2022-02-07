import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';

export const NumbersInputContainer = ({ numbers, handleChange }) => {
  return (
    <Styled.Container>
      <Styled.Input name={'numbers'} value={numbers} onChange={handleChange} />
    </Styled.Container>
  );
};

NumbersInputContainer.propTypes = {
  numbers: PropTypes.string,
};

NumbersInputContainer.defaultProps = {
  numbers: '',
};
