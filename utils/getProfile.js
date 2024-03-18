import axios from 'axios';
const getProfile = (token) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_URL + `/profile`,
        {
          headers: {
            'Content-type': 'application/json',
            Authorization: token,
          },
        }
      );

      resolve(response.data.profile);
    } catch (error) {
      let errMsg;
      let errStatus = 400;
      if (error.response) {
        errMsg = error.response.data;
        errStatus = error.response.status;
      }
      reject({ errMsg });
    }
  });
};

export default getProfile;
