// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_URL + `/reservation/get-user-reservation`,
      {
        headers: {
          'Content-type': 'application/json',
          Authorization: req.body.token,
        },
      }
    );

    res.send(response.data.reservation);
  } catch (error: any) {
    let errMsg: any;
    let errStatus = 400;
    if (error.response) {
      errMsg = error.response.data;
      errStatus = error.response.status;
    }
    res.status(errStatus).send({ errMsg });
  }
};
export default handler;
