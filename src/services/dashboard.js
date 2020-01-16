import csvJSON from '../utils/csvJSON';
import uniqBy from 'lodash/uniqBy';

const dashboardService = () => {
  const getAdverts = async () => {
    const url = 'http://adverity-challenge.s3-website-eu-west-1.amazonaws.com/DAMKBAoDBwoDBAkOBAYFCw.csv';

    const response = await fetch(url);

    if (!response.ok) {
      throw Error(`DashboardService getAdverts failed, HTTP status ${response.status}`);
    }

    const data = await response.text();

    const json = csvJSON(data);

    return json;
  };

  const simplifyFilterValues = (filterValues) =>
    Object.keys(filterValues).reduce((filter, key) => {
      if (filterValues[key].length > 0) {
        const keyArray = filterValues[key].reduce((acc, item) => {
          acc.push(item.label);
      
          return acc;
        }, []);

        filter[key] = keyArray;
      }

      return filter;
    }, {});

  const stringifyFilterValues = (filterValues) => {
    const { datasource = [], campaign = []} = filterValues;

    return {
      datasource: datasource.join(' and '),
      campaign: campaign.join(' and '),
    }
  };

  const filterData = (data, query) => 
    data.filter(item => {
      for (let key in query) {
        if (item[key] === undefined || !query[key].includes(item[key])) {
          return false;
        }
      }

      return true;
    });

  const getArrayUniqueValues = (array, key) => 
    uniqBy(array, key)
    .filter(item => item[key])
    .map(item => ({ label: item[key], value: item[key] }));

  const getDatasources = (array) => getArrayUniqueValues(array, 'datasource');

  const getCampaigns = (array) => getArrayUniqueValues(array, 'campaign')

  return Object.freeze({
    getAdverts,
    getCampaigns,
    getDatasources,
    filterData,
    simplifyFilterValues,
    stringifyFilterValues,
  });
};

export default dashboardService();
