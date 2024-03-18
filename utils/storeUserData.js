import axios from 'axios';

const storeUserData = (refreshtoken) => {
  return new Promise(async (resolve, reject) => {
    let response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/user/access_token`,
      {
        refreshToken: refreshtoken,
      }
    );
    const info = await axios.get(`${process.env.NEXT_PUBLIC_URL}/user/info`, {
      headers: {
        Authorization: response.data.access_token,
      },
    });

    resolve({
      token: response.data.access_token,
      user: info.data.user,
    });
  });
};

export default storeUserData;
