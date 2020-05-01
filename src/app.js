import express from 'express';

import cors from 'cors';

export const createApp = () => {
  const app = express();

  app.use(cors());
  app.get('/', (req, res) => {
    res.send('It works!!!!');
  });

  return app;
};
