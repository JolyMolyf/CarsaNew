import express, { Application } from 'express';
import session from './middleware/session';
import path from 'path';
import fs from 'fs';
import cookieParser from 'cookie-parser';
import corsMiddleware from './middleware/cors';
import router from './routes';
import db from './database/models';
// var cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT;

const app: Application = express();
app.disable('x-powered-by');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Setup CORS Logic
app.options('*', corsMiddleware);
app.use(corsMiddleware);

app.use('/uploads', express.static(path.resolve(__dirname, 'uploads')));

// Setup session middleware with Redis storage
app.use(session);

// Connecting routes
app.use(router);

db.sequelize.sync().then(() => {
  app.listen(PORT || 8080, () => {
    console.log('Server is listening on port', process.env.PORT || 8080);
  });

  const triggersDirName = path.resolve(__dirname, 'database', 'triggers');
  fs.readdirSync(triggersDirName).forEach((fileName) => {
    const sqlData = fs.readFileSync(path.join(triggersDirName, fileName), 'utf8');
    db.sequelize.query(sqlData);
  });
});

export default app;
