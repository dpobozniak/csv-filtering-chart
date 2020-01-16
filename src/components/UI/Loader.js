import React from 'react';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  margin: 2em 0;
  text-align: center;
`;

const LoaderItem = styled.div`
  display: inline-block;
  height: 64px;
  width: 64px;

  &::after {
    animation: loader-rotation 1.2s linear infinite;
    content: '';
    display: block;
    height: 46px;
    border-radius: 50%;
    border-width: 4px;
    border-style: solid;
    border-color: #72a4e5 transparent;
    margin: 1px;
    width: 46px;
  }

  @keyframes loader-rotation {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;


const Loader = () => (
  <LoaderWrapper>
    <LoaderItem />
  </LoaderWrapper>
);

export default Loader;
