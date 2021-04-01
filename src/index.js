const request = require('./services/request');
const { csvToJSON, parseCSVURL } = require('./util/index');
const _ = require('./common/lodash/index');
const { load } = require('./common/cheerio/index');
const tabletojson = require('./common/tabletojson/index');


// const countries = async () => {
//   const res = await request(`https://github.com/owid/covid-19-data/tree/master/public/data/vaccinations/country_data`);
//   const str = res ? res.toString().trim() : null;
//   const urls = str && str.match(/(?<=href=").*?(?=[\*"])/g);
//   let csvURLs = urls && _.map(_.filter(urls, (url) => { return url.match(/\.csv/g) }), (url) => decodeURI(`https://github.com${url}`))
//   _.forEach(csvURLs, async(url) =>{
//     const csv = await parseCSVURL(decodeURI(url));
//     console.log(csv);
//   });    
// };

const vaccinations = async() =>{
  return new Promise(async(resolve, reject) =>{
    try {
      const json = await request(`https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json`);
      resolve(json);
    } catch (error) {
      const e = new Error(error);
      reject(e.message);
    }
  });
};

const vaccinationsByManufacturer = async() =>{
  return new Promise(async(resolve, reject) =>{
    try {
      const res = await request(`https://github.com/owid/covid-19-data/blob/master/public/data/vaccinations/vaccinations-by-manufacturer.csv`);
      const $ = load(res);
      const html = $.html();
      const fullTable = tabletojson.convert(html, {
        useFirstRowForHeadings: true,
      });
      const table = (fullTable && fullTable[0] || null);
      const data = _.chain(table)
        .groupBy('location')
        .map((value, key) => ({location: key , data: value}))
        .slice(1)
        .value()
      resolve(data);
    } catch (error) {
      const e = new Error(error);
      reject(e.message);
    }
  });
};  

const locations = () =>{
  return new Promise(async(resolve, reject) =>{
    try {
      const res = await request(`https://github.com/owid/covid-19-data/blob/master/public/data/vaccinations/locations.csv`);
      const $ = load(res);
      const html = $.html();
      const fullTable = tabletojson.convert(html, {
        useFirstRowForHeadings: true,
      });
      const table = (fullTable && fullTable[0] || null);
      const data = _.chain(table)
        .sortBy('location')
        .slice(1)
        .value()
      resolve(data);
    } catch (error) {
      const e = new Error(error);
      reject(e.message);
    };
  });
};

const usaVaccinations = () =>{
  return new Promise(async(resolve, reject) =>{
    try {
      const res = await request(`https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/us_state_vaccinations.csv`);
      const $ = load(res);
      const html = $('html').text().trim();
      const json = csvToJSON(html);
      resolve(json);
    } catch (error) {
      const e = new Error(error);
      reject(e.message);
    };
  });
};

module.exports = {
  locations,
  vaccinations,
  vaccinationsByManufacturer,
  usaVaccinations
};