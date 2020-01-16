import React from 'react';
import styled from 'styled-components';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

import Loader from '../UI/Loader';
import Title from '../UI/Title';
import Message from '../UI/Message';

const Wrapper = styled.section`
  background: #fff;
  border: 1px solid #e6e6ea;
  border-radius: 0.3em;
  padding: 1em;
`;

const TitleElement = styled.span`
  display: block;
  padding: 0 0 0.5em;
`;

const Chart = ({ title, isLoading, error, data }) => (
  <Wrapper>
    <Title>
      <TitleElement>{`Datasource: ${title.datasource || 'All'}`}</TitleElement>
      <TitleElement>{`Campaign: ${title.campaign || 'All'}`}</TitleElement>
    </Title>
    {
      isLoading
      && (
        <Loader />
      )
    }
    {
      error
      && (
        <Message type="error">
          Ups... There was an error while fetching data
        </Message>
      )
    }
    {
      !isLoading && !error && data.length > 0
      && (
        <ResponsiveContainer width="100%" aspect={1.7}>
          <LineChart
            width={700}
            height={500}
            data={data}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="clicks" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line yAxisId="right" type="monotone" dataKey="impressions" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      )
    }
    {
      !isLoading && !error && data.length === 0
      && (
        <Message type="info">
          No data matching filtering criteria
        </Message>
      )
    }
  </Wrapper>
);

export default Chart;
