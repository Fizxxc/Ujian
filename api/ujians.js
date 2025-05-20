// api/ujians.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.resolve('./data/ujians.json');

  if (!fs.existsSync(filePath)) {
    return res.status(200).json([]);
  }

  const json = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(json);
  res.status(200).json(data);
}
