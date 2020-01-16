const csvJSON = (csv) => {
  const lines = csv.split('\n');

  const headers = lines[0].split(',').map(item => item.toLowerCase());

  // ignore headers and start from second item of the array
  const json = lines.slice(1).reduce((jsonArray, line) => {
    const obj = {};
    const currentline = line.split(',');

    for(let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }

    jsonArray.push(obj);

    return jsonArray;
  }, []);

  return json;
}

export default csvJSON;
