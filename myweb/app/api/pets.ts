import { NextApiRequest, NextApiResponse } from "next";
import { initialPets } from "../../data/initialPets";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(initialPets);
}
