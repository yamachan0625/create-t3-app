/* eslint-disable */

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/');
  const users = await response.json();
  res.status(200).json({ users });
}
