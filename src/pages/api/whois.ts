// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { WatchOptions } from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
import whois from "whois-json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    //pull domain name from query string.
    const domain = req.query["domain"];

    const response = await whois(domain as string);

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(`cannot find ${JSON.parse(req.body)}`);
  }
}
