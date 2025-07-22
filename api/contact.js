export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;
    return res.status(200).json({ success: true, message: 'Message received!' });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
