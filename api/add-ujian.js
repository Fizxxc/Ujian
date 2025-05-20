// api/add-ujian.js
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Hanya menerima POST' });
  }

  const filePath = path.resolve('./data/ujians.json');

  try {
    const ujianBaru = {
      id: Date.now(),
      ...req.body
    };

    let data = [];
    if (fs.existsSync(filePath)) {
      const json = fs.readFileSync(filePath, 'utf-8');
      data = JSON.parse(json);
    }

    data.push(ujianBaru);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    res.status(200).json({ message: 'Ujian berhasil ditambahkan', ujian: ujianBaru });
  } catch (err) {
    res.status(500).json({ message: 'Gagal menyimpan ujian', error: err.message });
  }
}
