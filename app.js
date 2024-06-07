const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3000;
require('dotenv').config();

const allRoutes = require('./routes');
const db = require('./config/db');

const app = express();

async function startServer() {
  try {
    await db;
    console.log('berhasil terhubung ke database');

    app.use(cors());
    app.use(express.json({ limit: '50mb' }));
    app.use(express.urlencoded({ limit: '50mb', extended: true }));

    app.use('/uploads', express.static('uploads')); // Serve the uploads directory as static files
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
