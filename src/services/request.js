const axios = require('../common/axios/index');

const request = async(url) =>{
  return new Promise(async(resolve, reject) =>{
    try {
     const { data } = await axios({
       method: 'GET',
       url: url
     }); 
     resolve(data);
    } catch (error) {
      const e = new Error(error);
      reject(e.message);
    };
  });
};

module.exports = request;