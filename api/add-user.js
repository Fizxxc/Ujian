import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const { username, password, role } = req.body;

  const filePath = path.resolve('./database/users.json');
  const users = JSON.parse(fs.readFileSync(filePath));

  users.push({ username, password, role });
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

  res.status(200).json({ success: true });
}
