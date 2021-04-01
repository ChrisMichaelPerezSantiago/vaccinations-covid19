const parseCSVURL = async (url) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await request(url);
      const $ = load(res);
      const html = $.html();
      const fullTable = tabletojson.convert(html, {
        useFirstRowForHeadings: true,
      });
      const table = (fullTable && fullTable[0] || null);
      const data = _.chain(table)
        .groupBy('location')
        .map((value, key) => ({ location: key, data: value }))
        .slice(1)
        .value()
      resolve(data[0] || null);
    } catch (error) {
      const e = new Error(error);
      reject(e.message);
    };
  });
};

const csvToJSON = (csv) => {
  const [firstLine, ...lines] = csv.split('\n');
  return lines.map(line =>
    firstLine.split(',').reduce(
      (curr, next, index) => ({
        ...curr,
        [next]: line.split(',')[index],
      }),
      {}
    )
  );
};

module.exports = {
  parseCSVURL,
  csvToJSON
};