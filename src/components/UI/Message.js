import PropTypes from 'prop-types';
import styled from 'styled-components';

const Message = styled.p`
  margin: 2em 0;
  text-align: center;

  color: ${props => props.type === 'error' ? '#da1818' : '#454fce'};
`;

Message.propTypes = {
  type: PropTypes.oneOf(['error', 'info']),
  children: PropTypes.string.isRequired,
};

Message.defaultProps = {
  type: 'info',
};

export default Message;
