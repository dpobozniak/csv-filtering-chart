import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const H2 = styled.h2`
  font-size: 1.6em;
  font-weight: 600;
  margin: 0;
`;

const H3 = styled.h3`
  font-size: 1.2em;
  font-weight: 600;
  margin: 0 0 1em;
`;

const Title = ({ type, children }) => {
  if (type === 'primary') {
    return <H2>{children}</H2>
  }
  
  return <H3>{children}</H3>
};

Title.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
};

Title.defaultProps = {
  type: 'secondary',
};

export default Title;
