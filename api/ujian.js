export default async function handler(req, res) {
  // Data dummy, bisa diganti dari file/database
  const data = [
    { nama: "Ujian Matematika", tanggal: "2025-05-20" },
    { nama: "Ujian Bahasa Inggris", tanggal: "2025-05-21" }
  ];
  res.status(200).json(data);
}
