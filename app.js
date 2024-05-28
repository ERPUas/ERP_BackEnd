const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

const allRoutes = require('./routes');
const db = require('./config/db');

async function startServer() {
  try {
    await db;
    console.log('berhasil terhubung ke database');

    app.use(cors());
    // Mengatur batas payload menjadi 50MB atau sesuai kebutuhan
    app.use(express.json({ limit: '50mb' }));
    app.use(express.urlencoded({ limit: '50mb', extended: true }));

    app.use(allRoutes);
    app.get('/', (req, res) => {
      res.send('hello');
    });

    app.listen(port, () => {
      console.log(`Aplikasi berjalan pada port ${port}`);
    });
  } catch (err) {
    console.error('gagal terhubung ke database', err);
  }
}

startServer();