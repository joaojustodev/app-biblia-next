import { NextApiRequest, NextApiResponse } from "next";
import books from "./books.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(books);
}
