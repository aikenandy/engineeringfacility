// backend/server.js
import express, { json } from 'express';
import { Client } from 'pg';
const app = express();
const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

app.use(json());

app.get('/api/buildings', async (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).send('Name query parameter is required');
  }

  try {
    await client.connect();

    const result = await client.query(
      `SELECT * FROM Building WHERE name ILIKE $1`,
      [`%${name}%`]
    );

    res.json(result.rows);
  } catch (err) {
    res.status(500).send('Error fetching buildings');
  } finally {
    await client.end();
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
