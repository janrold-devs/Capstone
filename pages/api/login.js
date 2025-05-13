// /pages/api/login.js
import mysql from 'mysql2/promise';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password required' });
    }

    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'kkopi',
        });

        // Step 1: Check if email exists
        const [user] = await connection.execute(
            'SELECT * FROM user_accounts WHERE email = ?',
            [email]
        );

        if (user.length === 0) {
            await connection.end();
            return res.status(401).json({ message: 'Email is incorrect' });
        }

        const dbUser = user[0];

        // Step 2: Check password
        if (dbUser.password !== password) {
            await connection.end();
            return res.status(401).json({ message: 'Password is incorrect' });
        }

        await connection.end();
        return res.status(200).json({ 
            message: 'Login successful',
            user: {
                firstName: dbUser.first_name,
                lastName: dbUser.last_name,
            }
        });

    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
}
