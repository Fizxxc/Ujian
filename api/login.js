export default async function handler(req, res) {
  const { username, password } = req.body;
  const users = require('../database/users.json');

  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.status(200).json({ success: true, role: user.role });
  } else {
    res.status(401).json({ success: false });
  }
}
