// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const sendNotification = await axios.post(
    "https://exp.host/--/api/v2/push/send",
    {
      to: "ExponentPushToken[bROftxB0IDfzNBTAt6iMOo]",
      title: `${req.query.name} Has Requested Entry!`,
      body: "A new visitor has arrived",
    }
  );
  res.status(200).json({ name: "DONE" });
}
