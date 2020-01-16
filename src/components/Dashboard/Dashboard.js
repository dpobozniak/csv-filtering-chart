import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Filters from './Filters';
import Chart from './Chart';
import Title from '../UI/Title';

import DashboardService from '../../services/dashboard';

function useDashboardData() {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const data = await DashboardService.getAdverts();

      setData(data);
    } catch(error) {
      setError(error);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    error,
    data,
    isLoading,
  };
}

function useDashboardInitialData(initialData) {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(initialData);
  }, [initialData]);

  return {
    filteredData,
    setFilteredData,
  }
}

const Wrapper = styled.section`
  display: grid;
  grid-gap: 1em;

  @media (min-width: 45em) {
    grid-template-columns: 1fr 2fr;
  }
`;

const Header = styled.header`
  @media (min-width: 45em) {
    grid-column: 1 / 3;
  }
`;

const Dashboard = () => {
  const { data, isLoading, error } = useDashboardData();
  const { filteredData, setFilteredData } = useDashboardInitialData(data);
  const [filterValues, setFilterValues] = useState({});
  const datasources = DashboardService.getDatasources(data);
  const campaigns = DashboardService.getCampaigns(data);

  const handleSubmit = (query) => {
    setFilterValues(query);

    const filteredArray = DashboardService.filterData(data, query);

    setFilteredData(filteredArray);
  }

  return (
    <Wrapper>
      <Header>
        <Title type="primary">Advertising Chart</Title>
      </Header>
      <Filters
        options={{ datasources, campaigns }}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
      <Chart
        title={DashboardService.stringifyFilterValues(filterValues)}
        isLoading={isLoading}
        error={error}
        data={filteredData.slice(0,10)} // take only first 10 items (not much space in the graph)
      /> 
    </Wrapper>
  )
};

export default Dashboard;
