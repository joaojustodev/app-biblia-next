import { NextApiRequest, NextApiResponse } from "next";
import versions from "./versions.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(versions);
}
