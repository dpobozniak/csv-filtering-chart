import React, { useState } from 'react';
import Select from 'react-select';
import styled from 'styled-components';

import Loader from '../UI/Loader';
import Title from '../UI/Title';
import Button from '../UI/Button';

import DashboardService from '../../services/dashboard';

const Form = styled.form`
  background: #fff;
  border: 1px solid #e6e6ea;
  border-radius: 0.3em;
  padding: 1em;
`;

const Label = styled.span`
  display: block;
  margin-bottom: 0.5em;
`;

const ElementWrapper = styled.div`
  margin: 1.5em 0;
`;

const Filters = ({ options, onChange, onSubmit, selectedOptions, isLoading }) => {
  const [filterValues, setFilterValues] = useState({
    datasource: [],
    campaign: [],
  });

  const handleFilterChange = (value, actionMeta) => {
    const { name } = actionMeta;

    // react-select, when a field is empty, returns `null` instead of array
    value = value || [];

    setFilterValues({
      ...filterValues,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const simplifiedValues = DashboardService.simplifyFilterValues(filterValues);

    onSubmit(simplifiedValues);
  }
  
  return (
    <Form>
      <Title>Filter values</Title>
      {
        isLoading
        ? <Loader />
        : (
          <>
            <ElementWrapper>
              <Label>Datasource:</Label>
              <Select
                value={filterValues['datasource']}
                onChange={handleFilterChange}
                options={options['datasources']}
                isMulti
                name="datasource"
              />
            </ElementWrapper>
            <ElementWrapper>
              <Label>Campaign:</Label>
              <Select
                value={filterValues['campaign']}
                onChange={handleFilterChange}
                options={options['campaigns']}
                isMulti
                name="campaign"
              />
            </ElementWrapper>
            <ElementWrapper>
              <Button onClick={handleSubmit}>Apply</Button>
            </ElementWrapper>
          </>
        )
      }
    </Form>
  );
};

export default Filters;
