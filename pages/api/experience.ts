import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { Expetience } from "@/typings";

const query = groq`
  *[_type == "experience"] {
    ...,
    technologies[]->
  }
`;

type Data = {
  experiences: Expetience[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const experiences: Expetience[] = await sanityClient.fetch(query);

  res.status(200).json({ experiences });
}
