import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'kkopi',
    });

    if (req.method === 'POST') {
      // 🔐 User Registration
      const { firstName, lastName, email, password } = req.body;

      if (!firstName || !lastName || !email || !password) {
        await connection.end();
        return res.status(400).json({ message: 'Missing required fields' });
      }

      const [existing] = await connection.execute(
        'SELECT * FROM user_accounts WHERE email = ?',
        [email]
      );

      if (existing.length > 0) {
        await connection.end();
        return res.status(409).json({ message: 'User already exists' });
      }

      await connection.execute(
        'INSERT INTO user_accounts (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
        [firstName, lastName, email, password]
      );

      await connection.end();
      return res.status(200).json({ message: 'User registered successfully' });
    }

    if (req.method === 'GET') {
      // 🧠 Simulate session auth (user ID = 1 for now)
      const userId = 1;

      const [rows] = await connection.execute(
        'SELECT first_name, last_name, avatar FROM user_accounts WHERE id = ?',
        [userId]
      );

      await connection.end();

      if (rows.length === 0) {
        return res.status(404).json({ message: 'User not found' });
      }

      return res.status(200).json(rows[0]);
    }

    await connection.end();
    return res.status(405).json({ message: 'Method not allowed' });
  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
}
