// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  try {
    // const response = await axios.post(
    //   API_URL+`/item-services`,
    //   req.body.form,
    //   {
    //     headers : { 
    //       'Content-type': 'application/json',
    //       'Authorization': `Bearer ${req.body.token}`
    //     },
    //   }
    // )
    // res.status(200).send(response.data)
  } catch (error: any) {
    let errMsg:any;
    let errStatus = 400;
    if (error.response) {
      errMsg = error.response.data
      errStatus = error.response.status
    }

    res.status(errStatus).send({errMsg})
  }

  res.status(200).json({ name: 'John Doe' })
}

// const res = await axios.post('/api/services-categories', data)
// const response = await axios.post('/api/services-categories/delete', {
//   token,
//   id: data.id,
// });