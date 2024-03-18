// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_URL + `/user/loginWithGoogle`,
      // 'http://localhost:4000'+`/user/loginWithGoogle`,
      req.body
    );

    res.send(response.data);
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
