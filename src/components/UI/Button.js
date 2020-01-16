import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  border-radius: 0.2em;
  background: #4091fd;
  border: 0 none;
  color: #fff;
  font-size: 100%;
  padding: 0.8em 1.5em;
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'button']),
  children: PropTypes.string.isRequired,
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
