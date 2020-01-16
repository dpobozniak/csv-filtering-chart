import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  background: #fff;
  border-bottom: 1px solid #d8dfe8;
  display: grid;
  grid-column: full;
  grid-template-columns: inherit;
`;

const Inner = styled.div`
  align-items: center;
  display: flex;
  grid-column: main;
  padding: 1em 0;
`;

const Title = styled.h1`
  font-weight: 700;
  margin: 0;
`;

const Header = () => (
  <Wrapper>
    <Inner>
      <Title>Adverity Advertising Data ETL-V</Title>
    </Inner>
  </Wrapper>
);

export default Header;
